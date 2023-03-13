import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCarritoContext } from '../context/CarritoContext';


const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <i class="bi bi-cart" style={{fontSize: '20px', stroke: ''}}></i>
                {getItemQuantity() > 0 && <span className="cantCarrito" style={{color: '#414141'}}>{getItemQuantity()}</span>}
            </Link> 
        </>
    );
}

export default CartWidget;
