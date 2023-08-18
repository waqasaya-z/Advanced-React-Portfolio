import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
 <>
  <Card maxW='xl'>
  <CardBody>
    <Image
      src={imageSrc}
      alt={description}
      borderRadius='cover'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>
        {title}
      </Heading>
      <Text>
      {description}
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
  <HStack>
    <Text>
     See more 
     </Text>
     <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
      </HStack>
     
  </CardFooter>
</Card>


 </>

  );
};

export default Cards;
