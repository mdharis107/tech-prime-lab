import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

const CardComponent = () => {
    return (
        <>
          <Card border={"1px solid red"} w={"90%"} align="center" p={2}>
            <CardHeader
              w={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex direction="column" border={"1px solid red"}>
                <Heading size="md">Text Management</Heading>
                <Text size="md">here</Text>
              </Flex>
              <Box border={"1px solid blue"}>
                <Heading size="md">here</Heading>
              </Box>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Flex gap={3} alignItems={"center"} justifyContent={"space-evenly"}>
                <Button
                  size={"md"}
                  borderRadius={20}
                  colorScheme="blue"
                  variant={"solid"}
                >
                  View
                </Button>
                <Button
                  size={"md"}
                  borderRadius={20}
                  colorScheme="blue"
                  variant={"outline"}
                >
                  View
                </Button>
                <Button
                  size={"md"}
                  borderRadius={20}
                  colorScheme="blue"
                  variant={"outline"}
                >
                  View
                </Button>
              </Flex>
            </CardFooter>
          </Card>
        </>
      );
}

export default CardComponent