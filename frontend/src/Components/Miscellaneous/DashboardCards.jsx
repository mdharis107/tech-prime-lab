import React from "react";
import {
  Box,
  Center,
  Heading,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Card = ({ head, count }) => {
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
    >
      {/* Card Content */}
      <Text color={"gray.500"}>{head}</Text>
      <Heading pr={20} color={"gray.600"} fontSize={"5xl"}>
        {count}
      </Heading>
    </Box>
  );
};

const DashboardCards = ({ loading, data }) => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  return (
    <>
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <Box
          width={"100%"}
          display="flex"
          gap={5}
          overflow={isVertical ? "scroll" : "inherit"}
        >
          {data.map((ele, index) => {
            return <Card key={index} head={ele.head} count={ele.count} />;
          })}
        </Box>
      )}
    </>
  );
};

export default DashboardCards;
