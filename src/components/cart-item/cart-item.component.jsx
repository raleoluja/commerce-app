import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantaty } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantaty}</span>
    </div>
  );
};

export default CartItem;
