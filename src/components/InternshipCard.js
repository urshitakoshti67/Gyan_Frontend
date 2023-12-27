// InternshipCard.js
import React from 'react';
import { Card, CardBody, CardFooter, ButtonGroup, Button, Stack, Heading, Text, Divider, UnorderedList, ListItem } from '@chakra-ui/react';

const InternshipCard = ({ internshipTitle, internshipDuration,internshipFees }) => {
  return (
    <Card maxW='sm' boxShadow={'dark-lg'} m='1'>
      <CardBody>
        
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{internshipTitle}</Heading>
          <Text textAlign="left">
            <UnorderedList>
              <ListItem>Duration: {internshipDuration}</ListItem>
              <ListItem>Fees: {internshipFees}</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            View Internships
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;
