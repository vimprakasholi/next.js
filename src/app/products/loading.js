const LoadingCard = () => {
  return (
    <div className="border border-gray-100 shadow-md rounded-lg animate-pulse duration-100 ease-in-out">
      <div className="w-full h-40 rounded-t bg-gray-300 mb-2"></div>
      <div className="px-4 py-3">
        <div className="w-full h-10 bg-gray-500 rounded"></div>
        <div className="flex items-center gap-2 text-sm py-2">
          <span className="bg-green-200 w-20 h-5 text-green-600 px-2 rounded"></span>
          <span className="bg-blue-200  w-20 h-5 text-blue-600 px-2 rounded"></span>
        </div>
        <p className="text-lg my-2 w-30 h-5 bg-gray-300 rounded"></p>
        <button className="px-3 py-1 rounded bg-blue-600 w-40 h-10 text-white shadow"></button>
      </div>
    </div>
  );
};
const ProductsLoader = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-4 gap-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
};

export default ProductsLoader;
