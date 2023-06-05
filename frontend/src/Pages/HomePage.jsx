import React, { useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
  Image,
  Heading,
  Flex,
  Divider,
} from "@chakra-ui/react";
import bgImg from "../Images/dashboardImage.svg";
import logo from "../Images/Logo.svg";
import logoutImg from "../Images/Logout.svg";
import createProjectImg from "../Images/create-project-active.svg";
import dashboardImg from "../Images/Dashboard-active.svg";
import projectListImg from "../Images/Project-list-active.svg";
import "../App.css";
import Dashboard from "../Components/Dashboard";
import ProjectListing from "../Components/ProjectListing";
import CreateProject from "../Components/CreateProject";

const HomePage = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  const tabs = ["Dashboard", "Project Listing", "Create Project"];
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  return (
    <Box w={"100%"}>
      <Box
        w={"100%"}
        h={isVertical ? "20vh" : "30vh"}
        backgroundImage={`url(${bgImg})`}
        backgroundSize={!isVertical ? "contain" : "cover"}
        bgRepeat={"no-repeat"}
        backgroundPosition={!isVertical ? "60px 0" : ""}
        // position={!isVertical ? "" : "sticky"}
        // top={0}
        // color={"white"}
      ></Box>

      {!isVertical && (
        <Flex
          mt={-180}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"48%"}
          ml={20}
        >
          <Heading fontWeight={500} pl={10} color={"white"} fontSize={"30px"}>
            {tabs[currentTab]}
          </Heading>
          <Image boxSize="70px" src={logo} />
        </Flex>
      )}

      {isVertical && (
        <Flex
          mt={-45}
          alignItems={"center"}
          justifyContent={"space-between"}
          ml={20}
          gap={10}
          // position={"fixed"}
        >
          <Heading fontWeight={500} color={"white"} fontSize={"25px"}>
            {tabs[currentTab]}
          </Heading>
          <Image mr={5} src={logoutImg} />
        </Flex>
      )}

      <Tabs
        onChange={handleTabChange}
        index={currentTab}
        bg={"transparent"}
        pt={isVertical ? "20px" : ""}
        align="center"
        // bgColor={"gray"}
        orientation={!isVertical ? "vertical" : "horizontal"}
      >
        {!isVertical && (
          <TabList
            pr={2}
            boxShadow="xl"
            mt={10}
            borderRadius={5}
            gap={5}
            mr={5}
          >
            <Tab
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
            >
              <Image boxSize={7} src={dashboardImg} />
            </Tab>
            <Tab
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
            >
              <Image boxSize={7} src={projectListImg} />
            </Tab>

            <Divider p={0} />
            <Tab
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
              mb={10}
            >
              <Image boxSize={7} src={createProjectImg} />
            </Tab>
            <Tab mt={10}>
              <Image boxSize={7} src={logoutImg} />
            </Tab>
          </TabList>
        )}

        <TabPanels
          // border={"1px solid red"}
          m={!isVertical ? 5 : 0}
          borderRadius={5}
          bgColor={"white"}
        >
          <TabPanel borderRadius={5}>
            <Dashboard />
          </TabPanel>
          <TabPanel
            h={!isVertical ? "660px" : ""}
            boxShadow="xl"
            borderRadius={5}
          >
            <ProjectListing />
          </TabPanel>
          <TabPanel
            h={!isVertical ? "600px" : ""}
            boxShadow="xl"
            borderRadius={5}
            bg={"white"}
          >
            <CreateProject />
          </TabPanel>
        </TabPanels>

        {isVertical && (
          <TabList
            position={"sticky"}
            bottom={0}
            bgColor={"white"}
            py={2}
            // border={"1px solid red"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
            w={"100%"}
            borderTopRadius={10}
            gap={8}
          >
            <Tab
              _selected={{
                borderBottom: "5px solid blue",
              }}
            >
              <Image src={dashboardImg} />
            </Tab>
            <Tab
              _selected={{
                borderBottom: "4px solid blue",
              }}
            >
              <Image src={projectListImg} />
            </Tab>
            <Tab
              _selected={{
                borderBottom: "5px solid blue",
              }}
            >
              <Image src={createProjectImg} />
            </Tab>
          </TabList>
        )}
      </Tabs>
    </Box>
  );
};

export default HomePage;
