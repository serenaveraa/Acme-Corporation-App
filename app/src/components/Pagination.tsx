
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  loading: boolean
}

function Pagination({ currentPage, totalPages, onPageChange, loading }: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          disabled={loading}
          className={`px-3 py-2 text-sm font-medium border rounded-md ${
            i === currentPage
              ? 'text-white bg-black border-black'
              : 'text-black bg-white border-black hover:bg-gray-100'
          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {i}
        </button>
      )
    }

    return pages
  }

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex space-x-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1 || loading}
          className={`px-3 py-2 text-sm font-medium border rounded-md ${
            currentPage === 1 || loading
              ? 'text-gray-400 bg-white border-gray-300 cursor-not-allowed'
              : 'text-black bg-white border-black hover:bg-gray-100'
          } ${loading ? 'opacity-50' : ''}`}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || loading}
          className={`px-3 py-2 text-sm font-medium border rounded-md ${
            currentPage === totalPages || loading
              ? 'text-gray-400 bg-white border-gray-300 cursor-not-allowed'
              : 'text-black bg-white border-black hover:bg-gray-100'
          } ${loading ? 'opacity-50' : ''}`}
        >
          Next
        </button>
    </div>
  )
}

export default Pagination
