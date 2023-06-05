import React, { useEffect, useState } from "react";
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
import { removeData } from "../Components/utils/localStorage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProjectState } from "../Components/Context/ProjectProvider";

const HomePage = () => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  const tabs = ["Dashboard", "Project Listing", "Create Project"];
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/project/count`).then((res) => {
  //     setData(res.data);
  //     // setUser(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/project/chart`)
  //     .then((res) => setChartData(res.data));
  // }, []);

  const handleTab = (tab) => {
    if (tab === activeTab) {
      // If the clicked tab is already active, no need to refetch the data
      return;
    }
    // if (tab === activeTab) {
    //   setActiveTab(null);
    // } else {
    console.log(tab);
    setActiveTab(tab);
    fetchData(tab);
    // }
  };
  const fetchData = async (tab) => {
    try {
      const fetch1 = await axios.get("http://localhost:8000/project/count");
      const fetch2 = await axios.get("http://localhost:8000/project/chart");

      const data1 = fetch1.data;
      const data2 = fetch2.data;

      setData(data1);
      setChartData(data2);

      // console.log(data, chartData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log("object");
    fetchData(activeTab);
  }, [activeTab]);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  const handleLogout = () => {
    // console.log("object");
    removeData("userInfo");
    navigate("/");
  };

  return (
    <Box w={"100%"}>
      <Box
        w={"100%"}
        h={isVertical ? "10vh" : "30vh"}
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
          ml={isVertical ? 10 : 20}
          gap={10}
          // position={"fixed"}
        >
          <Heading fontWeight={500} color={"white"} fontSize={"25px"}>
            {tabs[currentTab]}
          </Heading>
          <Image onClick={handleLogout} mr={5} src={logoutImg} />
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
          <TabList pr={2} boxShadow="xl" borderRadius={5} mr={5}>
            <Tab
              onClick={() => handleTab("tab1")}
              _selected={{
                borderLeft: "5px solid blue",
              }}
              mt={5}
            >
              <Image boxSize={7} src={dashboardImg} />
            </Tab>
            <Tab
              onClick={() => handleTab("Tab2")}
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
              pb={10}
            >
              <Image boxSize={7} src={createProjectImg} />
            </Tab>
            <Tab isDisabled pt={10} mt={10}>
              <Image
                cursor={"pointer"}
                onClick={handleLogout}
                boxSize={7}
                src={logoutImg}
              />
            </Tab>
          </TabList>
        )}

        <TabPanels m={!isVertical ? 5 : 0}>
          <TabPanel borderRadius={5}>
            <Dashboard data={data} chartData={chartData} />
          </TabPanel>
          <TabPanel
            h={!isVertical ? "700px" : ""}
            boxShadow="xl"
            bg={"white"}
            borderRadius={5}
            p={0}
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
              onClick={() => handleTab("tab1")}
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
