import { Link } from "react-router-dom"

import { useDarkModeContext } from "../../context/DarkModeContext";



const Item = ({item}) => {

  const {darkMode} = useDarkModeContext()

    return (
  <div className='col-md-3 mobile'>
  <div className={`card text-center glassBox ${darkMode ? 'darkMode' : 'ligthMode'}`}>
      <div className="overflow glassBox__imgBox">
      <Link className="nav-link" to={`/item/${item.id}`}><img src={item.img} alt={`Imagen de ${item.nombre}`} className="card-img-top cardImagen" /></Link>
      </div>
      <div className={`card-body w-100 ${darkMode ? 'darkModeText' : 'ligthMode'}`}>
      <h2 className="card-title cardTitulo">{item.nombre}</h2>
      <p className="cardSubTitulo">{item.marca}</p>
      <p className='card-title fa-2x'>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
      <div className={`add-cart-btn ${darkMode ? 'darkModeBlock' : 'ligthMode'}`}>
      <Link className="nav-link" to={`/item/${item.id}`}><button>Agregar al carrito</button></Link>
        <div></div>
      </div>
      </div>
    </div>
    </div>

  )
}

export default Item;
