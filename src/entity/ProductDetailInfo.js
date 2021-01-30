import React from "react";

export default function ProductDetailInfo({product, onProductAdd}) {
  return <>
    <p>
      {product.description} sold at <strong>${product.price}</strong> per piece.
    </p>
    <button onClick={()=>onProductAdd(product)}>${product.price}</button>
  </>
}
