import { getBrands, getCategories, getProducts } from "@/api/products";
import FilterButton from "./_components/FilterButton";
import Search from "./_components/Search";
import ListGridView from "./_components/ListGridView";
import Table from "./_components/Table";

export const metadata = {
  title: "Products",
};

const Products = async ({ searchParams }) => {
  const response = await getProducts(await searchParams);
  const brandResponse = await getBrands();
  const categoryResponse = await getCategories();

  const products = response.data;
  const brands = brandResponse.data;
  const categories = categoryResponse.data;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between py-5 md:py-0">
        <h1 className="text-3xl py-5 font-medium dark:text-white">
          Popular Products
        </h1>
        <div className="flex items-center gap-4">
          <Search />
          <FilterButton brands={brands} categories={categories} />
          <ListGridView />
        </div>
      </div>
      {products?.length == 0 ? (
        <div className="mx-auto py-10 my-5 w-full text-center text-2xl rounded-xl text-secondary bg-secondary/10">
          Products Not Available
        </div>
      ) : (
        <Table products={products}/>
      )}
    </>
  );
};

export default Products;
