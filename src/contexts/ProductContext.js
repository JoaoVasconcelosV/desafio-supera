import { createContext, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const ProductContext = createContext({
  products: null,
  setProductsInCart: () => {}
});

const defaultProduct = { 
  total: 0, 
  productsInCart: []
};

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState(defaultProduct);  

  const setProductsInCart = useCallback((product) => {
    let message;    
    setProduct((currentProduct) => {      
      const alreadyExists = currentProduct.productsInCart.find(products => products.id === product.id) ? false : true;
      let total = 0;
      currentProduct.productsInCart.map(product => total += product.price);      
      if(alreadyExists) {
        message = toast.success("Adicionado ao carrinho!", {
          position: "bottom-right"
        });         
        return {      
          total: total + product.price,
          productsInCart: [            
            { ...product, quantity: 1 }, 
            ...currentProduct.productsInCart
          ]
        }
      } else {
        message = toast.warn("Já está no carrinho!", {
          position: "bottom-right"
        });          
        return currentProduct;
      }      
    });
    return message;        
  }, []);

  const removeProduct = (index) => {
    const products = product;
    products.productsInCart.splice(index, 1)
    
    let total = 0;
    products.productsInCart.map(product => total += product.price);    
    setProduct({...products, total})
  }

  const changeQuantity = (val, index) => {
    let products = product;
    products.productsInCart[index].quantity += val;        
    setProduct(products);
  }  
  
  const checkout = () => {
    if(product.total === 0){
      return toast.warn("Carrinho vazio!", {
        position: "bottom-right"
      });    
    } else {
      setProduct(defaultProduct);
      return toast.success("Compra finalizada!", {
        position: "bottom-right"
      });
    }
  }

  return (
    <ProductContext.Provider value={{ product, setProductsInCart, removeProduct, changeQuantity, checkout }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductContextProvider };