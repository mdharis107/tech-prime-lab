import { Box, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DashboardCards from "./Miscellaneous/DashboardCards";
import BarChart from "./Miscellaneous/BarChart";
import axios from "axios";

const Dashboard = ({ data, chartData }) => {
  const isVertical = useBreakpointValue({ base: true, lg: false });
  // const [data, setData] = useState([]);
  // const [chartData, setChartData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/project/count`)
  //     .then((res) => setData(res.data));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/project/chart`)
  //     .then((res) => setChartData(res.data));
  // }, []);

  // console.log(chartData);

  return (
    <>
      <Stack w={"100%"}>
        <DashboardCards data={data} />
        <Box textAlign={"left"}>
          <Heading fontSize={isVertical ? "15" : "30px"}>
            Department wise - Total vs closed
          </Heading>
        </Box>
        <Box
          w={!isVertical ? "70%" : "full"}
          boxShadow="2xl"
          p={!isVertical ? 10 : 1}
          bg="white"
          rounded="md"
        >
          <BarChart data={chartData} />
        </Box>
      </Stack>
    </>
  );
};

export default Dashboard;
