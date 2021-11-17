import Routes from './routes';
import { ProductContextProvider } from './contexts/ProductContext';

function App() {
  return (
    <ProductContextProvider>      
      <Routes />        
    </ProductContextProvider>
  );
}

export default App;
