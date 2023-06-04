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
import { getPage, getQuery, getSort } from "./utils/utils";
import { useSearchParams } from "react-router-dom";

const ProjectListing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPage(searchParams.get("page"));
  const initSort = getSort(searchParams.get("sortOrder"));
  const initQuery = getQuery(searchParams.get("query"));
  const [page, setPage] = useState(initPage);
  const [totalPages, setTotalPages] = useState();
  const AllPage = Math.ceil(totalPages / 10);
  const [query, setQuery] = useState(initQuery);
  const [sortBy, setSortBy] = useState(initSort);

  // console.log(totalPages);

  // console.log(searchParams);

  const handleSelectChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOptionSelect = (option) => {
    setSortBy(option);
    onClose();
  };

  const fetchData = async (page, query, sortBy) => {
    return axios.get(
      `http://localhost:8000/project?limit=${10}&page=${page}&filter=${query}&sort=${sortBy}`
    );
  };

  // console.log(data);

  // const handlePageChange = (page) => {
  //   // console.log(page,"here")
  //   setCurrentPage(page);
  //   fetchData(page);
  // };

  useEffect(() => {
    fetchData(page, query, sortBy)
      .then((res) => {
        setData(res.data.projects);
        setTotalPages(res.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, query, sortBy]);

  useEffect(() => {
    if (query === "") {
      setSearchParams({ page, sortBy });
    } else {
      setSearchParams({ page, query, sortBy });
    }
  }, [setSearchParams, page, query, sortBy]);

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
            <Input
              value={query}
              type="text"
              variant="flushed"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
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
                  value={sortBy}
                  onChange={handleSelectChange}
                  placeholder="Select any Option"
                >
                  <option value="ProjectName">ProjectName</option>
                  <option value="Reason">Reason</option>
                  {/* <option value="Type">Type</option> */}
                  <option value="Division">Division</option>
                  {/* <option value="Category">Category</option> */}
                  {/* <option value="Priority">Priority</option> */}
                  {/* <option value="Department">Department</option> */}
                  <option value="Location">Location</option>
                  <option value="Status">Status</option>
                  <option value="StartDate">StartDate</option>
                  <option value="EndDate">EndDate</option>
                </Select>
              </Box>
            </Flex>
          ) : (
            <Box>
              {/* <Select
                value={selectedOption}
                onChange={handleSelectChange}
                display="none"
              /> */}
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
                      <ListItem
                        onClick={() => handleOptionSelect("ProjectName")}
                      >
                        Project Name
                      </ListItem>
                      <ListItem onClick={() => handleOptionSelect("Priority")}>
                        Priority
                      </ListItem>
                      <ListItem onClick={() => handleOptionSelect("Status")}>
                        Status
                      </ListItem>
                      <ListItem onClick={() => handleOptionSelect("StartDate")}>
                        StartDate
                      </ListItem>
                      <ListItem onClick={() => handleOptionSelect("EndDate")}>
                        EndDate
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
      <Box pb={5}>
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
