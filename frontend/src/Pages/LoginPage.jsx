import React, { useState } from "react";
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
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveData } from "../Components/utils/localStorage";

const LoginPage = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setCheckEmail(false);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
    setCheckPass(false);
  };

  const handleSubmit = () => {
    if (email.trim() === "") {
      setCheckEmail(true);
    }
    if (password.trim() === "") {
      setCheckPass(true);
    }

    axios
      .post("http://localhost:8000/user/login", { email, password })
      .then((res) => {
        console.log(res.data.msg);
        toast({
          title: res.data.msg,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        saveData("userInfo", true);
        navigate("/projects");
      })
      .catch((err) => {
        // console.log(err.response.data.msg);
        toast({
          title: err.response.data.msg,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      });
  };

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

        <Box mt={isVertical ? 60 : 50} w={"auto"}>
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
            <Box>
              {/* <form action=""> */}
              <Stack spacing={4}>
                <FormControl isInvalid={checkEmail} id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={handleChangeEmail}
                    value={email}
                    size={"lg"}
                    type="email"
                  />
                  {checkEmail && (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={checkPass} id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={handleChangePass}
                    value={password}
                    size={"lg"}
                    type="password"
                  />
                  {checkPass && (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
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
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
              {/* </form> */}
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
