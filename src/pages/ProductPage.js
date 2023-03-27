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

  // console.log("ProductPage: handle: ", handle);

  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading ...</div>;

  return (
    <Box p="2rem">
      {/* Note: for mobile array of grid layouts */}
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
        {/* Left side */}
        <Flex alignItems="center" justifyContent="center">
          {/* TODO image carousel */}
          <Image src={product.images[0].src} />
        </Flex>

        {/* Right side */}
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="2rem" // padding x-axis
        >
          <Heading pb="2rem">{product.title}</Heading>
          <Text pb="2rem" fontWeight="bold">
            ${product.variants[0].price.amount}
          </Text>
          <Text pb="2rem" color="gray.500">
            ${product.description}
          </Text>
          {/* Note: would require a selector for multiple variants */}
          <Button
            _hover={{ opacity: "70%" }}
            w="10rem"
            backgroundColor="#FF3880"
            color="white"
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
