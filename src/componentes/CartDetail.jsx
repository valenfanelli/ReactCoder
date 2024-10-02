import { useContext, useState } from "react"
import { Form } from "./Form";
import { collection, getFirestore, addDoc, getDoc, updateDoc, doc } from "firebase/firestore"
import CartContext from "../context/CartContext";
import { Orden } from "./Orden";

export const CartDetail = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    //Este contexto ayuda para imprimir condicionalmente el id de la orden o el detalle del carrito
    const [orderId, setOrderId] = useState('') 
    const [comprador, setComprador] = useState({
        nombre: "",
        email: ""
    })
    const [error, setError] = useState({
        nombre: "",
        email: ""
    })
    const handleChange = (e) => {
        setComprador({
            ...comprador,
            [e.target.name] : e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        const localError = {}
        if(!comprador.nombre){
            localError.nombre = "El nombre es obligatorio"
        }
        if(!comprador.email){
            localError.email = "El email es obligatorio"
        }
        //si no hay errores en el formulario
        if(Object.keys(localError).length === 0){
            addToCart();
            
        }
        else {
            setError(localError)
        }
        
    }
    const getTotal = ()=>{
        let totalCompra = 0;

        cart.forEach(producto => {
            totalCompra += producto.price * producto.cantidad.contador;
        });
        return totalCompra //armar la cuenta
    }
    const addToCart = (orden) => {
        if(cart.length > 0){ //si no agrego productos no puede enviar el formulario
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            const pedido = {
                comprador,
                items: cart,
                total: getTotal(),
                date: new Date()
            }
            addDoc(orderCollection, pedido)
            .then(res => {
                setOrderId(res.id)
                clear()
                setComprador({
                    nombre:'',
                    email: ''
                })
                // Recorrer el carrito para actualizar stock
                cart.forEach(async (producto) => {
                    const productRef = doc(db, "items", producto.id); // Obtener referencia del producto
                    const productSnap = await getDoc(productRef); // Obtener el documento del producto

                    if (productSnap.exists()) {
                        const currentStock = productSnap.data().stock; // Obtener el stock actual
                        const newStock = currentStock - producto.cantidad.contador; // Calcular el nuevo stock

                        // Actualizar el stock del producto
                        await updateDoc(productRef, { stock: newStock });
                    }
                });
            })
        }
    }
    return <>
        {!orderId && <div className="container p-2">
            <h2 className="text-center fs-3 mt-3">Carrito</h2>
            <div className="d-flex flex-row">
                <div className='col-8 container'>
                    {cart.map((producto) => (
                        <div className="d-flex justify-content-between align-items-center m-4 border p-3">
                        {/* Ícono de basura */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled cursor-pointer" 
                        width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round"  
                        onClick={() => removeItem(producto.id)}  style={{ cursor: 'pointer'  }}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" />
                            <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" />
                        </svg>

                        {/* Información del producto */}
                        <div className="d-flex flex-column flex-grow-1 px-3">
                            <h3 className="fs-6 mb-1">{producto.name}</h3>
                            <p className="mb-0 text-muted">{producto.brand}</p>
                            <p>Cantidad: {producto.cantidad.contador}</p>
                        </div>

                        {/* Subtotal centrado */}
                        <p className="text-center align-self-center mb-0">Subtotal: ${producto.cantidad.contador * producto.price}</p>

                        {/* Imagen del producto */}
                        <div>
                            <img src={producto.img} alt="imagen de producto" className="img-fluid rounded" style={{ height: '80px', width: '80px', objectFit: 'cover' }} />
                        </div>
                        </div>
                    ))}
                    {getTotal() === 0 && <p>No hay productos en el carrito</p>}
                    {/* Total */}
                    <p className="text-center p-3 mb-2 bg-secondary text-white">Total: {getTotal()}</p>
                </div>
                <Form className='col-4' handleChange={handleChange} submit={submit} formData={comprador} error={error}>
                </Form>
            </div>
        </div>}
        {orderId &&
            <Orden id={orderId}></Orden>
        }
    </>
}