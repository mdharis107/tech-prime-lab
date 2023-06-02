import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useBreakpointValue,
  Button,
  TableContainer,
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
  Heading,
} from "@chakra-ui/react";
// import CardComponent from "./CardComponent";
import { BsFilterLeft } from "react-icons/bs";
import { SearchIcon } from "@chakra-ui/icons";
import CardComponent from "./Miscellaneous/CardComponent";

const ProjectListing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onClose();
  };

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
        <Box w={"100%"}>
          {/* Render card components */}
          <CardComponent />
          {/* <CardComponent /> */}
          {/* <CardComponent /> */}
        </Box>
      ) : (
        <TableContainer borderRadius={5} w={"100%"}>
          <Table size={"sm"} variant="simple">
            <Thead bgColor={"gray.100"}>
              <Tr>
                <Th py={3}>Column 1</Th>
                <Th>Column 2</Th>
                <Th>Column 3</Th>
                <Th>Column 4</Th>
                <Th>Column 5</Th>
                <Th>Column 6</Th>
                <Th>Column 7</Th>
                <Th>Column 8</Th>
                <Th>Column 9</Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td w={"100px"}>
                  <Heading fontSize={"18px"} color={"gray.700"}>
                    Line Filter
                  </Heading>
                  <Text fontSize={"12px"} color={"gray.500"}>
                    Jun-21, 2020 to Jan-01, 2021
                  </Text>
                </Td>
                <Td>Value 2</Td>
                <Td>Value 3</Td>
                <Td>Value 1</Td>
                <Td>Value 2</Td>
                <Td>Value 3</Td>
                <Td>Value 1</Td>
                <Td>Value 2</Td>
                <Td>Value 3</Td>
                <Td>
                  <Button
                    size={"sm"}
                    borderRadius={20}
                    colorScheme="blue"
                    variant={"solid"}
                  >
                    START
                  </Button>
                </Td>
                <Td>
                  <Button
                    size={"sm"}
                    borderRadius={20}
                    colorScheme="blue"
                    variant={"outline"}
                  >
                    CLOSE
                  </Button>
                </Td>
                <Td>
                  <Button
                    size={"sm"}
                    borderRadius={20}
                    colorScheme="blue"
                    variant={"outline"}
                  >
                    END
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ProjectListing;
