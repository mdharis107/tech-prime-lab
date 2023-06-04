import React, { useEffect, useState } from "react";
import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Select,
  useDisclosure,
  List,
  ListItem,
  Icon,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";
import { SearchIcon } from "@chakra-ui/icons";
import CardComponent from "./Miscellaneous/CardComponent";
import axios from "axios";
import ProjectTable from "./Miscellaneous/ProjectTable";

const ProjectListing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onClose();
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/project`).then((res) => setData(res.data));
  }, []);

  // const isScreenSizeReduced = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        pb={5}
        pt={3}
        px={10}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="text" variant="flushed" placeholder="Search" />
          </InputGroup>
        </Box>
        <Box>
          {!isMobile ? (
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              gap={2}
            >
              <Text color={"gray.400"}>Sort By: </Text>
              <Box>
                <Select
                  variant="unstyled"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Flex>
          ) : (
            <Box>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                display="none"
              />
              <Box onClick={onOpen} cursor="pointer">
                <Icon boxSize={8} as={BsFilterLeft} />
              </Box>
              <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Sort Projects By</DrawerHeader>
                  <DrawerBody>
                    <List spacing={5}>
                      <ListItem onClick={() => handleOptionSelect("Option 1")}>
                        Option 1
                      </ListItem>
                      <ListItem onClick={() => handleOptionSelect("Option 2")}>
                        Option 2
                      </ListItem>
                      <ListItem onClick={() => handleOptionSelect("Option 3")}>
                        Option 3
                      </ListItem>
                    </List>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          )}
        </Box>
      </Flex>

      {isMobile ? (
        <Box  w={"100%"}>
          {/* Render card components */}
          {data.map((ele) => {
            return (
              <CardComponent
                key={ele._id}
                ProjectName={ele.ProjectName}
                Category={ele.Category}
                Division={ele.Division}
                Location={ele.Location}
                StartDate={ele.StartDate}
                EndDate={ele.EndDate}
                Priority={ele.Priority}
                Status={ele.Status}
                Type={ele.Type}
                Reason={ele.Reason}
                Department={ele.Department}
              />
            );
          })}
        </Box>
      ) : (
        // <TableContainer borderRadius={5} w={"100%"}>
        //   <Table size={"sm"} variant="simple">
        //     <Thead bgColor={"gray.100"}>
        //       <Tr>
        //         <Th py={3}>Project Name</Th>
        //         <Th>Reason</Th>
        //         <Th>Type</Th>
        //         <Th>Division</Th>
        //         <Th>Category</Th>
        //         <Th>Priority</Th>
        //         <Th>Dept.</Th>
        //         <Th>Location</Th>
        //         <Th>Status</Th>
        //         <Th></Th>
        //         <Th></Th>
        //         <Th></Th>
        //       </Tr>
        //     </Thead>
        //     <Tbody>
        //       <Tr>
        //         <Td w={"100px"}>
        //           <Heading fontSize={"18px"} color={"gray.700"}>
        //             Line Filter
        //           </Heading>
        //           <Text fontSize={"12px"} color={"gray.500"}>
        //             Jun-21, 2020 to Jan-01, 2021
        //           </Text>
        //         </Td>
        //         <Td>Value 2</Td>
        //         <Td>Value 3</Td>
        //         <Td>Value 1</Td>
        //         <Td>Value 2</Td>
        //         <Td>Value 3</Td>
        //         <Td>Value 1</Td>
        //         <Td>Value 2</Td>
        //         <Td>Value 3</Td>
        //         <Td>
        //           <Button
        //             size={"sm"}
        //             borderRadius={20}
        //             colorScheme="blue"
        //             variant={"solid"}
        //           >
        //             START
        //           </Button>
        //         </Td>
        //         <Td>
        //           <Button
        //             size={"sm"}
        //             borderRadius={20}
        //             colorScheme="blue"
        //             variant={"outline"}
        //           >
        //             CLOSE
        //           </Button>
        //         </Td>
        //         <Td>
        //           <Button
        //             size={"sm"}
        //             borderRadius={20}
        //             colorScheme="blue"
        //             variant={"outline"}
        //           >
        //             END
        //           </Button>
        //         </Td>
        //       </Tr>
        //     </Tbody>
        //   </Table>
        // </TableContainer>
        <ProjectTable data={data} />
      )}
    </>
  );
};

export default ProjectListing;
