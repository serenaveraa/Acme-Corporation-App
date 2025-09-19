import React from 'react'
import { User } from '../models/UserModels'
import LoadingSpinner from './LoadingSpinner'

interface UserTableProps {
  users: User[]
  loading: boolean
  onUserClick: (user: User) => void
}

const UserTable: React.FC<UserTableProps> = ({ users, loading, onUserClick }) => {
  if (loading) {
    return (
      <div className="bg-white border border-black rounded-lg overflow-hidden">
        <LoadingSpinner message="Loading users..." />
      </div>
    )
  }

  return (
    <div className="bg-white border border-black rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-black">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-black">
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => onUserClick(user)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  <span className={user.role === 'admin' ? 'font-bold' : ''}>
                    {user.firstName} {user.lastName}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  <span className={user.role === 'admin' ? 'font-bold' : ''}>
                    {user.age}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  <span className={user.role === 'admin' ? 'font-bold' : ''}>
                    {user.email}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  <span className={user.role === 'admin' ? 'font-bold' : ''}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable
