import React, { useEffect, useState } from "react";
import { Card } from "@welcome-ui/card";
import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import { Tag } from "@welcome-ui/tag";

const ProductCards = ({ furnitures }) => {
  const [available, setAvailable] = useState(true);
  console.log(furnitures.quantity);

  useEffect(() => {
    if (parseInt(furnitures.quantity) === 0) {
      setAvailable(false);
    }
  });

  console.log(furnitures.img.img1);

  return (
    <Card
      maxWidth={400}
      h={200}
      backgroundImage={`url(${furnitures.img.img1})`}
      display="flex"
      alignItems="flex-end"
    >
      <Box
        padding="xl"
        w="100%"
        background="linear-gradient(0deg, rgba(0,0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)"
      >
        <Text as="h4" fontWeight="bold" m={0} color="light.900">
          {furnitures.name}
        </Text>
        {available ? (
          <Tag variant="success">AVAILABLE</Tag>
        ) : (
          <Tag variant="warning">NOT AVAILABLE</Tag>
        )}
      </Box>
    </Card>
  );
};

export default ProductCards;
