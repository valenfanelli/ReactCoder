import './App.css';
import {NavBar} from './componentes/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer';
//import { useState } from 'react';

function App(){
    return ( <>
          <NavBar/>
          <ItemListContainer Greeting="Hola como estas"/>
        </>
    )
}
export default App;