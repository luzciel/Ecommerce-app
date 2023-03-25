import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../api/apiSlice";
import ButtonAddCart from "./ButtonAddCart";
import RatingProduct from "./RatingProduct";
import Loading from "./Loading";

const ProductDisplayPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { data, isLoading } = useGetOneProductQuery(id);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const handleImageLoad = ()=> {
    setIsImageLoaded(true);
  }

  const textButton = "Add to cart";

  return (
    <div>
      {isLoading && !isImageLoaded ? (
        <Loading />
      ) : (
        < >
          <div className="container-product-display" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}>
            <seccion className="product-display-img">
              <img
                src={`http://localhost:5000/${product.image}`}
                width="150px"
                alt={`img-${product.name}`}
                onLoad={handleImageLoad}
              />
            </seccion>
            <seccion className="product-display-content">
              <div className="product-display-header">
                <h3>{product.name}</h3>
                <div className="header-reviews-ranting">
                  <RatingProduct rating={product.rating} />
                  <span className="header-ranting">{product.rating}</span>
                  <span className="header-reviews">({product.numReviews})</span>
                </div>
              </div>
              <span className="product-display-content-price">
                ${product.price}
              </span>
              <p className="product-display-content-description">
                {product.description}
              </p>
            </seccion>
          </div>
          <div className="product-display-add-cart" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}>
            <ButtonAddCart item={product} textButton={textButton} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDisplayPage;
