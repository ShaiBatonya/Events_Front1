import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaApple, FaGooglePlay } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <ListHeader>חברה</ListHeader>
            <Link href="#">אודותינו</Link>
            <Link href="#">בלוג</Link>
            <Link href="#">קריירה</Link>
            <Link href="#">צור קשר</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>תמיכה</ListHeader>
            <Link href="#">מרכז העזרה</Link>
            <Link href="#">מרכז הבטיחות</Link>
            <Link href="#">הנחיות קהילה</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>משפטי</ListHeader>
            <Link href="#">מדיניות קובצי קוקיז</Link>
            <Link href="#">מדיניות הפרטיות</Link>
            <Link href="#">תנאי השימוש</Link>
            <Link href="#">אכיפת החוק</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>התקן אפליקציה</ListHeader>
            <Stack direction="row" spacing={4}>
              <a href="#appstore" aria-label="App Store">
                <FaApple size={24} />
              </a>
              <a href="#playstore" aria-label="Google Play">
                <FaGooglePlay size={24} />
              </a>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2023 Your Company. כל הזכויות שמורות</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="טוויטר" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="יוטיוב" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="אינסטגרם" href="#">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
