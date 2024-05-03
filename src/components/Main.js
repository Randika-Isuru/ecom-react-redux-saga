import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";


function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData)
  console.warn("data in main component", data);

  const product={
    name:'IPhone',
    category: 'mobile',
    price:10000,
    color: 'red'
  }

  return (
    <div >
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div >
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
    </div>
    <div >
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    </div>
    <div >
      <button onClick={() => dispatch(productList())}>Call product List</button>
    </div>
    </div>
  );
}

export default Main;
