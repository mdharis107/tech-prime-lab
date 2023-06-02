import React from "react";
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

const Card = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      boxShadow="2xl"
      width={!isVertical ? "calc(100% / 5)" : "100%"}
      // width={"400px"}
      borderWidth={1}
      borderLeftColor="teal.300"
      borderLeftWidth={5}
      borderRadius="md"
      padding={2}
      marginBottom={4}
      bgColor={"white"}
      textAlign={"left"}
      // pr={10}

      // border={"1px solid red"}
    >
      {/* Card Content */}
      <Text color={"gray.500"}>Total Projects</Text>
      <Heading pr={20} color={"gray.600"} fontSize={"5xl"}>
        8
      </Heading>
    </Box>
  );
};

const DashboardCards = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  return (
    <Box
      width={"100%"}
      display="flex"
      // flexWrap={"wrap"}
      gap={5}
      overflow={isVertical ? "scroll" : "inherit"}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default DashboardCards;
