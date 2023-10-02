import { Flex, Text, Box, Input, InputGroup, InputRightElement, Icon, IconButton } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import Card from "./Card";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function NotesContainer({ notesData }) {
  const [notes, setNotes] = useState([...notesData]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = async (id) => {
    try {
      setLoading(true);

      const { data } = await axios.delete(
        `http://localhost:4000/notes/delete/${id}`
      );

      toast.success(data.message);

      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.includes(searchTerm) || note.text.includes(searchTerm)
  );

  return (
    <Box p="40px" bg="gray.100">
      <InputGroup mb={{ base: "20px", md: "30px" }} w={{ base: "100%", md: "400px" }} mx="auto">
        <Input
          placeholder="חיפוש לפי כותרת או תוכן"
          value={searchTerm}
          onChange={handleSearch}
          pr="4.5rem"
          borderRadius="full"
          _placeholder={{ color: "gray.400" }}
          _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 2px rgba(0, 132, 255, 0.2)" }}
        />
        <InputRightElement width="4.5rem">
          {searchTerm ? (
            <IconButton
              aria-label="Clear Search"
              icon={<CloseIcon />}
              onClick={handleClearSearch}
              size="sm"
              borderRadius="full"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            />
          ) : (
            <Icon as={SearchIcon} color="gray.400" />
          )}
        </InputRightElement>
      </InputGroup>
      {filteredNotes.length === 0 ? (
        <Flex justifyContent="center" align="center" height="200px">
          <Text color="gray.600" fontSize="xl">אין אירועים שמתאימים לחיפוש</Text>
        </Flex>
      ) : (
        <Flex justifyContent="center" flexWrap="wrap" gap={{ base: "20px", md: "30px" }}>
          {filteredNotes.map((note) => (
            <Card
              key={note._id}
              note={note}
              deleteFunction={handleDelete}
              loading={loading}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
}

export default NotesContainer;
