import './styles.css'
import CartIcon from '../../assets/cart-icon.svg'
import { Link } from 'react-router-dom';

export default function Header () {
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
          <img src={CartIcon} alt="Cart" />
        </Link>            
      </div>
    </header>        
  );
}