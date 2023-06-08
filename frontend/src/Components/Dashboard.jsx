import {
  Box,
  Heading,
  Spinner,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DashboardCards from "./Miscellaneous/DashboardCards";
import BarChart from "./Miscellaneous/BarChart";
import axios from "axios";

const Dashboard = ({ loading, data, chartData }) => {
  const isVertical = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Stack w={"100%"}>
        <DashboardCards loading={loading} data={data} />
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
          {loading ? <Spinner size={"xl"} /> : <BarChart data={chartData} />}
        </Box>
      </Stack>
    </>
  );
};

export default Dashboard;
