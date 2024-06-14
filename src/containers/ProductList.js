import React ,{useEffect}from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SideProduct from "./SideProduct";
import { setProducts } from "../redux/actions/productAction";

const ProductList = () =>{
    const products = useSelector((state) =>state);
    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        const response = await axios.get("https://freetestapi.com/api/v1/cars").catch((err)=>{
            console.log("err",err);
        });
        dispatch(setProducts (response.data));
    }

    useEffect(()=>{
        fetchProducts();

    },[])
    console.log("products:",products);
    return(
    <div className="ui grid container">
        <SideProduct/>
    </div>
    )

}

export default ProductList