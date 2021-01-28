import React from "react";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function AddRemoveButton(props) {
  const { stock, init } = props;
  const [count, setCount] = useState(parseInt(init));
  const { itemsCart, setItemsCart } = useContext(CartContext);

  useEffect(() => {
    setItemsCart({
      ...itemsCart,
      cantidadAgregar: count
    });
    // eslint-disable-next-line
  }, [count]);

  return (
    <>
      <div className="contador-item">
        <button
          disabled={count === parseInt(init)}
          onClick={() => setCount(count > 1 ? count - 1 : count)}
        >
          -
        </button>
        <div className="contador-num">{count}</div>
        <button
          disabled={count === stock}
          onClick={() => setCount(count < stock ? count + 1 : count)}
        >
          +
        </button>
      </div>
    </>
  );
}
