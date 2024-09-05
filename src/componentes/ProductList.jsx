import React from 'react';
import { Producto } from './Producto';
function ProductList({productos}) {
  return (
    <div className="container">
      <div className='row justify-content-center'>
        {productos.map(producto => (
          <div key={producto.id} className="col-md-4 d-flex justify-content-center">
            <Producto producto={producto} />
        </div>
        ))}
      </div>
    </div>
    
  );
}

export default ProductList;