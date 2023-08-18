import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Avatar } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   
   <Avatar size='2xl' name='Dan Abrahmov' src='https://i.pravatar.cc/150?img=7' />
   <Heading as='h2' size='sm' noOfLines={1}>
    {greeting}
  </Heading>

  <Text as="b" fontSize='5xl'>{bio1}</Text>
  <Text as="b"  fontSize='5xl'>{bio2}</Text>

  </FullScreenSection>
);

export default LandingSection;
