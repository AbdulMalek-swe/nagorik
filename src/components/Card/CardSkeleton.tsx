 
export const MovieCardSkeleton = () => {
  return (
    <div className="max-w-xs rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden animate-pulse">
      <div className="w-full h-64 bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
  );
};

 