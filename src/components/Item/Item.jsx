import { Link } from "react-router-dom"



const Item = ({item}) => {

    return (
  <div className='col-md-3 p-'>
  <div className="card text-center glassBox">
      <div className="overflow glassBox__imgBox">
      <Link className="nav-link" to={`/item/${item.id}`}><img src={item.img} alt={`Imagen de ${item.nombre}`} className="card-img-top cardImagen" /></Link>
      </div>
      <div className="card-body text-light w-100">
      <h2 className="card-title cardTitulo">{item.nombre}</h2>
      <p className="text-light cardSubTitulo">{item.marca}</p>
      <p className='card-title fa-2x'>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
      <div className="add-cart-btn">
        <button>Agregar al carrito</button>
        <div></div>
      </div>
      {/* <button
          to={`/item/${item.id}`}
          className="btn btn-primary tarjeta rainbow-button"
          rel="noreferrer"
          alt="Agregar al carrito"
          
        >
          Agregar al carrito
        </button> */}
      </div>
    </div>
    </div>

  )
}

export default Item;
