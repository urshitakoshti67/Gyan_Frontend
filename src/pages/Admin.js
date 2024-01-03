import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Box, Button, Divider, Flex, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
const Admin = () => {
  const [CSV, setCSV] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setCSV(selectedFile);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (CSV) {
      try {
        const formData = new FormData();
        formData.append('file', CSV);
        const accessToken = window.sessionStorage.getItem('accessToken');
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/super/upload-csv/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${accessToken}`
          },
        });
        toast({
          title: 'File Upload Successful',
          description: 'CSV file has been uploaded',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'File Upload Failed.',
          description: 'Something went wrong',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.error('Error uploading file:', error);
      }
    } else {
      toast({
        title: 'Empty Selection',
        description: 'Please select a file',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  const { isAdmin } = useSelector((state) => { return state.user });
  return (
    <div>
      <NavBar isAdmin={isAdmin} />
      <Flex direction="column" align="center" justify="center">
        <Box justifyContent="center" px="10" py='6' border="1px" borderColor={'facebook.300'} borderRadius={'12'} bg='gray.300'>
          <Button mb='2' bg='facebook.500' color='white' _hover={{ color: 'black', bg: 'facebook.300' }} mr={5} onClick={() => { navigate('/applications') }}>View All Applications</Button>
          <Button mb='2' bg='facebook.500' color='white' _hover={{ color: 'black', bg: 'facebook.300' }} onClick={() => { navigate('/internshipDetails') }}>View Internship Details</Button>

          <Divider px='-10' mr='20' />
          <FormControl onSubmit={handleSubmit}>
            <FormLabel htmlFor="csvInput" color={'black'}>Upload CSV</FormLabel>
            <Input
              type="file"
              id="csvInput"
              accept=".csv" // Add file type restrictions if needed
              onChange={handleFileChange}
            />
            <Button bg='whatsapp.300' mt='4' onClick={handleSubmit}>Upload</Button>
          </FormControl>
        </Box>
      </Flex>
      <Footer />
    </div>
  )
}

export default Admin