import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import './styles.css';

export default function Card(props) {
  const { setProductsInCart } = useContext(ProductContext);  

  return (
    <div className="card">
      <img src={props.product.image} alt={props.product.name} />
      <div>
        <span>{ props.product.name }</span>
        <span>Score: { props.product.score }</span>
        <span>R$ { props.product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</span>
        <button onClick={() => {
          props.noti(setProductsInCart(props.product));                    
        }}>Adicionar</button>
      </div>      
    </div>
  )
}