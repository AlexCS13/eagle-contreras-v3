import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {
    // const onAdd = (qty) => {
    //     alert("You have selected " + qty = " items.");
    // }

    return (
        <div>
            {
                item ?
                <>
                    <h1>{item.title}</h1>
                    <img src={item.thumbnail} alt={item.id} />
                    <h2>{item.price}</h2>
                </>
                    : <h1>Item not found</h1>
            }
        </div>
    );
}

export default ItemDetail;