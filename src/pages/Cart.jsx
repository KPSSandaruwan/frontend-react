

import { useCart } from '../utils/cartContext';

const Cart = () => {
  const { decreaseAmount, addItem, cart } = useCart();

  console.log('cart', cart)

  return <div>
    <div>Cart List</div>
    <ul>
      {
        cart.length > 0 && cart.map((item, index) => {
          
          return (
            <div key={index}>
              <li>{item.name} - {item.count} </li>
              <button onClick={() => addItem(item)}>Increase Amount</button>
              <button onClick={() => decreaseAmount(item)}>Decrees Amount</button>
              <button>Delete</button>
            </div>
          );
        })
      }
    </ul>
  </div>
}

export default Cart;