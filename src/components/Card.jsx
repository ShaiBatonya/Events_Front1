import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { format } from "date-fns";

const Card = ({ note, deleteFunction, loading }) => {
  const { user } = useAuth();

  const formattedDate = format(new Date(note.date), "dd/MM/yyyy HH:mm");

  return (
    <Box
      p={6}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      width={{ base: "100%", md: "450px", lg: "600px" }}
    >
      <Box
        mb={6}
        bgGradient="linear(to-r, teal.500,green.500)"
        color="white"
        p={4}
        rounded="md"
        textAlign="center"
      >
        <Heading fontSize="3xl" fontFamily="body">
          {note.title}
        </Heading>
      </Box>
      <Text fontSize="lg" textAlign="center" fontWeight="semibold">
        תוכן האירוע: {note.text}
      </Text>
      <HStack spacing={2} mt={4} justifyContent="center">
        <Text fontSize="lg" fontWeight="semibold">
          מקום האירוע:
        </Text>
        <Text fontSize="lg">{note.location}</Text>
      </HStack>
      <HStack spacing={2} mt={2} justifyContent="center">
        <Text fontSize="lg" fontWeight="semibold">
          מארגן האירוע:
        </Text>
        <Text fontSize="lg">{note.organizer}</Text>
      </HStack>

      <Flex justifyContent="center" alignItems="center" mt={6}>
        <Button
          as={Link}
          to={`edit/${note._id}`}
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
          mx={2}
        >
          עריכה
        </Button>
        <Button
          colorScheme="red"
          size="lg"
          borderRadius="full"
          onClick={() => deleteFunction(note._id)}
          isLoading={loading}
          loadingText="מוחק..."
          _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
          mx={2}
        >
          מחיקה
        </Button>
      </Flex>


        <>
          <HStack mt={6} spacing={4} align="center" justifyContent="center">
            <Avatar src={note.authorAvatar} alt={note.authorName} />
            <Box>
              <Text fontWeight="600">נוצר על ידי {user.user_name}</Text>
              <Text color="gray.500">בתאריך {formattedDate}</Text>
            </Box>
          </HStack>
        </>

    </Box>
  );
};

export default Card;
