import { useState } from "react";
import ItemCount from "../components/ItemCount";
import products from "../data/MOCK_DATA.json"
import { ItemList } from "../components/ItemList";

function ItemListContainer(props) {
    const [addCart, setAddCart] = useState([]);

    // const data = () => [{
    // }]

    const [productList, setProductList] = useState([])

    const onAdd = (counter, stock) =>{
        if (stock>0){
            setAddCart(addCart[addCart.length] = counter);
        }
        console.log(addCart)
    }

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 300);
    });
    myPromise.then((res) => {
        setProductList(res)
    })

    return(
        <div>
            <p>{props.greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <h2>{addCart}</h2>
            <ItemList items={productList} />
        </div>
    );
}

export default ItemListContainer;