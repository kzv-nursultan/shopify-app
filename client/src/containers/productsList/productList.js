import React, { useEffect, useState } from "react";
import axiosInst from "../../configs/axiosInst";
import { Card } from "../../components";
import "./productList.css";

const ProductList = () => {
  const [state, setState] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axiosInst.get("/products");
      //console.log(data);
      setState(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {state.map((product) => (
        <Card key={product._id} {...product.node} />
      ))}
    </div>
  );
};

export default ProductList;
