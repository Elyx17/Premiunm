import { useState } from "react"
import { toast } from "react-toastify"
import { useDarkModeContext } from "../../context/DarkModeContext";


const ItemCount = ({valInicial, stock, handleAddItem}) => {
    const {darkMode} = useDarkModeContext()


    const [contador, setContador] = useState(valInicial)
            //Var       //Modificar var     //Estado inicial

    const sumar = () =>  (contador < stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else
    const agregarCarrito = () => {
        handleAddItem(contador)
        toast(`✅ ${contador} Productos agregados!`, {
          theme: "dark",
          position: "bottom-right",
          pauseOnHover: false,
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        })
    }
    return (
        <>
        <div className={`${darkMode ? 'darkModeText' : 'lightMode'}`}>
        <button className="btn btn-danger mt-3 buttonsDetail" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn-dark mt-3 buttonsDetail" onClick={() => sumar()}>+</button>
        </div>

        <button className="btn btn-warning mt-3 buttonsDetail" onClick={() => agregarCarrito()}><i class="bi bi-bag-check-fill"></i> Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;
