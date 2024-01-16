import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import design from '../images/design.png';
import course from '../images/course2.png';
import axios from 'axios';

const CourseGrid = ({ name }) => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gyanbackend.aim4u.co.in/intern/all-internship/`)
      .then((res) => {
        setInternships(res.data);
        console.log('Internships:', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const gridItems = internships.map((internship, index) => (
    <GridItem key={index} colSpan={1} rowSpan={1}>
      <Card minW={['100%', '100%', 'sm']} boxShadow='lg' mx={['4', '4', '30px']} my={['4', '4', '6%']}>
        <CardBody>
          <Image src={course} alt='Green double couch with wooden legs' borderRadius='lg' w='full' />
          <Stack mt='5%' spacing='6'>
            <Flex color='darkgrey'>
              <Image src={design} alt='design' />
              <Text ml='1'>{/* Add design text content here */}</Text>
              <Spacer />
              <TimeIcon mt='1' mr='1' />
              <Text>{internship.duration_weeks}</Text>
            </Flex>
            <Heading size='md'>{internship.Internship_title}</Heading>
            <Text>
              <b>Completion Certificate:</b> {internship.completion_certificate ? 'Yes' : 'No'}<br />
              <b>Key Skills:</b> {internship.key_skills}<br />
            </Text>
            <Flex>
              <Box>
                <Avatar bg='teal.500' />
                <Text color='#5B5B5B' textAlign='center'>
                  {name}
                </Text>
              </Box>
              <Spacer />
              {/* <Text as='del' color='darkgrey' mt='1' fontSize='xl'>
                100
              </Text> */}
              <Text color='blue.600' fontSize='2xl'>
                {internship.fees}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
  ));

  return (
    <Flex justifyContent='center' mx={['2', '2', '0']} maxW={'100vw'}>
      <Box maxW='100vw' overflowX='auto'>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          gap={4}
          justify='center'
        >
          {gridItems}
        </Grid>
      </Box>
    </Flex>
  );
};

export default CourseGrid;
