import React from 'react';

interface TableFooterProps {
  total: number;
  currentPage: number;
  pageSize: number;
  searchTerm: string;
  loading: boolean;
  onPageChange: (page: number) => void;
}

const TableFooter: React.FC<TableFooterProps> = ({ 
  total, 
  currentPage, 
  pageSize, 
  searchTerm, 
  loading, 
  onPageChange 
}) => {
  if (loading) return null;

  const totalPages = Math.ceil(total / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, total);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-t border-black bg-gray-50">
      {/* Search Stats */}
      <div className="text-sm text-gray-600">
        {searchTerm ? (
          <>
            Showing <span className="font-semibold text-black">{startItem}-{endItem}</span> of{' '}
            <span className="font-semibold text-black">{total}</span> results for{' '}
            <span className="font-semibold text-black">"{searchTerm}"</span>
          </>
        ) : (
          <>
            Showing <span className="font-semibold text-black">{startItem}-{endItem}</span> of{' '}
            <span className="font-semibold text-black">{total}</span> users
          </>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            className={`px-4 py-2 border border-black rounded-md font-medium transition-all ${
              currentPage === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  className={`px-3 py-2 border border-black rounded-md font-medium transition-all ${
                    currentPage === pageNum
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                  onClick={() => onPageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          <button
            className={`px-4 py-2 border border-black rounded-md font-medium transition-all ${
              currentPage === totalPages 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TableFooter;
