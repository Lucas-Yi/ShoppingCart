import React from "react";

export default function ProductDetailInfo({product}) {
  return <>
    <p>
      {product.description} sold at <strong>${product.price}</strong> per piece.
    </p>
    <button>${product.price}</button>
  </>
}
