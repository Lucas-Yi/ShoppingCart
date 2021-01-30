import React, {useState} from "react"
import {render} from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./pages/Navbar.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Products from "./pages/Products.js"
import Cart from "./pages/Cart.js"
import ProductDetails from "./entity/ProductDetails.js";
import "./index.css"
// import Button from "./Button.js"
// import Input from "./Input.js"

function App() {

    const [cart, setCart] = useState([])

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
        <div class="container">
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


    // function handleButtonClick() {
    //     console.log("Button clicked");
    // }

    // function handleLastNameInput() {
    //     console.log("Last name changed");
    // }

    // return (
    //     <Container>
    //         <Link href="https://react-tutorial.app">Shop online</Link>
    //         {/*test button*/}
    //         <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
    //             <Button>Normal</Button>
    //             <Button outline>Outline</Button>
    //             <Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
    //         </div>
    //         {/*test input*/}
    //         <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
    //             <Input placeholder="First name" />
    //             <Input placeholder="Last name" onInput={handleLastNameInput} />
    //             <Input placeholder="Email" type="email" required />
    //         </div>
    //     </Container>
    // )
}

render(<App />, document.getElementById("react-root"));