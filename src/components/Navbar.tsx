import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/src/assets/logo.png" alt="Acme Corporation" className="h-12 w-auto rounded-lg object-contain" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-black hover:text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Home
            </button>
            <button className="text-black font-semibold bg-gray-100 px-3 py-2 rounded-md">
              User Management
            </button>
            <button className="text-black hover:text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              About Us
            </button>
            <button className="text-black hover:text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Enterprise
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-600 p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <button className="text-black hover:text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-left">
                Home
              </button>
              <button className="text-black font-semibold bg-gray-100 px-3 py-2 rounded-md text-left">
                User Management
              </button>
              <button className="text-black hover:text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-left">
                About Us
              </button>
              <button className="text-black hover:text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-left">
                Enterprise
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
