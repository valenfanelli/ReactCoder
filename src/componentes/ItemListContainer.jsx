import ProductList from "./ProductList"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategoryId } from '../asyncMock';

export const ItemListContainer = ({Greeting}) => {
    const [productos, setProductos] = useState([])
    //nombres para imprimir la categoria dependiendo del parametro
    const nombresCat = ['computadoras', 'auriculares', 'telefonos'];
    const {category_id} = useParams();
    useEffect(()=>{
        const funcion = category_id ? getProductsByCategoryId : getProducts;
        funcion(category_id)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [category_id])
    return <>
      <div className="container">
        <h1 className="text-center fs-6 mt-3">{Greeting} {nombresCat[category_id-1]}</h1>
        <ProductList productos={productos} />
      </div>
      
    </>
}