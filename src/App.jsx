import './App.css';
import {NavBar} from './componentes/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './componentes/ItemListContainer';
import { Error } from './componentes/Error';
import ItemDetail from './componentes/ItemDetail';

function App(){
    return ( <>
          <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer Greeting="Estos son los productos"/>}></Route>
                <Route path='/categoria/:category_id' element={<ItemListContainer Greeting="Aqui tienes una seleccion de"/>}></Route>
                <Route path='/item/:productoId' element={<ItemDetail/>}></Route>
                <Route path='/*' element={<Error/>}></Route>
            </Routes>
          </BrowserRouter>
        </>
    )
}
export default App;