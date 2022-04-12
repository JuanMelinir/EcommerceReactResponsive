import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CartContextProvider from './utils/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      //TODO: Lista de todos los productos de nuestro ecommerce
      <Route path="/" element={<ItemListContainer/>}/>
      //TODO:filtra los productos por categoria 
      <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
