
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CartContextProvider from './components/CartContext';

const App=() =>{
  return (
    <CartContextProvider>
     <Navbar/>
    <BrowserRouter>
   
    <Routes>
     
      <Route path="/" element={<ItemListContainer />}/>
 
      <Route path="/category/:idCategory" element={<ItemListContainer />}/>
    </Routes>
  
    </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
