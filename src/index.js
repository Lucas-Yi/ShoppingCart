import React, {useEffect, useState} from "react"
import {render} from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./pages/Navbar.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Products from "./pages/Products.js"
import Cart from "./pages/Cart.js"
import ProductDetails from "./entity/ProductDetails.js";
import "./index.css"

function App() {

    const [cart, setCart] = useState(function () {
        let savedCart = [];
        try {
          savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        } catch (error) {
          savedCart = [];
        }
        return savedCart;
      });

    useEffect(() => {
       if (cart) {
          localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    function handleProductDelete(id) {
        const updatedCart = cart.filter(product=>product.id!==id)
        setCart(updatedCart)
      }
    
    function handleProductAdd(newProduct) {
        const newProductExist = cart.find(product=>product.id === newProduct.id)
        if(newProductExist){
          const updatedCart = cart.map(product=>{
            if(newProduct.id === product.id){
              return {...product, quantity:product.quantity+1}
            }
            return product
          })
          setCart(updatedCart)
        }else{
          setCart([...cart, {
            id:newProduct.id, 
            price_id:newProduct.price_id, 
            name: newProduct.name,
            price: newProduct.price,
            image: newProduct.image,
            quantity: 1
         }])
        }
      }

    return(
        <div className="container">
            <BrowserRouter>
                <Navbar cart={cart}/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/products">
                        <Products cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />
                    </Route>
                    <Route path="/products/:id">
                        <ProductDetails cart={cart} onProductAdd={handleProductAdd}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

render(<App />, document.getElementById("react-root"));