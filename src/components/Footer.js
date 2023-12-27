import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../images/FooterLogo.png';
import { Link } from 'react-router-dom';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
const Footer = () => {
  return (
    <div>
    <Flex bgColor="#252641" color="white" justifyContent='center' h="130px"  mt='10'>
      <Box>
        <Flex align='center' mt="10">
          <Image src={logo} alt="logo" boxSize="80px" w="45" my="5" mx="10" />
          <Text as="b" fontSize="3xl" color="white"></Text>
          <Box
            h="100px" // Set the height to 100 pixels
            borderLeft="2px" // Set the border-left property to create a line
            borderColor="#626381" // Set the color of the line
            mx="0" // Set margin for spacing if needed
          />
          <Text px='10' fontSize='6xl' font='b'>Gyan</Text>
        </Flex>
      </Box>
      
    </Flex>
    <Flex bgColor="#252641" color="white" justifyContent="center" h='75px' pl='0'>
        <Text mt='20' mr='24' fontSize='3xl'>Explore</Text>
        <Text mt='20' mr='48' fontSize='3xl'>Contact</Text>
        <Text mt='20' mr='32' fontSize='3xl'>Follow</Text>
        <Text mt='20' mr='32' fontSize='3xl'>Legal</Text>
        
    </Flex>
    <Flex direction='row' bgColor="#252641" color="white" justifyContent="center" h='sm'>
        <Flex direction='column' mt='16'>
        <Link to="/"><Text mt='2' mr='14' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Home</Text></Link>
        <Link to="/about"><Text mt='2' mr='14' fontSize='xl' _hover={{ textDecoration: 'underline' }}>About</Text></Link>
        <Link to="/blogs"><Text mt='2' mr='14' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link>
        </Flex>
        <Flex direction='column' mt='16'>
        <Text mt='2' mr='20' fontSize='xl'>Sardar Patel Technology </Text>
        <Text mt='2' mr='20' fontSize='xl'>Business Incubator (SP-TBI), </Text>
        <Text mt='2' mr='20' fontSize='xl'>Munshi Nagar, Andheri (W) </Text>
        <Text mt='2' mr='20' fontSize='xl'>Mumbai,Maharashtra 400053</Text>
        
        <Text mt='10' mr='14' fontSize='xl'><PhoneIcon mr='2'/>+91 1234567890</Text>
        <Link to="support@aim4u.co.in"><Text mt='6' mr='14' fontSize='xl'  _hover={{ textDecoration: 'underline' }}><EmailIcon mr='2'  _hover={{ textDecoration: 'underline' }}/>support@aim4u.co.in</Text>
        </Link>
        </Flex>
        <Flex direction='column' mt='20'>
        <Text mt='2' mr='14' fontSize='xl'>Instagram</Text>
        <Text mt='2' mr='14' fontSize='xl'>LinkedIn</Text>
        
        <Text mt='2' mr='14' fontSize='xl'>FaceBook</Text>
        </Flex>
        <Flex direction='column' mt='20'>
        <Text mt='2' mr='14' fontSize='xl'>Terms & Conditions</Text>
        <Text mt='2' mr='14' fontSize='xl'>Privacy Policy</Text>
        </Flex>
        
    </Flex>
    {/* <Flex bgColor="#252641" color="white" justifyContent="center" h="sm">
        <Text mt='20' mr='15' fontSize='xl' alignItems='center'>© 2021 Class Technologies Inc. </Text>
    </Flex> */}
  </div>
  );
};

export default Footer;
