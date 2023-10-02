import { Spinner, Flex, Text, Box, Heading, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NotesContainer from "../../components/NotesContainer";

function Main() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:4000/notes/all");
        setNotes(data.notes);
      } catch (error) {
        setError(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };

    getAllNotes();
  }, []);

  return (
    <Box p="40px" bg="gray.100" minH="100vh">
      <Flex direction="column" alignItems="center" mx="auto" maxW="800px">
        <VStack spacing="20px" mb="30px">
          <Heading as="h1" size="2xl" color="blue.600">
            כל האירועים
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center">
            ברוכים הבאים לדף שמציג את כל האירועים שלנו. כאן תוכלו לראות ולנהל
            את האירועים שלכם בצורה נוחה ופשוטה.
          </Text>
        </VStack>
        {loading && <Spinner size="xl" />}
        {error && <Text color="red">{error}</Text>}
        {notes.length > 0 && <NotesContainer notesData={notes} />}
      </Flex>
    </Box>
  );
}

export default Main;
