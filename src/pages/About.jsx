import { Container, Text, VStack, Box, Heading, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaCheckCircle, FaLinkedin, FaDiscord } from "react-icons/fa";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">About Kristian Ruiz Kyvik</Heading>
        <Text fontSize="lg" textAlign="center">
          Kristian has achieved numerous accomplishments throughout his career. Here are some highlights:
        </Text>
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Led multiple successful projects in software development.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Recognized for outstanding teamwork and collaboration.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Expertise in modern web technologies and frameworks.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Active contributor to open-source projects.
            </ListItem>
          </List>
        </Box>
        <Box>
          <Link href="https://www.linkedin.com/in/kristianruizkyvik" isExternal>
            <FaLinkedin size="30px" />
          </Link>
          <Link href="https://discord.com/users/kristiankyvik" isExternal ml={4}>
            <FaDiscord size="30px" />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;