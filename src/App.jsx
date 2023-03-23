import { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';

const App = () => {
  const [evaluation, setEval] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const evaluateWriting = (prompt, studentResponse) => {
    setLoading(true);
    setIsOpen(true);
  };

  return (
    <Box bg="green.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput evaluateWriting={evaluateWriting} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
