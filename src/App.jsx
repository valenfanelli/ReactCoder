import './App.css';
import {NavBar} from './componentes/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './componentes/ItemListContainer';
import { Error } from './componentes/Error';
import ItemDetail from './componentes/ItemDetail';
import { CartDetail } from './componentes/CartDetail';
import CartContextProvider from './context/CartContextProvider';

function App(){
    return ( <>
          <BrowserRouter>
            <CartContextProvider>
              <NavBar/>
              <Routes>
                  <Route path='/' element={<ItemListContainer Greeting="Estos son los productos"/>}></Route>
                  <Route path='/categoria/:category_id' element={<ItemListContainer Greeting="Aqui tienes una seleccion de"/>}></Route>
                  <Route path='/item/:productoId' element={<ItemDetail/>}></Route>
                  <Route path='/cart' element={<CartDetail/>}></Route>
                  <Route path='/*' element={<Error/>}></Route>
              </Routes>
            </CartContextProvider>
          </BrowserRouter>
        </>
    )
}
export default App;