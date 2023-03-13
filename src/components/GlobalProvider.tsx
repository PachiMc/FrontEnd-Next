import CartContext from "../context/cart-context";
import UserContext from "../context/user-context";

const CartProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <UserContext>
      <CartContext>{children}</CartContext>
    </UserContext>
  );
};

export default CartProvider;
