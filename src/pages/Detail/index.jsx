import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import ProductById from "./component/ProductById/ProductById";
import "./styles.scss";
Detail.propTypes = {};

function Detail(props) {
  const { productId } = useParams();
  const id = +productId;
  const [product, setProduct] = useState([]);
  const fetchApiProductById = async (value) => {
    try {
      const res = await productApi.get(value);
      if (res) {
        console.log("RES: ", res);
        setProduct(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiProductById(id);
  });

  console.log("PRODUCT: ", product);
  return (
    <div className="shopping-detail">
      <ProductById product={product} />
    </div>
  );
}

export default Detail;
