import React from 'react';

interface ErrorMessageProps {
  error: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  onRetry, 
  showRetry = true 
}) => {
  return (
    <div className="border border-red-500 rounded-lg p-6 text-center">
      <div className="w-12 h-12 mx-auto mb-4 border border-red-500 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">Error loading data</h3>
      <p className="text-black mb-4">{error}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition-colors flex items-center gap-2 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
