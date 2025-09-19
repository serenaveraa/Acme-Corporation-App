import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { User, UsersResponse, SearchResponse } from '../models/UserModels';

const API_BASE_URL = 'https://dummyjson.com/users';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [limit] = useState(5);

  const fetchUsers = useCallback(async (page: number = 1, search: string = '') => {
    setLoading(true);
    setError(null);

    try {
      const skip = (page - 1) * limit;
      const params = new URLSearchParams();
      
      if (search.trim()) {
        params.append('q', search);
        params.append('limit', limit.toString());
        params.append('skip', skip.toString());
        const response = await axios.get<SearchResponse>(`${API_BASE_URL}/search`, { params });
        const data = response.data;
        setUsers(data.users);
        setTotal(data.total);
      } else {
        params.append('limit', limit.toString());
        params.append('skip', skip.toString());
        const response = await axios.get<UsersResponse>(API_BASE_URL, { params });
        const data = response.data;
        setUsers(data.users);
        setTotal(data.total);
      }
      
      setCurrentPage(page);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message || 'An error occurred');
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
      setUsers([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUsers(1, searchTerm);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, fetchUsers]);

  useEffect(() => {
    fetchUsers(1);
  }, [fetchUsers]);

  const handlePageChange = (page: number) => {
    fetchUsers(page, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    users,
    loading,
    error,
    total,
    currentPage,
    searchTerm,
    limit,
    handlePageChange,
    handleSearch,
    clearSearch,
    refetch: () => fetchUsers(currentPage, searchTerm)
  };
};
