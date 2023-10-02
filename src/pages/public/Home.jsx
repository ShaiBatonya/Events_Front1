// Import the required dependencies
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/AuthContext";

// Card component to display features
function Card({ heading, description, icon }) {
  return (
    
    
    <Box
      maxW="sm"
      w="100%"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
        transition: "all 0.3s ease",
      }}
    >
      <Flex
        justify="center"
        align="center"
        w={12}
        h={12}
        rounded="full"
        bg="blue.500"
        mb={4}
      >
        {icon}
      </Flex>
      <Heading
        fontSize="xl"
        fontWeight="bold"
        color={useColorModeValue("gray.700", "white")}
        mb={4}
        textAlign="center"
      >
        {heading}
      </Heading>
      <Text
        fontSize="md"
        color={useColorModeValue("gray.600", "gray.300")}
        textAlign="center"
      >
        {description}
      </Text>
    </Box>
  );
}

// The main OpeningScreen component
export default function OpeningScreen() {
  const { user } = useAuth();

  return (
    <>
      {/* The header section */}
      <Box bg={useColorModeValue("gray.100", "gray.800")} minH="100vh">
        <Container maxW="container.md" py={12}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontWeight="bold"
            color={useColorModeValue("gray.700", "white")}
            textAlign="center"
            mb={4}
          >
            ברוכים הבאים למערכת ניהול אירועים
          </Heading>
          <Text
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
            textAlign="center"
            mb={8}
          >
            מערכת ניהול האירועים המובילה שתספק לך כלי יעיל ונוח לארגון וניהול
            אירועים והתרעות חיוניות. עשוייה להיות אירוע עסקי, מסיבה, חתונה או כל
            ארוע אחר, אנחנו כאן לעזור לך לקבל שליטה מלאה ותצוגה ברורה של כל
            האירועים שלך בזמן אמיתי.
          </Text>
          <Flex justify="center" alignItems="center" flexDir="column">
            {user ? (
              <Heading
                as="h1"
                fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                mt={4}
              >
                שלום {user.user_name}!
              </Heading>
            ) : (
              <>
                <Button
                  as={RouterLink}
                  to="/login"
                  size="lg"
                  colorScheme="blue"
                  mt={4}
                >
                  לחץ כאן כדי להתחיל
                </Button>
                <Text
                  fontSize="md"
                  color={useColorModeValue("gray.600", "gray.300")}
                  mt={2}
                >
                  כדי להתחבר לחשבונך
                </Text>
              </>
            )}
          </Flex>
        </Container>

        {/* The features section */}
        <Container maxW="container.xl" py={8}>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gridGap={4}
          >
            <Card
              heading={"ניהול קל ונוח"}
              icon={<Icon as={FcAssistant} w={8} h={8} />}
              description={"כלי יעיל לניהול אירועים בצורה קלה ונוחה"}
            />
            <Card
              heading={"שיתוף פעולה"}
              icon={<Icon as={FcCollaboration} w={8} h={8} />}
              description={"אפשרות לשיתוף פעולה עם חברים ועובדים"}
            />
            <Card
              heading={"תמיכה"}
              icon={<Icon as={FcDonate} w={8} h={8} />}
              description={"תמיכה מקצועית לכל שאלה או בקשה"}
            />
            <Card
              heading={"ניהול מתקדם"}
              icon={<Icon as={FcManager} w={8} h={8} />}
              description={"אפשרויות ניהול מתקדמות ופרטניות"}
            />
            <Card
              heading={"אודותינו"}
              icon={<Icon as={FcAbout} w={8} h={8} />}
              description={"הכירו את צוות המערכת וקראו עלינו"}
            />
          </Flex>
          <Flex align="center" justify="center" py={8}>
            <Container maxW="80%">
              <Accordion allowMultiple bg="white" rounded="lg">
                <AccordionItem border="none">
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize="md">מהי מערכת ניהול האירועים?</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4} bgColor={"gray.200"}>
                    <Text>
                      מערכת ניהול האירועים היא ספריית קומפוננטות פשוטה ומודולרית
                      המספקת למפתחים את הכלים הנדרשים ליצירת אפליקציות אירועים
                      והתרעות באינטרנט. בין שמות האירועים, מותאם אישית, מוגן
                      מהעלאות מידע חיצוניות ומתבצע באופן יעיל ואמין וניתן לשיפור
                      והתאמה לפי הצורך.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize="md">יתרונות שימוש במערכת ניהול האירועים</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4} bgColor={"gray.200"}>
                    <Text>
                      מערכת ניהול האירועים מציעה מגוון יתרונות כולל נוחות בשימוש,
                      נגישות ואפשרויות התאמה אישית. היא מספקת סט מקיף של
                      קומפוננטות ממשק משתמש והיא תואמת לחלוטין את React. בזכות
                      זאת, מפתחים יכולים ליצור אפליקציות ניהול אירועים יעילות
                      ונוחות למשתמשים.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize="md">
                      איך להתחיל להשתמש במערכת ניהול האירועים?
                    </Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4} bgColor={"gray.200"}>
                    <Text>
                      כדי להתחיל להשתמש במערכת ניהול האירועים, יש להתקין אותה דרך
                      npm או yarn ולייבא את הקומפוננטות הנדרשות לפרוייקט. קיימת גם
                      תיעוד מקיף למערכת, המהווה משאב מעולה להתחלה ולמידע נוסף על
                      הספרייה.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Container>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
