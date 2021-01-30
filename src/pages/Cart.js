import React from "react";

export default function Cart(props) {
  const { cart } = props
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  )
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity, 
    0
  )
  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length == 0 && <p>You have not added any product to your cart yet.</p>}
      </div>
      <table class="table table-cart">
        <thead>
          <tr>
            <th width="25%" class="th-product">Product</th>
            <th width="20%">Unit price</th>
            <th width="10%">Quanity</th>
            <th width="25%">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product=>{
            console.log(cart)
            return(
              <tr>
                <td>
                  <img width="30" height="30" alt="" />
                  {product.name}
                </td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <strong>${product.price*product.quantity}</strong>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2"></th>
            <th class="cart-highlight">{totalQuantity}</th>
            <th class="cart-highlight">${totalPrice}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
