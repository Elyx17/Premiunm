
import { Link } from "react-router-dom";
import { useCarritoContext } from '../../context/CarritoContext';
import { useDarkModeContext } from "../../context/DarkModeContext";



const CartWidget = () => {
    const {darkMode} = useDarkModeContext()
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <i className={`bi bi-cart cartWidget ${darkMode ? 'darkModeText' : 'lightMode'}`}></i>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link> 
        </>
    );
}

export default CartWidget;
