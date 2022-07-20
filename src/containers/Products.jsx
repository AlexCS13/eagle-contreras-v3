import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Product} from '../components/Product';

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=airplane')
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(error => console.log(error));

        console.log(data);
    }, []);


    return (
        <>
            <h2>Coder Products</h2>
            <div>
                {
                    data.length > 0 ?
                    data.map(item => (
                        <Product key={item.id} name={item.title}/>
                    )) :
                    <p>Cargando . . . </p>
                }
            </div>
        </>
    )
}
