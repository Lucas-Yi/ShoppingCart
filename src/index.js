import React from "react";
import {render} from "react-dom";
import Link from "./Link.js"
import Button from "./Button.js"
import Input from "./Input.js"
import Container from "./Container.js"
import "./index.css"

function App() {
    return (
        <Container>
            <Link href="https://react-tutorial.app">Shop online</Link>
            <Button type="small" disabled={false}>Click me</Button>
            <Input placeholder=" " name="Lucas"/>
        </Container>
    )
}

render(<App />, document.getElementById("react-root"));