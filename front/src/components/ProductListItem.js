import ButtonAddCart from "./ButtonAddCart";
import RatingProduct from "./RatingProduct";

const ProductListItem = ({ products }) => {
  const textButton = "Add item to cart";

  return (
    <div className="product-list">
      <ul className="product-list-item-content">
        {products &&
          products.map((item) => (
            <li key={item._id}>
              <div>
                <a href={`http://localhost:3000/product/${item._id}`}>
                  <img
                    src={`http://localhost:5000/${item.image}`}
                    className="content-item-img"
                    alt={`img-${item.name}`}
                  />
                  <div className="content-item-description">
                    <h5>{item.name}</h5>
                    <p className="content-item-description-price">
                      Price :$ {item.price}
                    </p>
                    <div className="content-item-reviews-ranting">
                      <RatingProduct rating={item.rating} />
                      <p>({item.numReviews})</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product-list-item-button">
                <ButtonAddCart item={item} textButton={textButton} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductListItem;
