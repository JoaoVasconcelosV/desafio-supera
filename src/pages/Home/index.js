import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from "../../components/Card"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"

export default function Home () {
  const [products, setProducts] = useState([])
  const [select, setSelect] = useState("popularity")

  useEffect(() => {
    fetch('./products.json', {
      headers: {
        Accept: 'application/json'
      }
    }).then(res => res.json())
      .then(res => setProducts(
        res.sort(function (a, b) {
          if (a.name > b.name) 
            return 1;
          if (a.name < b.name) 
            return -1;                  
          return 0;
        })
      ))
  }, [])
  
  useEffect(() => {
    if(select === "az") {      
      setProducts(products.sort(
        function (a, b) {
          if (a.name > b.name)
            return 1;          
          if (a.name < b.name)
            return -1;                 
          return 0;
        }
      ));
    }
    
    if(select === 'popularity') {
      setProducts(products.sort(
        function (a, b) {
          if (a.score < b.score) 
            return 1;          
          if (a.score > b.score)
            return -1;          
          return 0;
        }
      ));
    }
  }, [select, products])    

  const notify = (message) => message;

  return (
    <div className="home">
      <Header />              
      <h1>Store</h1>
      <select className="select" value={select} onChange={(event) => setSelect(event.target.value)}>
        <option value="popularity">A - Z</option>
        <option value="az">Popularidade</option>        
      </select>  
      <div className="cards">        
        {products.map(product => 
          <Card 
            key={product.id}              
            product={product}
            noti={notify}
          />
        )}        
      </div>      
      <ToastContainer />
    </div>    
  )
}