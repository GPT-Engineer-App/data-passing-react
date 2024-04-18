import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

const PageOne = ({ onNavigate }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    localStorage.setItem("userInput", inputValue);
    onNavigate(2); // Navigate to Page Two
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="xl">Enter your data:</Text>
      <Input placeholder="Type something..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button colorScheme="blue" onClick={handleSave}>
        Save & Go to Page Two
      </Button>
    </VStack>
  );
};

const PageTwo = ({ onNavigate }) => {
  const savedValue = localStorage.getItem("userInput");

  return (
    <VStack spacing={4}>
      <Text fontSize="xl">Data from Page One:</Text>
      <Text>{savedValue || "No data found"}</Text>
      <Button colorScheme="teal" onClick={() => onNavigate(1)}>
        Go Back to Page One
      </Button>
    </VStack>
  );
};

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return <Box p={5}>{currentPage === 1 ? <PageOne onNavigate={handleNavigate} /> : <PageTwo onNavigate={handleNavigate} />}</Box>;
};

export default Index;
