import { Flex, Text, Box } from "@chakra-ui/react";
import AddNoteForm from "../../components/AddNoteForm";

function AddNote() {
  return (
    <Box p="40px" bg="gray.100">
      <Flex flexDirection="column" alignItems="center" mb="30px">
        <Text
          fontSize="36px"
          fontWeight="bold"
          color="blue.600"
          textAlign="center"
        >
          הוספת אירוע חדש
        </Text>
        <Text fontSize="18px" color="gray.600" textAlign="center" mt="10px">
          ברוכים הבאים לדף הוספת האירוע החדש שלך. כאן תוכלו ליצור אירוע חדש
          ולהזין את הפרטים הרלוונטיים לאירוע שלך.
        </Text>
      </Flex>
      <AddNoteForm />
    </Box>
  );
}

export default AddNote;
