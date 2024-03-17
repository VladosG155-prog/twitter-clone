export const Skeleton = () => {
  return (
    <div
      className="max-w-full mx-auto p-4 bg-white dark:bg-[#10171E] shadow-md rounded-md mt-4"
      data-testid="skeleton"
    >
      <div className="flex items-center animate-skeleton">
        <div className="rounded-full bg-gray-300 animate-skeleton h-12 w-12 dark:bg-darkBg"></div>
        <div className="ml-2 flex gap-5">
          <div className="w-24 h-4 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
          <div className="w-16 h-4 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
          <div className="w-16 h-4 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
        </div>
      </div>
      <div className="mt-4 pl-14">
        <div className="w-48 h-4 bg-gray-300 animate-skeleton rounded-md dark:bg-darkBg"></div>
        <div className="w-full h-4 mt-2 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
        <div className="w-full h-4 mt-2 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
        <div className="w-32 h-4 mt-2 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
        <div className="w-56 h-4 mt-2 bg-gray-300 animate-skeleton dark:bg-darkBg rounded-md"></div>
      </div>
      <div className="flex justify-between items-center mt-4 pl-14">
        <div className="flex">
          <div className="w-8 h-8 animate-skeleton bg-gray-300 dark:bg-darkBg rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
