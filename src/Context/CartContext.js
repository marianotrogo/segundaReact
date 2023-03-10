import React,{useState, useContext} from 'react'
const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({Children}) => {
  const [cart, setCart] = useState([]);

  const limpiarCart = ()=> setCart([]);

  const isInCart = (id) => 
     cart.find(product => product.id === id) ? true : false;
  
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push({...item, quantity: newQuantity});
    setCart(newCart);
  }  


  return (
    <CartContext.Provider value=
    {{
      limpiarCart,
      isInCart,
      removeProduct,
      addProduct,
    }}>
      {Children}
    </CartContext.Provider>
    
  )
}

export default CartProvider