import React, {useState, useEffect} from "react";
import useFetch from "../ultility/useFetch.js"
import Loader from "../component/Loader.js"
import Product from "../entity/Product.js"

export default function Products(props) {

    const [products, setProducts] = useState([])
    const { get, loading } = useFetch("https://react-tutorial-demo.firebaseio.com/")

    useEffect(()=>{
        get("supermarket.json")
        .then((data)=>{
            setProducts(data)
        })
        .then(error => console.log(error))
    },[get])

    return <>
        <div class="products-layout">
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div class="products-grid">
                {loading && <Loader />}
                {products.map(product => 
                    <Product
                     key={product.id} 
                     details={product} 
                     cart={props.cart}
                     onProductAdd={props.onProductAdd} 
                     onProductDelete={props.onProductDelete}/>
                )}
            </div>
        </div>
    </>;
}
