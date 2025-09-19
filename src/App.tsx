import { useState } from 'react'
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'
import SearchBar from './components/SearchBar'
import SearchStats from './components/SearchStats'
import Pagination from './components/Pagination'
import UserModal from './components/UserModal'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorMessage from './components/ErrorMessage'
import { useUsers } from './hooks/useUsers'
import { useUrlSync } from './hooks/useUrlSync'
import { User } from './models/UserModels'

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const {
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
    refetch
  } = useUsers()

  // URL synchronization
  useUrlSync({
    search: searchTerm,
    page: currentPage,
    onSearchChange: handleSearch,
    onPageChange: handlePageChange
  })

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUser(null)
  }

  const totalPages = Math.ceil(total / limit)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black mb-4">
              User Management
            </h1>
            <SearchBar 
              onSearch={handleSearch}
              onClear={clearSearch}
              searchTerm={searchTerm}
            />
          </div>
          
          {error ? (
            <ErrorMessage 
              error={error}
              onRetry={refetch}
              showRetry={true}
            />
          ) : (
            <>
              <UserTable 
                users={users}
                loading={loading}
                onUserClick={handleUserClick}
              />
              <div className="mt-6 flex items-center justify-between">
                <SearchStats 
                  total={total}
                  currentPage={currentPage}
                  limit={limit}
                  searchTerm={searchTerm}
                />
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  loading={loading}
                />
              </div>
            </>
          )}
        </main>
        
        <UserModal 
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </ErrorBoundary>
  )
}

export default App
