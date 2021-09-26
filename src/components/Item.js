import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  function handleCartSelect(){
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={isInCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartSelect} className={isInCart?"Remove From Cart":"Add to Cart"}>{isInCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
