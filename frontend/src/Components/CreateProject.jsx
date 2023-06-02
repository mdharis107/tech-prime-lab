import React from "react";
import {
  Grid,
  Box,
  Input,
  Flex,
  Textarea,
  Button,
  useBreakpointValue,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
const CreateProject = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex direction={"column"} gap={5} borderRadius={5}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <FormControl isRequired isInvalid display={"flex"} flexDir={"column"}>
          <Textarea
            placeholder="Enter Project Theme"
            w={!isVertical ? "75%" : "100%"}
          />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

        {!isVertical && (
          <Button w={"150px"} borderRadius={20} colorScheme="blue">
            Save Project
          </Button>
        )}
      </Flex>
      <Box w={"90%"}>
        <Grid
          templateColumns={["1fr", "repeat(3, 1fr)"]}
          gap={2}
          width={["100%", "100%"]}
          justifyContent={["center", "center"]}
          alignItems="center"
        >
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel>Start Date</FormLabel>
              <Input placeholder="Select Date and Time" size="lg" type="date" />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel>End Date </FormLabel>
              <Input placeholder="Select Date and Time" size="lg" type="date" />
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Select size="lg" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Text mt={15} textAlign={"right"}>
          Status:
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            Registered
          </span>
        </Text>
      </Box>
      {isVertical && (
        <Button borderRadius={20} colorScheme="blue">
          Save the Project
        </Button>
      )}
    </Flex>
  );
};

export default CreateProject;
