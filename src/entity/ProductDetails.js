import React, {useState, useEffect} from "react";
import {useParams, useRouteMatch, NavLink, Switch, Route} from "react-router-dom"
import useFetch from "../ultility/useFetch.js"
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";

export default function ProductDetails(props) {
  const [productDetail, setProductDetail] = useState({})
  const {get} = useFetch("https://react-tutorial-demo.firebaseio.com/")
  const params = useParams()
  const match = useRouteMatch()

  useEffect(()=>{
    get(`productinfo/id${params.id}.json`)
    .then(data=>setProductDetail(data))
    .catch(error=>console.log("Could not load product details", error))
  }, [get, params.id])

  return <>
    <div class="product-details-layout">
      <div>
        <h2>{productDetail.name}</h2>
        <img width="125" height="125" class="product-details-image" alt={productDetail.name}
        src={productDetail.image}/>
      </div>
      <div>
        <div class="tabs">
          <ul>
            <li>
              <NavLink to={match.url} exact activeClassName="tab-active">Details</NavLink>
            </li>
            <li>
              <NavLink to={match.url+"/nutrition"} activeClassName="tab-active">Nutrition</NavLink>
            </li>
            <li>
              <NavLink to={match.url+"/storage"} activeClassName="tab-active">Storage</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path={match.url}>
            <ProductDetailInfo product={productDetail} onProductAdd={props.onProductAdd}/>
          </Route>
          <Route path={match.url+"/nutrition"}>
            <ProductDetailNutrition nutrition={productDetail.nutrition}/>
          </Route>
          <Route path={match.url+"/storage"}>
            <ProductDetailStorage storage={productDetail.storage}/>
          </Route>
        </Switch>
      </div>
    </div>
  </>
}
