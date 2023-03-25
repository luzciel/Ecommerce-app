import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../api/apiSlice";
import Loading from "./Loading";
import ProductListItem from "./ProductListItem";

const ProductsListPage = () => {
  const [products, setProducts] = useState("");
  const { data, isError, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div className="container-product-page">
      {isLoading ? (
          <Loading/>
      ) : products.length > 0 ? (
        <div className="container-product-page-content">
          <ProductListItem products={products} />
        </div>
      ) : (
        <div className="container-product-page-no-content">
          There is no product
        </div>
      )}
      {isError ? (
        <p className="container-product-page-error">
          Sorry an error occurred please try again
        </p>
      ) : null}
    </div>
  );
};

export default ProductsListPage;
