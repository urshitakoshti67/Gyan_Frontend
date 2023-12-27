import React from 'react'

import { GridItem, Card, CardBody, Image, Stack, Flex, Text, Heading, Box, Spacer, Avatar } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import course from '../images/course2.png';
import design from '../images/design.png';

const Recommend = ({ name }) => {
  const gridItems = Array.from({ length: 4 }).map((_, index) => (
    <GridItem key={index} colSpan={1} rowSpan={1}>
      <Card maxW={['100%', '100%', 'sm']} boxShadow='lg' mx={['4', '4', '30px']} my={['4', '4', '6%']}>
        <CardBody>
          <Image src={course} alt='Green double couch with wooden legs' borderRadius='lg' />
          <Stack mt='5%' spacing='6'>
            <Flex color='darkgrey'>
              <Image src={design} alt='design' />
              <Text ml='1'>Design</Text>
              <Spacer />
              <TimeIcon mt='1' mr='1' />
              <Text>3 Month</Text>
            </Flex>
            <Heading size='md'>AWS Certificate Solutions</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
            <Flex>
              <Box>
                <Avatar bg='teal.500' />
                <Text color='#5B5B5B' textAlign='center'>{name}</Text>
              </Box>
              <Spacer />
              <Text as='del' color='darkgrey' mt='1' fontSize='xl'>
                Rs100
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                Rs80
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
  ));

  return (
    <div style={{ backgroundColor: '#BFDEFF' }}>
  <Flex mx='10' mt='10' mb='10'>
    <Text fontWeight='semibold' fontSize={['3xl', '3xl', '5xl']} mt={['16', '16', '10']}>
      Recommended for you
    </Text>
    <Spacer />
    <Text color='#49BBBD' fontSize={['md', 'md', 'lg']} mt={['16', '16', '10']}>
      see all
    </Text>
  </Flex>
  <Flex justifyContent="center" >{gridItems}</Flex>
</div>
    
  );
};



export default Recommend