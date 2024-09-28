import { Link } from "react-router-dom";

export const Producto = ({ producto }) => {
    return (
        <>
            <div 
                className="card border-secondary itemlist m-4" 
                style={{ width: '18rem', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
                <img 
                    src={producto.img} 
                    alt="imagen de producto" 
                    className="card-img-top img-fluid" 
                    style={{ height: '200px', objectFit: 'contain' }} 
                />
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title fs-6 text-center">{producto.name}</h3>
                    <ul className="list-group list-group-flush fs-7">
                        <li className="list-group-item">Precio {producto.price} USD</li>
                        <li className="list-group-item">{producto.brand}</li>
                    </ul>
                    <div className="mt-auto text-center">
                        <Link 
                            to={`/item/${producto.id}`} 
                            className="text-decoration-none btn btn-info btn-lg fs-6"
                        >
                            Ver Detalle
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
