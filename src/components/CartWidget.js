import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
        </div>
    )
}

export default CartWidget;