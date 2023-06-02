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
} from "@chakra-ui/react";
import bgImg from "../Images/dashboardImage.svg";
import logo from "../Images/Logo.svg";
import logoutImg from "../Images/Logout.svg";
import createProjectImg from "../Images/create-project-active.svg";
import dashboardImg from "../Images/Dashboard-active.svg";
import projectListImg from "../Images/Project-list-active.svg";
import "../App.css";

const HomePage = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  const tabs = ["Dashboard", "Project Listing", "Create Project"];
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };
  return (
    <Box
      w={"100%"}
      h={isVertical ? "20vh" : "30vh"}
      backgroundImage={`url(${bgImg})`}
      backgroundSize={!isVertical ? "contain" : "cover"}
      bgRepeat={"no-repeat"}
      backgroundPosition={!isVertical ? "55px 0" : ""}
    >
      {!isVertical && (
        <Flex
          mt={10}
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
          mt={5}
          alignItems={"center"}
          justifyContent={"space-between"}
          ml={20}
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
        orientation={!isVertical ? "vertical" : "horizontal"}
      >
        {!isVertical && (
          <TabList mt={10} borderRadius={5} gap={10} mr={5}>
            <Tab
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
            >
              <Image src={dashboardImg} />
            </Tab>
            <Tab
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
            >
              <Image src={projectListImg} />
            </Tab>
            <Tab
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
              mb={10}
            >
              <Image src={createProjectImg} />
            </Tab>
            <Tab mt={10}>
              <Image src={logoutImg} />
            </Tab>
          </TabList>
        )}

        <TabPanels m={!isVertical ? 5 : 0} borderRadius={5}>
          <TabPanel borderRadius={5}>{/* <DashBoard /> */}</TabPanel>
          <TabPanel
            h={!isVertical ? "600px" : ""}
            boxShadow="xl"
            p={0}
            borderRadius={5}
            bg={"white"}
          >
            {/* <TableComponent /> */}
          </TabPanel>
          <TabPanel
            h={!isVertical ? "600px" : ""}
            boxShadow="xl"
            borderRadius={5}
            bg={"white"}
          >
            {/* <InputComponent /> */}
          </TabPanel>
        </TabPanels>
        {isVertical && (
          <TabList borderRadius={5} gap={5}>
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
