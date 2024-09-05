import { Link } from "react-router-dom"
export const Error = ( ) => {
    return <>
        <div className="container text-center">
            <h1 className="fs-4">La pagina no existe</h1>
            <Link to={`/`} className="text-decoration-none btn btn-danger btn-lg fs-6">Volver a inicio</Link>
        </div>
    </>
}