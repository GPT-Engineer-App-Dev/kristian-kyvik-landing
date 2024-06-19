import { Container, Text, VStack, Image, Box, Heading, Link } from "@chakra-ui/react";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="150px">
          <Image src="/images/kristian.jpg" alt="Kristian Ruiz Kyvik" borderRadius="full" boxSize="150px" />
        </Box>
        <Heading as="h1" size="xl">Kristian Ruiz Kyvik</Heading>
        <Text fontSize="lg" textAlign="center">
          Kristian is an exceptional colleague known for his dedication, teamwork, and expertise. He consistently goes above and beyond to ensure the success of his team and projects.
        </Text>
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

export default Index;