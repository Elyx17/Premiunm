import ItemCount from "../ItemCount/ItemCount";
import { toast } from 'react-toastify';


import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

import { useDarkModeContext } from "../../context/DarkModeContext";


const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()

    const agregarCarrito = () => toast("✅ Producto agregado!", {
        theme: "dark",
        position: "bottom-right",
        pauseOnHover: false,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
    })

    const {addItem} = useCarritoContext()

    const handleAddItem = (cantidad) => { //Agregar el producto al carrito
        addItem(item,cantidad)
    }

    return (
        
        <div className={`row g-0 ${darkMode ? 'darkMode' : 'ligthMode'}`}>
            <div className="col-md-6">
            <img src={item.img} className="imgDetail" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-3">
            <div className="card-body mt-5 detallesNames">
                <h5 className={`card-title mt-3 fs-2 ${darkMode ? 'darkModeText' : 'ligthMode'}`}>{item.nombre}</h5>
                <p className={`card-text mt-5 fs-3 ${darkMode ? 'darkModeText' : 'ligthMode'}`}>{item.marca}</p>
                <p className={`card-text mt-5 fs-3 ${darkMode ? 'darkModeText' : 'ligthMode'}`}>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className={`card-text mt-5 fs-4 ${darkMode ? 'darkModeText' : 'ligthMode'}`}>Stock: {item.stock}</p>
            </div>
            </div>
            <div className="col-md-12 detallesButtons">
            <ItemCount valInicial={1} stock={item.stock} handleAddItem={handleAddItem}/>
                <Link className="nav-link buttonsSpecific" to={'/'}><button className="btn btn-info buttonsDetail"><i class="bi bi-arrow-return-left"></i> Continuar comprando</button></Link>
                <Link className="nav-link buttonsSpecific" to={'/Cart'}><button className="btn btn-success buttonsDetail"><i class="bi bi-cart-fill"></i> Ver Mi Carrito</button></Link>
            </div>
        </div>
        
    );
}

export default ItemDetail;
