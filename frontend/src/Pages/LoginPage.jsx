import React from "react";
import bgImg from "../Images/login-bg.svg";
import logo from "../Images/Logo.svg";

import {
  useBreakpointValue,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const LoginPage = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Box w={"100%"}>
        <Box
          w={"full"}
          h={isVertical ? "45vh" : "80vh"}
          backgroundImage={`url(${bgImg})`}
          backgroundSize={!isVertical ? "cover" : "cover"}
          bgRepeat={"no-repeat"}
          backgroundPosition={!isVertical ? "0 -130px" : "0 0 "}
          // mb={0}
        ></Box>
        <Box w={"100%"} mt={!isVertical ? -500 : -180}>
          <Flex
            gap={5}
            flexDir={"column"}
            alignItems={"center"}
            // border={"1px solid red"}
          >
            <Image boxSize="70px" src={logo} />
            <Text textAlign={"center"} color={"white"} fontSize={"15px"}>
              Online Project Management
            </Text>
          </Flex>
        </Box>

        <Box mt={ isVertical ? 60 : 50} w={"auto"}>
          <Stack
            mt={isVertical ? -150 : ""}
            // border={"1px solid red"}
            bg={useColorModeValue("gray.50", "gray.800")}
            boxShadow={"2xl"}
            spacing={8}
            mx={"auto"}
            maxW={"md"}
            py={isVertical ? 0 : 12}
            px={!isVertical ? 6 : 2}
            rounded={"lg"}
          >
            <Stack>
              <Text
                textAlign={!isVertical ? "center" : "left"}
                fontSize={"20px"}
                fontWeight={500}
                color={"gray.600"}
              >
                Login to get Started
              </Text>
            </Stack>
            <Box
              // p={5}
              // w={"90%"}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input size={"lg"} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input size={"lg"} type="password" />
                </FormControl>
                <Stack mt={8} spacing={10}>
                  <Button
                    w={"50%"}
                    margin={"auto"}
                    bg={"blue.500"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    borderRadius={25}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
