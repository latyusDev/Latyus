import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"

const AddToCart = ({product,styles})=>{
    const dispatch = useDispatch();
    return (
        <button onClick={
            ()=>{
                dispatch(addToCart(product))
            }
        } className={styles}>Add to cart</button>
    )
}
export default AddToCart;