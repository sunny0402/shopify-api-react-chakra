import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";

const ProductPage = () => {
  let { handle } = useParams();

  console.log("ProductPage: handle: ", handle);

  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading ...</div>;

  console.log("ProductPage: product.title", product.title);

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {/* Left side */}
        <Image src={product.images[0].src} />
        {/* Right side */}
        <Box>
          <Heading>{product.title}</Heading>
          <Text>${product.variants[0].price.amount}</Text>
          <Text>${product.description}</Text>
          {/* Note: would require a selector for multiple variants */}
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;
