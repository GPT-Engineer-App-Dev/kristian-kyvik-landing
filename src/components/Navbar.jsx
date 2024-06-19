import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2} color="white" width="100%">
      <Flex alignItems="center">
        <Heading size="md">Kristian Ruiz Kyvik</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" mx={2}>
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;