
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

function LoadingSpinner({ 
  size = 'md', 
  message = 'Loading...' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full animate-spin`}></div>
        <div className={`${sizeClasses[size]} border-4 border-black border-t-transparent rounded-full animate-spin absolute top-0 left-0`}></div>
      </div>
      <p className="mt-4 text-black font-medium">{message}</p>
    </div>
  );
}

export default LoadingSpinner;
