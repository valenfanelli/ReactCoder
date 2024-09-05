import { useState } from 'react';
function ItemCount() {
    const [contador, setContador] = useState(0)
    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        if(contador>0){
            setContador(contador - 1)
        }
    }
    return (
        <div className='container'>
            <p className='text-center'>Cantidad</p>
            <div className="row">
                <button className='col-sm btn btn-outline-info btn-sm d-flex justify-content-center align-items-center' onClick={restar}>
                <p className='m-0 fs-4 fw-bold'>-</p>
                </button>
                <div className='col-sm d-flex justify-content-center align-items-center text-center'>
                    <span>{contador}</span>
                </div>
                <button className='col-sm btn btn-outline-info btn-sm d-flex justify-content-center align-items-center' onClick={sumar}>
                    <p className='m-0 fs-4 fw-bold'>+</p>
                </button>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-info btn-sm d-flex justify-content-center align-items-center mt-3'>
                    <p className='fs-7 m-0'>Agregar al carrito</p>
                </button>
            </div>
        </div>
    )
}
export default ItemCount;