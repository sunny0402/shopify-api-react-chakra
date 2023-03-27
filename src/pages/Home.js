import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

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

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <di>Loading....</di>;

  // console.log("Home: products: ", products);
  return (
    <Box>
      <Hero />
      <RichText
        heading="Dog treats and toys!"
        text="We have curated this list of amazing dog treats and toys!"
      />
      <Grid templateColumns="repeat(3,1fr)">
        {" "}
        {products.map((product) => (
          <Link key={product.title} to={`/products/${product.handle}`}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
              </Text>
              <Text
                position="absolute"
                bottom="5%"
                w="100%"
                color="gray.500"
                fontWeight="bold"
              >
                ${product.variants[0].price.amount}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Why choose us" />
      <ImageWithText
        button
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
      <ImageWithText
        reverse
        button
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Second Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
    </Box>
  );
};

export default Home;
