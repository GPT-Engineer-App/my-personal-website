import React from "react";
import { Box, Button, Container, Divider, Flex, Heading, Icon, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="header" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Your Name
        </Heading>
        <Stack as="nav" direction="row" spacing={4}>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.md" centerContent py={10}>
        <Heading as="h2" size="2xl" fontWeight="bold" mb={6}>
          Hello, I'm Your Name
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={6}>
          A React Developer passionate about building exceptional digital experiences.
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5NzAxMjczfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Your Portrait" mb={6} />
        <Button colorScheme="teal" leftIcon={<FaPlus />}>
          Learn More
        </Button>
      </Container>

      {/* About Section */}
      <Box as="section" id="about" py={10}>
        <Container maxW="container.md">
          <Heading as="h3" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg" mb={4}>
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.
          </Text>
          <Divider my={6} />
          <Flex wrap="wrap" justifyContent="center" alignItems="center">
            {/* Add your skill set or any other content here */}
          </Flex>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box as="section" id="projects" bg="gray.100" py={10}>
        <Container maxW="container.md">
          <Heading as="h3" size="xl" mb={4}>
            Projects
          </Heading>
          {/* Add your projects here */}
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={10}>
        <Container maxW="container.md">
          <VStack spacing={4} alignItems="flex-start">
            <Heading as="h3" size="xl">
              Get In Touch
            </Heading>
            <Text>Whether you have a question or just want to say hi, I'll try my best to get back to you!</Text>
            <Button colorScheme="blue" leftIcon={<Icon as={FaEnvelope} />}>
              Say Hello
            </Button>
            <Flex>
              <Link href="https://github.com" isExternal mx={2}>
                <Icon as={FaGithub} w={8} h={8} />
              </Link>
              <Link href="https://linkedin.com" isExternal mx={2}>
                <Icon as={FaLinkedin} w={8} h={8} />
              </Link>
              <Link href="https://twitter.com" isExternal mx={2}>
                <Icon as={FaTwitter} w={8} h={8} />
              </Link>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
