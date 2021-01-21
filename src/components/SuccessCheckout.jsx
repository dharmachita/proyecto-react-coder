import React, {useLayoutEffect} from "react";

export default function SuccessCheckout() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  return (
    <div>
      <h2>Felicitaciones tu compra fue aprobada</h2>
      <p>Codigo de seguimiento</p>
    </div>
  );
}