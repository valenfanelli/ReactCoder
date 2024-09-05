import { Link } from "react-router-dom"
export const Producto = ( {producto} ) => {
    return <>
        <div className="card border-secondary itemlist m-4">
            <img src={producto.url} alt="imagen de producto" className="card-img-top img-fluid" style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
                <h3 className="card-title fs-6">{producto.title}</h3>
                <ul className="list-group list-group-flush fs-7">
                    <li className="list-group-item">Precio {producto.price} USD</li>
                    <li className="list-group-item">{producto.description}</li>
                    <li className="list-group-item text-center">
                        <Link to={`/item/${producto.id}`} className="text-decoration-none btn btn-info btn-lg fs-6">Ver Detalle</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}