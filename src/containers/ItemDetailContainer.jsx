import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { customFetch } from "../utils/customFetch";
const {data} = require("../utils/products");

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(data[2])
            .then(result => setDato(result))
            .catch(error => console.log(error))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;