import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../images/aim4u_logo.jpg';
import { Link } from 'react-router-dom';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <div>
      <Flex bgColor="#252641" color="white" h='75px' pl='0' justifyContent="space-between" alignItems="center">
        <Flex>
          <Text mt='20' mx='10' fontSize='3xl'>Explore</Text>
          <Text mt='20' mx='100' fontSize='3xl'>Contact</Text>
          <Text mt='20' mx='50' fontSize='3xl'>Follow</Text>
          <Text mt='20' mx='10' fontSize='3xl'>Legal</Text>
        </Flex>
        {/* Add an image in the right corner */}
        <Image src={logo} alt="Logo" w="400px" h="auto" position="absolute" bottom="100" left="1000"/>
      </Flex>
      <Flex direction='row' bgColor="#252641" color="white" h='sm'>
        <Flex direction='column' mt='16' mx='10'>
          <Link to="/"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Home</Text></Link>
          <Link to="/about"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>About</Text></Link>
          {/* <Link to="/blogs"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link> */}
        </Flex>
        <Flex direction='column' mt='16' mx='10'>
          <Text fontSize='xl'>Sardar Patel Technology </Text>
          <Text fontSize='xl'>Business Incubator (SP-TBI), </Text>
          <Text fontSize='xl'>Munshi Nagar, Andheri (W) </Text>
          <Text fontSize='xl'>Mumbai, Maharashtra 400053</Text>

          <Text mt='4' fontSize='xl'><PhoneIcon mr='2' />+91 8657424574</Text>
          <Link to="support@aim4u.co.in"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}><EmailIcon mr='2' _hover={{ textDecoration: 'underline' }} />support@aim4u.co.in</Text></Link>
        </Flex>
        <Flex direction='column' mt='16' mx='10'>
          <Text mt='4' fontSize='xl' cursor={'pointer'} onClick={() => window.open('https://www.instagram.com/dermalens_by_aim4u/', '_blank', 'noopener noreferrer')}>Instagram</Text>
          <Text mt='4' fontSize='xl' cursor={'pointer'} onClick={() => window.open('https://www.linkedin.com/company/aim4u-software-solution/', '_blank', 'noopener noreferrer')}>LinkedIn</Text>
          <Text mt='4' fontSize='xl' cursor={'pointer'} onClick={() => window.open('https://www.facebook.com/aim4usoftwaresolutions/', '_blank', 'noopener noreferrer')}>Facebook</Text>
        </Flex>
        <Flex direction='column' mt='16' mx='10'>
          <Text mt='4' fontSize='xl' cursor={'pointer'} onClick={() => window.open('https://www.aim4u.co.in/#/terms-and-conditions', '_blank', 'noopener noreferrer')}>Terms & Conditions</Text>
          <Text mt='4' fontSize='xl' cursor={'pointer'} onClick={() => window.open('https://www.aim4u.co.in/#/privacy-policy', '_blank', 'noopener noreferrer')}>Privacy Policy</Text>
        </Flex>
      </Flex>
       {/* Statement of "All Copyrights Reserved 2024" */}
       <Box bgColor="#252641" color="white" p="4" textAlign="center">
        <Text fontSize="xl">All Copyrights Reserved 2024</Text>
      </Box>
    </div>
  );
};

export default Footer;
