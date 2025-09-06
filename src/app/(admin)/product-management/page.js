import ProductsTable from "./_components/Table";

const ProductManagement = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-6 sm:py-8">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <h2 className="text-gray-800 dark:text-white mb-5 text-2xl font-semibold">
          Product Management
        </h2>
        <ProductsTable />
      </div>
    </section>
  );
};

export default ProductManagement;
