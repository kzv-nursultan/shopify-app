import React, { useEffect } from "react";
import axiosInst from "../../configs/axiosInst";

const fetchProducts = async () => {
  try {
    const { data } = await axiosInst.get("/products");
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

const ProductList = () => {
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
