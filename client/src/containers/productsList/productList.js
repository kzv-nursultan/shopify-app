import { useEffect } from "react";
import "./productList.css";
import { Card } from "../../components";
import axiosInst from "../../configs/axiosInst";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../configs/redux/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.main.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInst.get("/products");
        dispatch(addProducts(data));
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, [dispatch]);
  
  return (
    <div className="container">
      {products?.map((product) => (
        <Card key={product._id} {...product.node} _id={product._id} />
      ))}
    </div>
  );
};

export default ProductList;
