import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ItemCount from "./ItemCount";
import { useState, useEffect } from 'react';
import {getDoc, doc, getFirestore} from 'firebase/firestore';
import CartContext from '../context/CartContext';
function ItemDetail() {
    const {productoId} = useParams();
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(false)
    const [agregado, setAgregado] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook para redirección
    const {cart, addItem, updateItem} =  useContext(CartContext);
    const [sinStock, setSinStock] = useState(false)
    const onAdd = (q) => {
      //chequear si hay stock
      if(q.contador<=producto.stock){
        if(cart.some((item) => item.id === producto.id)){
          updateItem(producto.id, q)
          setAgregado(true);
        } else {
          addItem(producto, q)
          setAgregado(true);
        }
        setSinStock(false);
      }
      else {
        setSinStock(true);
      }
    }
    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const docR = doc(db, "items", productoId);
        getDoc(docR)
        .then((snapshot) => {
            if(snapshot.exists()){
                setProducto({id: snapshot.id, ...snapshot.data()})
                setLoading(false)
            } else {
                setLoading(false)
                setError(true)
            }
        })
    }, [productoId])
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
    if(error) navigate('/error');
  return <>
    <h1 className='text-center fs-5 mt-3'>Detalles del producto</h1>
    {sinStock && <p className='alert alert-danger text-center'>No tenemos esa cantidad disponible</p>}
    <div className='d-flex justify-content-center align-items-center'>
    <div className="card align-items-center border-secondary itemlist m-4" style={{width: '18rem'}}>
            <img src={producto.img} alt="imagen de producto" className="card-img-top img-fluid" style={{height: '200px', objectFit: 'contain'}} />
            <div className="card-body">
                <h3 className="card-title fs-6">{producto.name}</h3>
                <ul className="list-group list-group-flush fs-7">
                    <li className='list-group-item'>Precio {producto.price} USD</li>
                    <li className='list-group-item'>{producto.brand}</li>
                    {producto.stock === 0 ? <li className='list-group-item bg-secondary'>Producto sin stock</li>:
                    <li className='list-group-item'>{producto.stock} disponibles</li>
                    } 
                    {!agregado && <li className='list-group-item'><ItemCount onAdd={onAdd}/></li>}
                </ul>
            </div>
            
        </div>
    </div>
    </>
}

export default ItemDetail;