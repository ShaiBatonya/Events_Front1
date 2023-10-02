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
  SimpleGrid,
  Icon,
  Text,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNoteForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    text: "",
    location: "",
    organizer: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:4000/notes/add",
        values
      );

      toast.success(data.message);
      setValues({
        title: "",
        text: "",
        location: "",
        organizer: "",
      });

      navigate("/main");
    } catch (error) {
      toast.error("אירעה שגיאה בהוספת האירוע. אנא נסה שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p="40px" bg="gray.100">
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
                {loading ? <Spinner size="sm" /> : "הוסף אירוע"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
}
