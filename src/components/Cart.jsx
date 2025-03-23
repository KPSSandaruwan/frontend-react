import React from "react";
import { useCart } from "../utils/cartContext";

const Cart = () => {
  const { cart, addToCart, decreaseAmount, removeFromCart, orderItems } =
    useCart();

  return (
    <div style={{ background: "Yellow", marginTop: "20px" }}>
      <div>Cart</div>
      <ul className="list-group">
        {cart &&
          cart.map((item, index) => {
            return (
              <div key={index} className="list-group-item">
                {item.name} - {item.quantity}
                <div
                  style={{ marginLeft: "10px" }}
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      item.quantity === 1
                        ? removeFromCart(item)
                        : decreaseAmount(item)
                    }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
      </ul>
      <div>
        Total ={" "}
        {cart &&
          cart?.reduce((amount, i) => {
            return (amount += i.quantity * i.unitPrice);
          }, 0)}
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => orderItems()}
      >
        Order
      </button>
    </div>
  );
};

export default Cart;
