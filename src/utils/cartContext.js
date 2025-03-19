import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext(null);

const mainInventory = [
  { name: "bacon", unitPrice: 10.99, quantity: 10 },

  { name: "eggs", unitPrice: 3.99, quantity: 10 },

  { name: "cheese", unitPrice: 6.99, quantity: 10 },

  { name: "chives", unitPrice: 1.0, quantity: 10 },

  { name: "wine", unitPrice: 11.99, quantity: 10 },

  { name: "brandy", unitPrice: 17.55, quantity: 10 },

  { name: "bananas", unitPrice: 0.69, quantity: 10 },

  { name: "ham", unitPrice: 2.69, quantity: 10 },

  { name: "tomatoes", unitPrice: 3.26, quantity: 10 },

  { name: "tissue", unitPrice: 8.45, quantity: 10 },
];

export const CartProvider = ({children}) => {
  const [inventory, setInventory] = useState(mainInventory);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setInventory(mainInventory);
  }, []);

  const addItem = (item) => {
    console.log('item', item)
    setCart(prevCart => {
      const safePrevCart = prevCart || [];
      console.log('safePrevCart', safePrevCart);

      const existingItem = safePrevCart.find(cartItem => cartItem.name === item.name);

      if (existingItem) {
        return safePrevCart.map(cartItem => cartItem.name === item.name ? {...cartItem, count: cartItem.count + 1} : cartItem)
      } else {
        return [...safePrevCart, {
          name: item.name,
          count: 1
        }];
      }
      
    });
  };

  const decreaseAmount = (item) => {
    setCart(prevCart => {
      const safePrevCart = prevCart || [];
      console.log('safePrevCart', safePrevCart);

      const existingItem = safePrevCart.find(cartItem => cartItem.name === item.name);

      if (existingItem) {
        return safePrevCart.map(cartItem => cartItem.name === item.name && cartItem.count > 0 ? {...cartItem, count: cartItem.count - 1} : cartItem)
      } 
  
    });
  }

  const removeItem = (item) => {
    setCart(cart.filter(cartItem => cartItem.name !== item.name));
  }

  return <CartContext.Provider value={{ removeItem, decreaseAmount, addItem, inventory, cart }}>
    {children}
  </CartContext.Provider>
}

export const useCart = () => {
  return useContext(CartContext);
}