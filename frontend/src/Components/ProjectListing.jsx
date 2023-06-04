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
import Pagination from "./Pagination";
import { getPage } from "./utils/utils";
import { useSearchParams } from "react-router-dom";

const ProjectListing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPage(searchParams.get("page"));
  const [page, setPage] = useState(initPage);
  const [totalPages, setTotalPages] = useState();
  const AllPage = Math.ceil(totalPages / 10);

  // console.log(totalPages);

  // console.log(searchParams);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onClose();
  };

  const fetchData = async (page) => {
    return axios.get(`http://localhost:8000/project?limit=${10}&page=${page}`);
  };

  // console.log(data);

  // const handlePageChange = (page) => {
  //   // console.log(page,"here")
  //   setCurrentPage(page);
  //   fetchData(page);
  // };

  useEffect(() => {
    fetchData(page)
      .then((res) => {
        setData(res.data.projects);
        setTotalPages(res.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({ page });
  }, [setSearchParams, page]);

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
        <ProjectTable data={data} />
      )}
      <Box pb={5}  >
        <Pagination
          currentPage={page}
          totalPages={AllPage}
          onPageChange={(page) => setPage(page)}
        />

        {/* <Pagination
          totalPage={AllPage}
          current={page}
          onChange={(page) => setPage(page)}
        /> */}
      </Box>
    </>
  );
};

export default ProjectListing;
