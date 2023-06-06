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
  Button,
  Text,
  useColorModeValue,
  Image,
  FormErrorMessage,
  useToast,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveData } from "../Components/utils/localStorage";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginPage = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    // console.log(email,password)
    if (!email == "" && !password == "") {
      axios
        .post("https://tech-prime-lab.onrender.com/user/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data.msg);
          toast({
            title: res.data.msg,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setError("");
          saveData("userInfo", true);
          navigate("/projects");
        })
        .catch((err) => {
          setError(err.response.data.msg);
        });
    }
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
        <Box w={"100%"} mt={!isVertical ? -520 : -180}>
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

        <Box mt={isVertical ? 60 : 30} w={"auto"}>
          <Stack
            mt={isVertical ? -150 : ""}
            bg={useColorModeValue("gray.50", "gray.800")}
            boxShadow={isVertical ? "" : "2xl"}
            spacing={6}
            mx={"auto"}
            maxW={"md"}
            py={isVertical ? 0 : 6}
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
              <Stack spacing={4} pb={5}>
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
                  <InputGroup>
                    <Input
                      onChange={handleChangePass}
                      value={password}
                      size={"lg"}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {checkPass && (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  )}
                </FormControl>
                <Stack mt={8} spacing={5}>
                  {isVertical && (
                    <Text
                      textAlign={"left"}
                      fontSize={"14px"}
                      color={"red.500"}
                      mt={-5}
                      pl={3}
                    >
                      {error && error}
                    </Text>
                  )}
                  <Button
                    w={isVertical ? "100%" : "50%"}
                    margin={"auto"}
                    bg={"blue.500"}
                    color={"white"}
                    fontWeight={400}
                    _hover={{
                      bg: "blue.400",
                    }}
                    borderRadius={25}
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
        {!isVertical && (
          <Text textAlign={"center"} fontSize={"14px"} color={"red.500"} mt={9}>
            {error && error}
          </Text>
        )}
      </Box>
    </>
  );
};

export default LoginPage;
