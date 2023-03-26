import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
  let { handle } = useParams();

  console.log("ProductPage: handle: ", handle);

  const { fetchProductWithHandle, product } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading ...</div>;

  console.log("ProductPage: product.title", product.title);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPage;
