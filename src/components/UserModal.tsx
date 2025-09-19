import React from 'react'
import { User } from '../models/UserModels'

interface UserModalProps {
  user: User | null
  isOpen: boolean
  onClose: () => void
}

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) {
    return null
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 pt-20">
      <div className="bg-white border border-black rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-black">
                User Details
              </h3>
            <button
              onClick={onClose}
              className="text-black hover:text-gray-600 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
                <span className="font-medium text-black">Full name:</span>
              <p className="text-black">{user.firstName} {user.lastName}</p>
            </div>
            
            <div>
                <span className="font-medium text-black">Gender:</span>
              <p className="text-black capitalize">{user.gender}</p>
            </div>
            
            <div>
                <span className="font-medium text-black">Phone:</span>
              <p className="text-black">{user.phone}</p>
            </div>
            
            <div>
                <span className="font-medium text-black">Birth date:</span>
              <p className="text-black">{formatDate(user.birthDate)}</p>
            </div>
            
            <div>
                <span className="font-medium text-black">Username:</span>
              <p className="text-black">{user.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserModal
