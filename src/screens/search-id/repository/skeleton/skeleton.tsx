const Skeleton = () => {
  return (
    <div className="w-full space-y-4 p-4 gap-4">
      {Array.from({length: 10}).map((_, index) => (
        <div key={index} className="w-full bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse !rounded overflow-hidden">
          <div className="w-full bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulseflex space-x-4 p-4 ">
            <div className=" bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse rounded bg-gray-200 h-4 w-3/4"></div>
            <div className=" bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse rounded bg-gray-200 h-4 w-1/4"></div>
            <div className="w-full bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse flex-1 space-y-2 py-1">
              <div className=" bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse h-4 bg-gray-200 rounded w-3/6"></div>
              <div className=" bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse h-4 bg-gray-200 rounded w-3/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton