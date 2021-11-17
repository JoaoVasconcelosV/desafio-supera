import { useContext } from 'react';
import './styles.css'
import CartIcon from '../../assets/cart-icon.svg'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';

export default function Header () {
  const { product } = useContext(ProductContext);   

  return (    
    <header id="header"> 
      <div className="left">
        <Link to="/">
          <h1 className="title">GamesPlus</h1>
        </Link>
        <Link to="/">
          <span className="menu">Store</span>
        </Link>
      </div>
      <div className="right">       
        <Link to="/purchase" className="cart">
          {
            product.total > 0 ?
              <div>
                <span>{product?.productsInCart.length}</span>
              </div>
            : 
              null
          }
          <img src={CartIcon} alt="Cart" />
        </Link>            
      </div>
    </header>        
  );
}