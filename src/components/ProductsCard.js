import React from "react";
import { Card } from "@welcome-ui/card";
import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import { Tag } from "@welcome-ui/tag";
import { Flex } from "@welcome-ui/flex";

const ProductCards = () => {
  return (
    <Card
      maxWidth={400}
      h={200}
      backgroundImage="url('https://assets.reedpopcdn.com/animal-crossing-froggy-chair-how-to-unlock-8007-1635971837423.jpg/BROK/resize/690%3E/format/jpg/quality/75/animal-crossing-froggy-chair-how-to-unlock-8007-1635971837423.jpg')"
      display="flex"
      alignItems="flex-end"
    >
      <Box
        padding="xl"
        w="100%"
        background="linear-gradient(0deg, rgba(0,0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)"
      >
        <Flex
          justify={{ xs: "center", md: "space-between" }}
          align="center"
          wrap="wrap"
        >
          <Text as="h4" fontWeight="bold" m={0} color="light.900">
            Froggy Chair
          </Text>
          <Tag variant="success">AVAILABLE</Tag>
        </Flex>
      </Box>
    </Card>
  );
};

export default ProductCards;
