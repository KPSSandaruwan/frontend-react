import React from "react";
import { useCart } from "../utils/cartContext";
import Cart from "../components/Cart";

const Dashboard = () => {
  const { inventory, addToCart } = useCart();
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {inventory &&
          inventory.map((item, index) => (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="card-text">
                  <div>Quantity: {item.quantity}</div>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-success"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Cart />
    </div>
  );
};

export default Dashboard;
