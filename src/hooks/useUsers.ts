import { useState, useEffect, useCallback } from 'react';
import { User, UsersResponse, SearchResponse } from '../models/UserModels';

const API_BASE_URL = 'https://dummyjson.com/users';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [limit] = useState(5); // 5 users per page as mentioned in README

  const fetchUsers = useCallback(async (page: number = 1, search: string = '') => {
    setLoading(true);
    setError(null);

    try {
      const skip = (page - 1) * limit;
      let url: string;
      
      if (search.trim()) {
        url = `${API_BASE_URL}/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`;
      } else {
        url = `${API_BASE_URL}?limit=${limit}&skip=${skip}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: UsersResponse | SearchResponse = await response.json();
      
      setUsers(data.users);
      setTotal(data.total);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setUsers([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUsers(1, searchTerm);
    }, 400); // 400ms debounce as mentioned in README

    return () => clearTimeout(timeoutId);
  }, [searchTerm, fetchUsers]);

  // Initial load
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
