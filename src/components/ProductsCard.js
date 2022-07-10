import React, { useEffect, useState } from "react";
import { Card } from "@welcome-ui/card";
import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import { Tag } from "@welcome-ui/tag";
import { Modal, useModalState } from "@welcome-ui/modal";
import { Swiper, useSwiper } from "@welcome-ui/swiper";
import { Button } from "@welcome-ui/button";

const ProductCards = ({ furnitures }) => {
  const [available, setAvailable] = useState(true);
  const modal = useModalState();
  const swiper = useSwiper();

  useEffect(() => {
    if (parseInt(furnitures.quantity) === 0) {
      setAvailable(false);
    }
  });

  console.log(furnitures.img.img1);

  return (
    <Card
      w={300}
      h={200}
      backgroundImage={`url(${furnitures.img.img1})`}
      display="flex"
      alignItems="flex-end"
      margin="xs"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        padding="xl"
        w="100%"
        background="linear-gradient(0deg, rgba(0,0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)"
      >
        <Box>
          <Text as="h4" fontWeight="bold" m={0} color="light.900">
            {furnitures.name}
          </Text>
          {available ? (
            <Tag variant="success">AVAILABLE</Tag>
          ) : (
            <Tag variant="warning">NOT AVAILABLE</Tag>
          )}
        </Box>
        <Modal.Trigger as={Button} {...modal}>
          See details
        </Modal.Trigger>
        <Modal {...modal} ariaLabel="example">
          <Modal.Content>
            {" "}
            <Box display="flex">
              <Box paddingRight="1rem">
                <Swiper h={400} w={500} {...swiper}>
                  <Swiper.Slide textAlign="center">
                    <img
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                      src={furnitures.img.img1}
                    />
                  </Swiper.Slide>
                  <Swiper.Slide textAlign="center">
                    <img
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                      src={furnitures.img.img2}
                    />
                  </Swiper.Slide>
                </Swiper>
              </Box>
              <Box>
                <Text variant="body1" w="10rem">
                  {furnitures.name} <br /> <br />
                  Colors: {furnitures.colors.join(", ")} <br />
                  <br />
                  Height: {furnitures.dimensions.height} <br />
                  Length: {furnitures.dimensions.length} <br />
                  Width: {furnitures.dimensions.width} <br />
                  <br />
                  Supplier: {furnitures.supplier}
                </Text>
                <Button>Add to cart</Button>
              </Box>
            </Box>
          </Modal.Content>
        </Modal>
      </Box>
    </Card>
  );
};

export default ProductCards;
