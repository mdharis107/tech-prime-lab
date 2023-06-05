import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { format } from "date-fns";

const CreateProject = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    if (!data.ProjectName) {
      return setCheck(true);
    }
    setCheck(false);

    if (
      !data.StartDate ||
      !data.EndDate ||
      !data.Reason ||
      !data.Type ||
      !data.Division ||
      !data.Category ||
      !data.Priority ||
      !data.Department ||
      !data.Location
    ) {
      return;
    }
    // console.log(data);
    try {
      axios
        .post("http://localhost:8000/project/addProject", data)
        .then((res) => {
          res.data.err
            ? toast({
                title: res.data.msg,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            : toast(
                {
                  title: res.data.msg,
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                },
                window.location.reload()
              );

          // navigate("/projects")
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex direction={"column"} gap={5} borderRadius={5}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <FormControl
          isRequired
          isInvalid={check}
          display={"flex"}
          flexDir={"column"}
        >
          <Textarea
            name="ProjectName"
            onChange={handleChange}
            placeholder="Enter Project Theme"
            w={!isVertical ? "75%" : "100%"}
          />
          {check && <FormErrorMessage>Project Theme Required</FormErrorMessage>}
        </FormControl>

        {!isVertical && (
          <Button
            onClick={handleSubmit}
            // type={"submit"}
            w={"150px"}
            borderRadius={20}
            colorScheme="blue"
          >
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
              <FormLabel>Reason</FormLabel>
              <Select
                placeholder="Select option"
                name="Reason"
                onChange={handleChange}
                size="lg"
              >
                <option value="Business">Business</option>
                <option value="Dealership">Dealership</option>
                <option value="Transport">Transport</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Select
                placeholder="Select option"
                name="Type"
                onChange={handleChange}
                size="lg"
              >
                <option value="Internal">Internal</option>
                <option value="External">External</option>
                <option value="Vendor">Vendor</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Division</FormLabel>
              <Select
                placeholder="Select option"
                name="Division"
                onChange={handleChange}
                size="lg"
              >
                <option value="Filters">Filters</option>
                <option value="Compressor">Compressor</option>
                <option value="Pumps">Pumps</option>
                <option value="Glass">Glass</option>
                <option value="Water Heater">Water Heater</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select option"
                name="Category"
                onChange={handleChange}
                size="lg"
              >
                <option value="Quality A">Quality A</option>
                <option value="Quality B">Quality B</option>
                <option value="Quality C">Quality C</option>
                <option value="Quality D">Quality D</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Priority</FormLabel>
              <Select
                placeholder="Select option"
                name="Priority"
                onChange={handleChange}
                size="lg"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Department</FormLabel>
              <Select
                placeholder="Select option"
                name="Department"
                onChange={handleChange}
                size="lg"
              >
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Stores">Stores</option>
                <option value="Strategy">Strategy</option>
                <option value="Quality">Quality</option>
                <option value="Maintenance">Maintenance</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel>Start Date as per Project Plan</FormLabel>
              <Input
                name="StartDate"
                onChange={handleChange}
                size="lg"
                type="date"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel>End Date as per Project Plan</FormLabel>
              <Input
                name="EndDate"
                onChange={handleChange}
                size="lg"
                type="date"
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Select
                placeholder="Select option"
                name="Location"
                onChange={handleChange}
                size="lg"
              >
                <option value="Chennai">Chennai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Pune">Pune</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Text
          mb={isVertical ? 5 : ""}
          mt={15}
          fontSize={"1xl"}
          textAlign={!isVertical ? "right" : "left"}
        >
          Status:
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Registered
          </span>
        </Text>
      </Box>
      <Box textAlign={"center"}>
        {isVertical && (
          <Button
            // type={"submit"}
            size={"sm"}
            borderRadius={20}
            colorScheme="blue"
            margin={"auto"}
            w={"100%"}
            fontWeight={500}
            onClick={handleSubmit}
          >
            Save the Project
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default CreateProject;
