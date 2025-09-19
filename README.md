# 🏢 Acme Corporation - User Management App

A modern React application for user management with search, pagination, and detailed visualization features.

## ✨ Features

- **📋 User List**: Shows 5 users per page in a responsive table with black header
- **🔍 Smart Search**: Real-time search with 400ms debounce for optimal performance
- **📄 Integrated Pagination**: Navigation between pages with unified result statistics
- **👤 Detail Modal**: Complete user information when clicking on any row
- **📱 Responsive Design**: Optimized for mobile and desktop devices
## 🛠️ Technologies Used

- **React 18** - User interface library
- **TypeScript** - Static typing for JavaScript
- **TailwindCSS** - CSS framework for styling
- **DummyJSON API** - Public API for user data
- **Vite** - Fast build tool and development server

## 🚀 Installation and Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Acme-Corporation-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Responsive navigation bar with hamburger menu
│   ├── UserTable.tsx        # Main table component with black header
│   ├── SearchBar.tsx        # Search bar with debounce and validation
│   ├── SearchStats.tsx      # Statistics display component
│   ├── Pagination.tsx        # Pagination controls component
│   ├── UserModal.tsx        # User details modal
│   ├── LoadingSpinner.tsx   # Loading indicators
│   ├── ErrorMessage.tsx     # Error handling component
│   └── ErrorBoundary.tsx    # Global error boundary
├── hooks/
│   ├── useUsers.ts          # Custom hook for API integration
│   └── useUrlSync.ts        # Hook for URL synchronization
├── models/
│   └── UserModels.ts             # TypeScript type definitions
├── assets/
│   └── logo.png             # Company logo
├── App.tsx                  # Main application component
├── index.tsx                # Application entry point
└── index.css                # Global styles with TailwindCSS
```

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

---

Developed with ❤️ using React, TypeScript, and TailwindCSS