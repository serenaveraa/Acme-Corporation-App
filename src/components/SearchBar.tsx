import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (term: string) => void
  onClear: () => void
  searchTerm: string
}

function SearchBar({ onSearch, onClear, searchTerm }: SearchBarProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalSearchTerm(value)
    onSearch(value)
  }

  const handleClear = () => {
    setLocalSearchTerm('')
    onClear()
  }

  const isValidInput = (value: string) => {
    // Allow letters, numbers, spaces, hyphens, and dots
    const regex = /^[a-zA-Z0-9\s\-\.]*$/
    return regex.test(value) && value.length <= 50
  }

  return (
    <div className="mb-4">
      <form className="flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search users by name..."
            value={localSearchTerm}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg ${
              localSearchTerm && !isValidInput(localSearchTerm)
                ? 'border-red-500 focus:ring-red-500'
                : 'border-black focus:ring-black'
            } focus:ring-2 focus:border-black`}
          />
          {localSearchTerm && !isValidInput(localSearchTerm) && (
            <p className="text-red-500 text-sm mt-1">
              Only letters, numbers, spaces, hyphens and dots are allowed (maximum 50 characters)
            </p>
          )}
        </div>
        {localSearchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2 bg-white text-black border border-black rounded-lg hover:bg-black hover:text-white focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  )
}

export default SearchBar
