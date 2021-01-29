import React from "react"
import {render} from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./pages/Navbar.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Products from "./pages/Products.js"
import Cart from "./pages/Cart.js"
import "./index.css"
// import Link from "./Link.js"
// import Button from "./Button.js"
// import Input from "./Input.js"
// import Container from "./Container.js"

function App() {

    return(
        <div class="container">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
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