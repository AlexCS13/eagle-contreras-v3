const {data} = require("../utils/products");

export const customFetch = (product) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const result = data.find(p=>{
                return p.id===product.id
            })
            if(result){
                resolve(result)
            }else{
                reject("product not found")
            }
        }, 2000);
    })
}