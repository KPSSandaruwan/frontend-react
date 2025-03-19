import Cart from "./Cart";
import { useCart } from "../utils/cartContext";


const Dashboard = () => {
  const { inventory, addItem } = useCart();
  const handleAddCart = (item) => {
    addItem(item)    
  }

  console.log('inventory', inventory)

  return (
    <div>
      <div>Cart Dashboard</div>
      <ul>
        {inventory.length > 0 && inventory.map((item, index) => {
          return (
            <li key={index}>
              {item.name}{" "}
              <span>
                <button onClick={() => handleAddCart(item)}>Add</button>
              </span>
            </li>
          );
        })}
      </ul>

      <Cart />
    </div>
  );
}

export default Dashboard;