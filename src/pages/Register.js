// Register.js

import React, { useState } from 'react';
import { HStack, Box, Text, Button, Input, FormControl, useToast, Heading } from '@chakra-ui/react';
import image1 from '../images/course2.png';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './Login.css';
import { Spinner } from '@chakra-ui/react'

const Register = () => {

  const [email, setEmail] = useState('');
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();
  const toast = useToast();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(2000);
    try {
      const res = await axios.post(`https://gyanbackend.aim4u.co.in/reg/`, {
        Fname,
        Lname,
        email,
        password,
        password2,
      });
      toast({
        title: 'Registered Successful!',
        description: 'You have been registered',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setTimeout(2000);
      setLoading(false);
      navigate('/login');
    } catch (error) {
      const em = error.response.data.errors.email;
      const nfe = error.response.data.errors.non_field_errors;
      const msg = em ? em : nfe
      toast({
        title: 'Register failed.',
        description: msg,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Box position={'relative'}>

      {/* Loading */}
      {loading && <Box position={'absolute'} zIndex={1} w={'100vw'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgColor={'rgba(0,0,0,0.6)'}><Spinner size={'xl'} /></Box>}

      {isAuthenticated && <NavBar name={'Register'} />}
      <HStack spacing='80px' paddingTop='50' ml='100' position={'relative'} zIndex={0}>
        <Box w='700px' h='450px' paddingTop='60px'>
          <img
            src={image1}
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
          />
        </Box>

        <Box w='550px' padding={'20px'} backgroundColor={'#E4FFFF'} borderRadius={'25px'}>
          <Heading textAlign={'left'}><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#2F327D">Welcome to </Heading><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#00CBB8">Gyan@Aim4u</Heading></Heading>

          <HStack spacing='4px'>
            <Heading color={'#F48C06'} size={{ base: "base", md: "sm", lg: "sm" }}>Lets get you started</Heading>
          </HStack>

          <br />
          <form onSubmit={handleSubmit}>
            <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
              First Name
            </Text>
            <Input
              placeholder='Enter your First Name'
              pl='20px'
              borderRadius='25px'
              ml='20px'
              h='40px'
              w='430px'
              backgroundColor={'white'}
              borderColor='rgba(45, 240, 228, 0.4)'
              value={Fname}
              onChange={(e) => setFName(e.target.value)}
              required
            ></Input>
            <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
              Last Name
            </Text>
            <Input
              placeholder='Enter your Last Name'
              pl='20px'
              borderRadius='25px'
              ml='20px'
              h='40px'
              w='430px'
              backgroundColor={'white'}
              borderColor='rgba(45, 240, 228, 0.4)'
              value={Lname}
              onChange={(e) => setLName(e.target.value)}
              required
            ></Input>
            <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
              Email Address
            </Text>
            <Input
              placeholder='Enter your Email Address'
              pl='20px'
              borderRadius='25px'
              ml='20px'
              h='40px'
              w='430px'
              backgroundColor={'white'}
              borderColor='rgba(45, 240, 228, 0.4)'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
            <FormControl>
              <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold', display: 'inline-block' }}>
                Password
                <Text fontSize='12px' style={{ display: 'inline-block' }} ml='15px'>
                  (At least 8 letters and one uppercase character)
                </Text>
              </Text>
              <Input
                placeholder='Enter your Password'
                pl='20px'
                pr='20px'
                borderRadius='25px'
                type='password'
                backgroundColor={'white'}
                ml='20px'
                h='40px'
                w='430px'
                borderColor='rgba(45, 240, 228, 0.4)'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Input>
            </FormControl>
            <FormControl>
              <Text ml='30px' fontSize='14px' fontWeight='bold'>
                Confirm Password
              </Text>
              <Input
                placeholder='Confirm your Password'
                pl='20px'
                pr='20px'
                borderRadius='25px'
                type='password'
                ml='20px'
                h='40px'
                w='430px'
                backgroundColor={'white'}
                borderColor='rgba(45, 240, 228, 0.4)'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </FormControl>
            <br />
            <br />
            <Button
              marginLeft='25px'
              w='450px'
              h='40px'
              borderRadius='25px'
              bg='#007BFF'
              color='white'
              _hover={{ bg: 'rgba(45, 240, 228, 1)', cursor: 'pointer' }}
              _active={{ bg: 'rgba(45, 240, 228, 1)' }}
              fontSize='15px'
              border='none'
              type='submit'
            >
              Register
            </Button>
          </form>
          {/*<FormControl>
            <Text textAlign={'center'} mt='2%' fontSize='18px' fontWeight='bold'>
              or
            </Text>
          </FormControl>

           <button type="button" class="login-with-google-btn" >
            Sign in with Google
          </button>
          <Text textAlign={'center'} mt='2%' fontSize='14px' fontWeight='bold'>
            Already Have an Account? <Link to='/login'><span style={{ color: '#007BFF' }}>Login</span></Link>
          </Text> */}
        </Box>
      </HStack>
    </Box>
  );
};

export default Register;
