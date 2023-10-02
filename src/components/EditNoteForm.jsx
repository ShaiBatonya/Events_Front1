import { useState } from "react";
import {
  Input,
  Box,
  Stack,
  Flex,
  Button,
  Heading,
  Center,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditNoteForm({ note }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: note.title,
    text: note.text,
    location: note.location,
    organizer: note.organizer
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.put(
        `http://localhost:4000/notes/edit/${note._id}`,
        values
      );

      toast.success(data.message);
      navigate("/main");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p="40px" bg="gray.100">
      <Flex flexDirection="column" alignItems="center" mb="30px">
        <Heading size="lg" color="blue.600" textAlign="center">
          עריכת האירוע "{note.title}"
        </Heading>
        <Text fontSize="18px" color="gray.600" textAlign="center" mt="10px">
          ברוכים הבאים לעמוד עריכת האירוע. כאן תוכלו לערוך את האירוע בצורה נוחה
          ופשוטה.
        </Text>
      </Flex>

      <Center>
        <Box
          mt={5}
          maxW="400px"
          width="100%"
          bg="white"
          p={6}
          boxShadow="lg"
          borderRadius="md"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                value={values.title}
                name="title"
                onChange={handleChange}
                variant="filled"
                placeholder="כותרת האירוע"
              />
              <Input
                value={values.location}
                name="location"
                onChange={handleChange}
                variant="filled"
                placeholder="מקום האירוע"
              />
              <Input
                value={values.organizer}
                name="organizer"
                onChange={handleChange}
                variant="filled"
                placeholder="מארגן האירוע"
              />
              <Input
                value={values.text}
                name="text"
                onChange={handleChange}
                variant="filled"
                placeholder="פרטים נוספים על האירוע"
                size="md"
                as="textarea"
                rows={4}
              />

              <Button type="submit" bg="pink.400" color="white">
                {loading ? <Spinner size="sm" /> : "שמור"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
}
