import { useEffect, useCallback } from 'react';

interface UseUrlSyncProps {
  search: string;
  page: number;
  onSearchChange: (search: string) => void;
  onPageChange: (page: number) => void;
}

export const useUrlSync = ({ search, page, onSearchChange, onPageChange }: UseUrlSyncProps) => {
  // Sincronizar URL con el estado actual
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (page > 1) params.set('page', page.toString());
    
    const newUrl = params.toString();
    const currentUrl = window.location.search.substring(1);
    
    if (newUrl !== currentUrl) {
      const newUrlString = newUrl ? `?${newUrl}` : window.location.pathname;
      window.history.replaceState({}, '', newUrlString);
    }
  }, [search, page]);

  // Cargar estado inicial desde URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlSearch = urlParams.get('q') || '';
    const urlPage = parseInt(urlParams.get('page') || '1', 10);
    
    if (urlSearch !== search) {
      onSearchChange(urlSearch);
    }
    if (urlPage !== page && urlPage > 0) {
      onPageChange(urlPage);
    }
  }, []); // Solo ejecutar una vez al montar

  // Función para limpiar filtros
  const clearFilters = useCallback(() => {
    window.history.replaceState({}, '', window.location.pathname);
    onSearchChange('');
    onPageChange(1);
  }, [onSearchChange, onPageChange]);

  return { clearFilters };
};
