import { useCarritoContext } from "../../context/CarritoContext";

import { useDarkModeContext } from "../../context/DarkModeContext";


const ItemCart = ({item}) => {
    const {darkMode} = useDarkModeContext()

    const {removeItem} = useCarritoContext()
    return (
        <div className={`card mb-3 cardCart ${darkMode ? 'darkMode' : 'licgtMode'}`}>
        <div className="row g-0">
            <div className="col-md-3 h-25">
                <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start mx-auto d-block imgDetalles"/>
            </div>
            <div className="col-md-9">
                <div className={`card-body bodyCart ${darkMode ? 'darkModeText' : 'lightMode'}`}>
                    <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                    <p className="card-text">Cantidad: {item.cant}</p>
                    <p className="card-text">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                    <button className="btn btn-danger buttonDelete" onClick={() => removeItem(item.id)}><i class="bi bi-x-lg iconoDeBorrar"></i></button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ItemCart;
