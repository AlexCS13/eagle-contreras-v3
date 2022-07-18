import React from 'react'

export const Item = ({product}) => {
    return (
        <div>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
        </div>
    )
}
