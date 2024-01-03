import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../images/FooterLogo.png';
import { Link } from 'react-router-dom';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
const Footer = () => {
  return (
    <div>
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
          {/* <Link to="/blogs"><Text mt='2' mr='14' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link> */}
        </Flex>
        <Flex direction='column' mt='16'>
          <Text mt='2' mr='20' fontSize='xl'>Sardar Patel Technology </Text>
          <Text mt='2' mr='20' fontSize='xl'>Business Incubator (SP-TBI), </Text>
          <Text mt='2' mr='20' fontSize='xl'>Munshi Nagar, Andheri (W) </Text>
          <Text mt='2' mr='20' fontSize='xl'>Mumbai,Maharashtra 400053</Text>

          <Text mt='10' mr='14' fontSize='xl'><PhoneIcon mr='2' />+91 8657424574</Text>
          <Link to="support@aim4u.co.in"><Text mt='6' mr='14' fontSize='xl' _hover={{ textDecoration: 'underline' }}><EmailIcon mr='2' _hover={{ textDecoration: 'underline' }} />support@aim4u.co.in</Text>
          </Link>
        </Flex>
        <Flex direction='column' mt='20'>
          <Text mt='2' mr='14' fontSize='xl' cursor={'pointer'} onClick={() => {
            window.open('https://www.instagram.com/dermalens_by_aim4u/', '_blank', 'noopener noreferrer');
          }}>Instagram</Text>
          <Text mt='2' mr='14' fontSize='xl' cursor={'pointer'} onClick={() => {
            window.open('https://www.linkedin.com/company/aim4u-software-solution/', '_blank', 'noopener noreferrer');
          }}>LinkedIn</Text>

          <Text mt='2' mr='14' fontSize='xl' cursor={'pointer'} onClick={() => {
            window.open('https://www.facebook.com/aim4usoftwaresolutions/', '_blank', 'noopener noreferrer');
          }}>FaceBook</Text>
        </Flex>
        <Flex direction='column' mt='20'>
          <Text mt='2' mr='14' fontSize='xl' cursor={'pointer'} onClick={() => {
            window.open('https://www.aim4u.co.in/#/privacy-policy', '_blank', 'noopener noreferrer');
          }}>Terms & Conditions</Text>
          <Text mt='2' mr='14' fontSize='xl' cursor={'pointer'} _focus={{}} onClick={() => {
            window.open('https://www.aim4u.co.in/#/privacy-policy', '_blank', 'noopener noreferrer');
          }}>Privacy Policy</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
