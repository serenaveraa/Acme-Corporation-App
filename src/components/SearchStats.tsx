import React from 'react'

interface SearchStatsProps {
  total: number
  currentPage: number
  limit: number
  searchTerm: string
}

const SearchStats: React.FC<SearchStatsProps> = ({ total, currentPage, limit, searchTerm }) => {
  const startIndex = (currentPage - 1) * limit + 1
  const endIndex = Math.min(currentPage * limit, total)

  return (
    <div className="mb-4 text-sm text-black bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
      {searchTerm ? (
        <>
          Showing {startIndex}-{endIndex} of {total} users for "{searchTerm}"
        </>
      ) : (
        <>
          Showing {startIndex}-{endIndex} of {total} users
        </>
      )}
    </div>
  )
}

export default SearchStats