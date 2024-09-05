import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ItemCount from "./ItemCount";
import { useState, useEffect } from 'react';
function ItemDetail() {
    const {productoId} = useParams();
    const [producto, setProducto] = useState([])
    useEffect(()=>{
        getProductById(productoId)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [productoId])
  return <>
    <h1 className='text-center fs-5 mt-3'>Detalles del producto</h1>
    <div className='d-flex justify-content-center align-items-center'>
    <div className="card align-items-center border-secondary itemlist m-4" style={{width: '18rem'}}>
            <img src={producto.url} alt="imagen de producto" className="card-img-top img-fluid" style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
                <h3 className="card-title fs-6">{producto.title}</h3>
                <ul className="list-group list-group-flush fs-7">
                    <li className='list-group-item'>Precio {producto.price} USD</li>
                    <li className='list-group-item'>{producto.description}</li>
                    <li className='list-group-item'><ItemCount/></li>
                </ul>
            </div>
            
        </div>
    </div>
    </>
}

export default ItemDetail;