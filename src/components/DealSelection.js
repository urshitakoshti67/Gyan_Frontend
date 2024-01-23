import React from 'react';
import deal1 from '../images/deal1.png';
import deal2 from '../images/deal2.png';
import deal3 from '../images/deal3.png';
import { Grid, Text, Spacer, Box, Image, Heading, Flex } from '@chakra-ui/react';

const DealsSection = () => {
  const discount1 = 50;
  const discount2 = 10;
  const discount3 = 50;
  const deals = [
    { image: deal1, discount: discount1, index: 0 },
    { image: deal2, discount: discount2, index: 1 },
    { image: deal3, discount: discount3, index: 2 },
  ];

  return (
    <>
      
        <Flex mx='10' mt='10' mb='-20'>
        <Text fontWeight='semibold' fontSize={['2xl', '2xl', '3xl']} mt={['4', '4', '0']}>
          Top Education offers and deals are listed here
        </Text>
        <Spacer />
        <Text color='#9acd32' fontSize={['md', 'md', 'lg']}>
          see all
        </Text>
        </Flex>
      
      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
        mx={['4', '4', '32']}
        my={['10', '10', '20']}
        gap={['4', '4', '20']}
      >
        {deals.map(({ discount, image, index }) => (
          <Box key={index} position="relative" w={['100%', '100%', 'lg']} flex={['1', '1', '1']} my={['4', '4', '20']}>
            <Image src={image} boxSize={['100%', '100%', 'lg']} alt={`deal${index + 1}`} objectFit="cover" rounded="lg" />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              zIndex="1"
              width={['80%', '80%', '80%']}
            >
              <Box
                key={index}
                boxSize={['16', '16', '20']}
                mb={['16', '16', '32']}
                borderRadius='15px'
                bg='#9acd32'
                textAlign='center'
                fontSize={['2xl', '2xl', '4xl']}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {discount}%
              </Box>
              <Heading as="h2" size={['md', 'md', 'xl']} mb={['6', '6', '10']}>
                Lorem ipsum dolor
              </Heading>
              <Text fontSize={['sm', 'sm', 'md']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default DealsSection;
