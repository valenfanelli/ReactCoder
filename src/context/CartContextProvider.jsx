import { useState} from "react"
import CartContext from "./CartContext"

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item, cant) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            // Si el item ya está en el carrito, actualizamos su cantidad
            updateItem(item.id, cant);
        } else {
            // Si el item no está en el carrito, lo agregamos como nuevo
            setCart([
                ...cart, {
                cantidad: cant,
                ...item
            }])
        }
        
    }
    const removeItem = (id) => {
        setCart(
            cart.filter((e1) => e1.id !== id)
        )
    }
    const updateItem = (id, cant) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, cantidad: { contador: item.cantidad.contador + cant.contador } } : item
        ));
        console.log(cart);
    }
    const clear = () => {
        setCart([])
    }
    const values = {
        cart,
        addItem,
        removeItem,
        updateItem,
        clear
    }
    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;