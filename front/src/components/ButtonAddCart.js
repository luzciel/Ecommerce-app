import { useDispatch } from "react-redux";
import { addCart } from "../store/slices/cart";

const ButtonAddCart = ({ item, textButton }) => {
  const dispatch = useDispatch();

  const isDisabled = item.countInStock < 1;

  const handleAddCart = (item) => {
    const cartItem = {
      id: item._id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    dispatch(addCart(cartItem));
  };
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={
        isDisabled
          ? "product-list-item-button-Disabled"
          : "product-list-item-button-active"
      }
      onClick={() => handleAddCart(item)}
    >
      {textButton}
    </button>
  );
};

export default ButtonAddCart;
