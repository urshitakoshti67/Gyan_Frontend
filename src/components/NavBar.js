import React from 'react';
import { Flex, Box, Image, Spacer, Avatar, Menu, Button, MenuList, MenuItem, MenuButton, useToast } from '@chakra-ui/react';
import logo from '../images/GyanLogo.png'; // Make sure to provide the correct path
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useSelector } from 'react-redux';
import img10 from "../images/aim4u_logo.jpg"
const Navbar = ({ isAdmin }) => {
  const toast = useToast();
  const { userId } = useSelector((state) => { return state.user });
  const linkStyles = {
    p: ['2', '2', '2', '3'],
    mx: ['0', '0', '3', '3'],
    fontSize: ['xl', 'xl', '2xl', '2xl'],
    color: 'white',
    _hover: {
      color: 'white',
      textDecoration: 'underline',
    },
  };
  return (
    <Flex
      // py={['2', '2', '2', '4']}
      // px={['4', '4', '6', '8']}
      w="100%"
      direction={['column', 'column', 'row', 'row']}
      overflowX="auto"
      whiteSpace="nowrap"
      flexWrap="wrap"
      backgroundColor='#007BFF'
    >
      <Image src={img10} w={'7rem'} maxH={'6rem'} mr={5} />
      <Box mb={['4', '4', '0', '0']} textAlign={['center', 'center', 'left', 'left']}>
        <Flex align={['center', 'center', 'start', 'start']}>
          <Image src={logo} alt="logo" boxSize={['60px', '60px', '80px']} w={['35', '35', '45']} maxH={'5rem'} my="3" mx={['auto', 'auto', '0']} />
          {/* <Text as='b' fontSize={['xl', 'xl', '3xl']} color='white' ml={['2', '2', '3']}>Your Brand</Text> */}
        </Flex>
      </Box>

      <Spacer />

      <Flex
        align={['center', 'center', 'center', 'center']}
        direction={['column', 'column', 'row', 'row']}

      >
        <Box {...linkStyles}>
          <Link to="/" className="nav-link">Home</Link>
        </Box>
        <Box {...linkStyles}>
          <Link to="/internship" className="nav-link">Internships</Link>
        </Box>
        <Box {...linkStyles}>
          <Link to="/search" className="nav-link">Search</Link>
        </Box>
        {/* <Box {...linkStyles}>
          <Link to="/blog" className="nav-link">Blog</Link>
        </Box> */}

      </Flex>

      <Spacer />
      {/* {isAuthenticated && */}
      <Flex direction={['column', 'column', 'row', 'row']} align={['center', 'center', 'center', 'center']}>
        <Flex direction={'row'} p={['2', '2', '2', '3']} my={['3', '3', 'auto', 'auto']} fontSize={['xl', 'xl', '2xl', '2xl']} color='#007BFF'>
          <Avatar bg='teal.500' mb='2' ml='8' mr='3' />
          <Menu>
            <MenuButton as={Button} color={'white'} marginTop={'4%'} fontSize={['xl', 'xl', '2xl', '2xl']} backgroundColor={'transparent'} rightIcon={<ChevronDownIcon />} _hover={{ bg: 'transparent', color: 'black' }}>
              Profile
            </MenuButton>

            <MenuList color={'black'} >
              {!isAdmin && <Link to='/profile'><MenuItem>Update Profile</MenuItem></Link>}
              {isAdmin && <Link to='/admin'><MenuItem>Admin Interface</MenuItem></Link>}
              {!isAdmin && <Link to={'/applied'}><MenuItem>My Applications</MenuItem></Link>}
              <Link to={'/changePassword'}><MenuItem>Change Password</MenuItem></Link>
              {!isAdmin && <MenuItem onClick={async () => {
                try {
                  const accessToken = window.sessionStorage.getItem('accessToken');
                  const formData = new FormData();
                  formData.append('user', userId);
                  const { data } = await axios.post(`http://127.0.0.1:8000/view-user-resume/`,
                    formData,
                    {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${accessToken}`,
                      }
                    });
                  toast({
                    title: 'Resume Fetched Successfully',
                    description: 'Download will start soon',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  });
                  window.open(data.user_resume, '_blank', 'noopener noreferrer');
                } catch (error) {
                  toast({
                    title: 'Failed to get resume',
                    description: 'Something went wrong',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  });
                  console.log(error);
                }
              }}>
                My Resume
              </MenuItem>
              }
              <MenuItem
                onClick={() => {
                  window.sessionStorage.removeItem('accessToken');
                  window.location.href = '/login';
                }}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {/* } */}

    </Flex>
  );
};

export default Navbar;
