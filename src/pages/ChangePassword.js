import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Box, Button, Heading, Input, useToast } from '@chakra-ui/react';
const ChangePassword = () => {
    const { isAdmin } = useSelector((state) => { return state.user });
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const toast = useToast();
    const changePassword = async () => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            if (password === password2) {
                const { data } = await axios.post('http://127.0.0.1:8000/changepassword/',
                    { password, password2 },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    });
                toast({
                    title: 'Password Changed Successfully',
                    description: 'password has been changed',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
            else {
                toast({
                    title: 'Confirm password not same',
                    description: 'New password and confirm password should be same',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        }
        catch (error) {
            toast({
                title: 'Failed to change password',
                description: 'Something went wrong',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            console.log(error);
        }
    }
    return (
        <Box>
            <NavBar isAdmin={isAdmin} />
            <Box bg={'#E4FFFF'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} w={['full', '50%']} m={'auto'} borderRadius={['0', '20']} pt={5} pb={10} mb={10}>
                <Heading>Change Password</Heading>
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>New Password</Heading>
                </Box>
                <Input
                    placeholder="First Name"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Confirm New Password</Heading>
                </Box>
                <Input
                    placeholder="Last Name"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    type='password'
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <Button mt={10} bg={'#007BFF'} color={'white'} _hover={{bg:'#49BBBD'}} onClick={changePassword}>
                    Update
                </Button>
            </Box>
            <Footer />
        </Box>
    );
}

export default ChangePassword;