import { Box, Card, CardBody, CardHeader, Center, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import intern from '../images/intern1.png';

const PrevInterns = () => {

    const data = [
        {
          name: 'Neil Daftary',
          role: 'Machine Learning engineer @Linkdin',
          imageSrc: intern,
        },
        {
          name: 'Neil Daftary',
          role: 'Machine Learning engineer @Linkdin',
          imageSrc: intern,
        },
        {
          name: 'Neil Daftary',
          role: 'Machine Learning engineer @Linkdin',
          imageSrc: intern,
        },
        {
          name: 'Neil Daftary',
          role: 'Machine Learning engineer @Linkdin',
          imageSrc: intern,
        },
        {
          name: 'Neil Daftary',
          role: 'Machine Learning engineer @Linkdin',
          imageSrc: intern,
        },
        {
          name: 'Neil Daftary',
          role: 'Machine Learning engineer @Linkdin',
          imageSrc: intern,
        },
        
      ];
    
    
    return (
    
    <div>
    <Flex mx="10" mt="10" mb="20">
      <Text
        fontWeight="semibold"
        fontSize={['2xl', '2xl', '3xl']}
        mt={['4', '4', '0']}
      >
        Some of our previous interns
      </Text>
      <Spacer />
      <Text color="#9acd32" fontSize={['md', 'md', 'lg']}>
        see all
      </Text>
    </Flex>
    <Center>
    <Grid templateColumns={["repeat(1, 3fr)","repeat(2, 3fr)","repeat(3, 3fr)"]} gap={4} width="95%" overflowX="auto">
  {data.map((item, index) => (
    <GridItem key={index}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
  {/* Image */}
  <Center>
  <Box
    boxSize={{ base: '100%', md: '40%' }}
    overflow='visible'
    position="relative"
    mb={{ base: '4', md: '0' }}
  >
    <Image
      src={item.imageSrc}
      alt='intern'
      boxSize="100%"
      objectFit='cover' 
      position="absolute"
      top="50%" 
      left="50%" 
      transform="translate(-50%, -50%)" 
      zIndex='3'
    />
  </Box>
</Center>
  {/* Card */}
  <Card shadow='2xl' h='72' w={{ base: '100%', md: '60%' }} border='1px' zIndex='1'>
    <CardHeader textAlign='center' fontSize={{ base: '2xl', md: '4xl' }} mt={{ base: '4', md: '20' }}>
      {item.name}
    </CardHeader>
    <CardBody>
      <Text textAlign='center' mb='10'>
        {item.role}
      </Text>
    </CardBody>
  </Card>
</Flex>



    </GridItem>
  ))}
</Grid>
</Center>
  </div>
  )
}

export default PrevInterns