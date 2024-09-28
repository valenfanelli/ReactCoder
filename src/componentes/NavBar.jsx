import {CartWidget} from './CartWidget';
import { Link } from 'react-router-dom';
import CartContext from "../context/CartContext";
import { useContext } from 'react';
export const NavBar = () => {
    const {cart} = useContext(CartContext);
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand m-3 fs-4 fst-italic fw-bold" to="/">VALENTECH</Link>
            <div className="navbar-nav mx-auto m-3 fs-6">
                <Link className="nav-item nav-item-custom nav-link" to="/">Home</Link>
                <Link className="nav-item nav-item-custom nav-link" to="/categoria/1">Computadoras</Link>
                <Link className="nav-item nav-item-custom nav-link" to="/categoria/2">Auriculares</Link>
                <Link className="nav-item nav-item-custom nav-link" to="/categoria/3">Telefonos</Link>
            </div>
            <div className="navbar-brand">
                <CartWidget total={cart.length}/>
            </div>
        </nav>
    </>
}
