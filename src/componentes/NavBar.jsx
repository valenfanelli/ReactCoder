import {CartWidget} from './CartWidget'
export const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand m-3 fs-3" href="/">VALENTECH</a>
            <div className="navbar-nav mx-auto m-3 fs-5">
                <a className="nav-item nav-item-custom nav-link " href="#">Home</a>
                <a className="nav-item nav-item-custom nav-link" href="#">Sobre nosotros</a>
                <a className="nav-item nav-item-custom nav-link" href="#">Productos</a>
                <a className="nav-item nav-item-custom nav-link" href="#">Sumate al equipo</a>
            </div>
            <div className="navbar-brand">
                <CartWidget/>
            </div>
        </nav>
    </>
}
