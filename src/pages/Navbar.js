import React from "react";
import {NavLink} from "react-router-dom"

export default function Navbar(props) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.quantity;
  const totalQuantity = props.cart.reduce(reducer,0)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({totalQuantity})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
