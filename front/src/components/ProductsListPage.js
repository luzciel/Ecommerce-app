import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../api/apiSlice";
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
        <p>CARGANDO...</p>
      ) : products.length > 0 ? (
        <div className="container-product-page-content">
          <ProductListItem products={products} />
        </div>
      ) : (
        <div className="container-product-page-no-content">
          No hay productos
        </div>
      )}
      {isError ? (
        <p className="container-product-page-error">
          Lo sentimos ocurrio un Error
        </p>
      ) : null}
    </div>
  );
};

export default ProductsListPage;
