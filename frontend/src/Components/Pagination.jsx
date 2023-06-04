import React, { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Center, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageNumbers, setPageNumbers] = useState([]);


    useEffect(() => {
      const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);
      setPageNumbers(numbers);
    }, [totalPages]);

  return (
    <>
      <Center mt={4}>
        <ButtonGroup variant="outline" size="sm">
          <Button
            isDisabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            colorScheme="blue"
          >
            Previous
          </Button>

          {pageNumbers.map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              colorScheme={pageNumber === currentPage ? "blue" : "gray"}
            >
              {pageNumber}
            </Button>
          ))}

          <Button
            isDisabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            colorScheme="blue"
          >
            Next
          </Button>
        </ButtonGroup>
      </Center>
    </>
  );
};

// const Pagination = ({ current, onChange, totalPage }) => {
//   const prev = (
//     <Button onClick={() => onChange(current - 1)} isDisabled={current === 1}>
//       PREV
//     </Button>
//   );
//   const currentPage = <button>{current}</button>;
//   const next = (
//     <Button
//       isDisabled={totalPage === current}
//       onClick={() => onChange(current + 1)}
//     >
//       NEXT
//     </Button>
//   );
//   return (
//     <div>
//       {prev}
//       {currentPage}
//       {next}
//     </div>
//   );
// };

export default Pagination;
