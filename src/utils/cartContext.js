import React, { createContext, useContext, useEffect, useState } from "react";
import { publicInstance } from "./baseUrl";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = async () => {
    try {
      const response = await publicInstance.get("products");
      if (response.data.success) {
        setInventory(response.data.products);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const updateInventory = async () => {
    try {
      const response = await publicInstance.put("products", {
        inventory
      });
      console.log("response", response);
      if (response.data.success) {
        await getInventory();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const addToCart = async (item) => {
    setCart((prevCart) => {
      const isExistingItem = prevCart.find((c) => c.name === item.name);
      const isAvailableQuantity = inventory.find(
        (i) => i.name === item.name && i.quantity > 0
      );

      if (isAvailableQuantity) {
        if (isExistingItem) {
          return prevCart.map((c) =>
            c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c
          );
        } else {
          return [
            ...prevCart,
            {
              name: item.name,
              quantity: 1,
              unitPrice: item.unitPrice
            }
          ];
        }
      } else {
        return prevCart;
      }
    });

    setInventory((prevInventory) => {
      return prevInventory.map((invItem) => {
        return invItem.name === item.name
          ? { ...invItem, quantity: Math.max(invItem.quantity - 1, 0) }
          : invItem;
      });
    });
  };

  const removeFromCart = (item) => {
    console.log("item", item);
    setCart((prevCart) => {
      return prevCart.filter((c) => c.name !== item.name);
    });

    setInventory((prevInventory) => {
      console.log("FFF", prevInventory);
      return prevInventory.map((invItem) => {
        return invItem.name === item.name
          ? {
              ...invItem,
              quantity: Math.max(invItem.quantity + item.quantity, 0)
            }
          : invItem;
      });
    });
  };

  const decreaseAmount = (item) => {
    setCart((prevCart) => {
      return prevCart.map((c) =>
        c.name === item.name ? { ...c, quantity: c.quantity - 1 } : c
      );
    });

    setInventory((prevInventory) => {
      console.log("FFF", prevInventory);
      return prevInventory.map((invItem) => {
        return invItem.name === item.name
          ? { ...invItem, quantity: Math.max(invItem.quantity + 1, 0) }
          : invItem;
      });
    });
  };

  const orderItems = async () => {
    // setInventory((prevInventory) => {
    //   const updatedInventory = prevInventory.map((item) => {
    //     const cartItem = cart.find((c) => c.name === item.name);
    //     if (cartItem) {
    //       return {
    //         ...item,
    //         quantity: Math.max(item.quantity - cartItem.quantity, 0)
    //       };
    //     }
    //     return item;
    //   });

    //   return updatedInventory;
    // });

    await updateInventory();

    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        inventory,
        addToCart,
        cart,
        decreaseAmount,
        removeFromCart,
        orderItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
