import React from 'react';
import { Container, Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Box bg="green.400" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <h1>My App</h1>
      </Container>
    </Box>
  );
};

export default App;