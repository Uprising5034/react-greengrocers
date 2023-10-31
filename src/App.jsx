import { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  console.log('storeItems', storeItems)

  return <>
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map(item => {
          return (
              <li>
                <div className="store--item-icon">
                  <img src={`assets/icons/${item.id}.svg`} alt="" />
                </div>
                <button>Add to cart</button>
              </li>
          );
        })}
      </ul>
    </header>
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {/* Write some code here... */}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
    <div>
      Icons made by
      <a
        href="https://www.flaticon.com/authors/icongeek26"
        title="Icongeek26"
      >
        Icongeek26
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </>;
}
