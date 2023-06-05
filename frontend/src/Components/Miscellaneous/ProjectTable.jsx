import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import ProjectTableRow from "./ProjectTableRow";

const ProjectTable = ({ data, handleUpdate }) => {
  // console.log(data);
  return (
    <>
      <TableContainer  borderRadius={5} w={"100%"}>
        <Table size={"sm"} variant="simple">
          <Thead bgColor={"gray.100"}>
            <Tr>
              <Th py={3}>Project Name</Th>
              <Th>Reason</Th>
              <Th>Type</Th>
              <Th>Division</Th>
              <Th>Category</Th>
              <Th>Priority</Th>
              <Th>Dept.</Th>
              <Th>Location</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody w={"100%"}>
            {data?.map((ele) => {
              return (
                <ProjectTableRow
                  key={ele?._id}
                  ProjectName={ele?.ProjectName}
                  Category={ele?.Category}
                  Division={ele?.Division}
                  Location={ele?.Location}
                  StartDate={ele?.StartDate}
                  EndDate={ele?.EndDate}
                  Priority={ele?.Priority}
                  Status={ele?.Status}
                  Type={ele?.Type}
                  Reason={ele?.Reason}
                  Department={ele?.Department}
                  id={ele?._id}
                  handleUpdate={handleUpdate}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProjectTable;
