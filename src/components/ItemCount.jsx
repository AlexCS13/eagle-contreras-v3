import React, {useState} from "react";
import addCart from "../containers/ItemListContainer"

export default function ItemCount({stock, initial, onAdd}) {
    const [counter, setCounter] = useState(initial);
    // console.log(useState())

    const sumar = () => {
        if (counter<stock){
            setCounter(counter + 1)
        }
    };

    const restar = () => {
        if (counter>=1){
            setCounter(counter - 1);
        }
    };

    return(
        <>
        <h2>Contador</h2>
        <div>
            <button onClick={sumar}>+</button>
            <h3>{counter}</h3>
            <button onClick={restar}>-</button>
            <button onClick={()=>onAdd(counter, stock)}>Añadir al carrito</button>
        </div>
        </>
    )
}