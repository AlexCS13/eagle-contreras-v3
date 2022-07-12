import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    const [addCart, setAddCart] = useState([]);
    const onAdd = (counter, stock) =>{
        if (stock>0){
            setAddCart(addCart[addCart.length] = counter);
        }
        console.log(addCart)
    }
    return(
        <div>
            <p>{props.greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <h2>{addCart}</h2>
        </div>
    );
}

export default ItemListContainer;