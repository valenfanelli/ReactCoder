import ProductList from "./ProductList"
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategoryId } from '../asyncMock';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

export const ItemListContainer = ({Greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false);
    //nombres para imprimir la categoria dependiendo del parametro
    const nombresCat = ['computadoras', 'auriculares', 'telefonos'];
    const {category_id} = useParams();
    useEffect(()=>{
      setLoading(true)
       const db = getFirestore();
       const items = collection(db, "items");
       let q;
       if(category_id){
          q = query(items, where("category", "==",  Number(category_id)));
       }       
       else q=items;
        getDocs(q)
       .then((snapshot) => {
          setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          setLoading(false)
        })
      
    }, [category_id])
    if(loading){
      return<>
        <div className="container">
            <div className="container text-center">
            <p className="fs-3">Cargando</p>
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
        </div>
      </>
    }
    return <>
      <div className="container">
        <h1 className="text-center fs-5 mt-3">{Greeting} {nombresCat[category_id-1]}</h1>
        { productos.length > 0 ?
          <ProductList productos={productos} />
          : <div className="container text-center">
              <p className="fs-3">No existen {nombresCat[category_id-1]} en stock</p>
          </div>
        }
        
      </div>
      
    </>
}