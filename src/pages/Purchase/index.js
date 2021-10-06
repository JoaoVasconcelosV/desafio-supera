import { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import { ProductContext } from '../../contexts/ProductContext';
import TrashIcon from '../../assets/trash.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

export default function Purchase () {
  const [subtotal, setSubtotal] = useState();
  const [frete, setFrete] = useState();
  const { checkout, removeProduct, product } = useContext(ProductContext) 
  
  useEffect(() => {
    let valorTotal = 0;
    let qty = 0;
    product.productsInCart.forEach(product => {
      valorTotal += product.price
      qty++;
    })    
    product.total >= 250 ? setFrete(0) : setFrete(10 * qty);
    setSubtotal(valorTotal.toFixed(2))
  }, [product]);

  const notify = () => toast.info("Removido do carrinho!", {
    position: "bottom-right"
  });
  
  const finish = (message) => message;

  return (
    <div className="purchase">
      <Header />
      <h1>Carrinho</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <ProductContext.Consumer>
              {({ product }) => (                                
                product.productsInCart.map((product, index) => (
                  <tr key={product.id}>            
                    <td className="linha1">
                      <img src={product.image} alt="Capa" className="capa" />
                      <span>{ product.name }</span>
                    </td>
                    <td>                      
                      { product.quantity }                      
                    </td>
                    <td>R$ { product.price }</td>
                    <td>R$ { product.price * product.quantity }</td>
                    <td onClick={() => {
                      removeProduct(index);
                      notify();
                    }}><img src={TrashIcon} alt="remove" /></td>
                  </tr>
                ))                
              )}
            </ProductContext.Consumer>                            
          </tbody>                  
        </table>
        <div className="finish">
          <span>Subtotal R$ { subtotal }</span>
          <span>Frete R$ { frete }</span>
          <span>total R$ { parseFloat(subtotal) + frete }</span>
          <button onClick={() => finish(checkout())}>Finalizar</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}