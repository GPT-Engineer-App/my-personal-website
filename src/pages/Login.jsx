import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button width="100%">Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;
