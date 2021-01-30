import React, {useState} from "react";
import {loadStripe} from "@stripe/stripe-js"
import Button from "../component/Button.js";
import Input from "../component/Input.js"

export default function Cart(props) {
  const [email, setEmail] = useState("")

  const stripeLoadedPromise = loadStripe('pk_test_51IEDKRFd6pPKD4YePVjkBKPexOdlFh6FJTYnnoUPLZdgotEFYhzta75jLNnvdiks3SLpPO8oOKfLs7IqF00K3qHR00rNpThsZB');

  const { cart } = props
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  )
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity, 
    0
  )

  const lineItems = cart.map(product=>{
      return {
        price: product.price_id, 
        quantity: product.quantity
      }
    }
  )

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  async function handlePayClick(event){
    event.preventDefault();
    const stripe = await stripeLoadedPromise
    try{
        console.log(lineItems)
        const result = await stripe.redirectToCheckout({
          lineItems:lineItems,
          mode:"payment",
          successUrl:"http://localhost:3000/cart",
          cancelUrl:"http://localhost:3000/cart",
          customerEmail: email
        })
        // this will only log if the redirect did not work
        console.log(result.error)
    }catch(error){ 
        // will see error if wrong API key is put
        console.log(error)
    }
  }
  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
      </div>
      {cart.length > 0 && <>
        <table className="table table-cart">
          <thead>
            <tr>
              <th width="25%" className="th-product">Product</th>
              <th width="20%">Unit price</th>
              <th width="10%">Quanity</th>
              <th width="25%">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product=>{
              console.log(cart)
              return(
                <tr key={product.id}>
                  <td>
                    <img width="30" height="30" alt="" src={product.image}/>
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
              <th className="cart-highlight">{totalQuantity}</th>
              <th className="cart-highlight">${totalPrice}</th>
            </tr>
          </tfoot>
        </table>
        <form className="pay-form" onSubmit={handlePayClick}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
              </p>
              <Input autoComplete="email" placeholder="Email" type="email" required onChange={handleEmailChange} value={email}/>
              <Button type="submit">Pay</Button>
            </form>
      </>}
    </div>
  );
}
