import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Box, Button, Text, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';

const Applied = () => {
  const { isAdmin } = useSelector((state) => { return state.user });
  const { userId } = useSelector((state) => { return state.user });
  const [appliedInternships, setAppliedInternships] = useState([]);
  const user = useSelector((state) => { return state.user });
  const toast = useToast();
  const viewApplied = async (e) => {
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      const { data } = await axios.post(`http://127.0.0.1:8000/intern/apply-internships/`,
        { user: user.userId },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
      setAppliedInternships(data);
    } catch (error) {
      console.log("error:", error);
    }
  }
  useEffect(() => {
    viewApplied();
  }, [userId])

  return (
    <div>
      <Navbar isAdmin={isAdmin} />
      <Box h='fit-content' pb='4' bg="#e8f3fd" w={"full"} >
        <Text fontSize='35px' fontWeight='bold' ml="80px" paddingTop="15px">Applied Internships</Text>
        <VStack bg="#e8f3fd" w={"full"}>

          {appliedInternships &&
            appliedInternships.map((item, index) => (
              <Box
                key={item.id}// assuming each internship has a unique id
                w="1060px"
                h="290px"
                ml='100px'
                mt='30px'
                bg="white"
                borderRadius="10px"
                boxShadow="2px -2px 10px black"
              >
                <Text fontSize="30px" fontWeight="semibold" ml="25px" paddingTop="25px">
                  {index + 1}.{item.Internship_title}
                </Text>
                <Text fontSize="23px" fontWeight="semibold" ml="25px" paddingBottom="19px">
                  Gyan/Aim4U
                </Text>
                <hr />
                <hr />
                <hr />
                <Text fontSize="14px" fontWeight="bold" ml="25px" paddingTop="25px" lineHeight="30px">
                  {/* Openings: {internship.openings} <br /> */}
                  Techstack: {index + 1}.{item.key_skills} <br />
                  Duration: {index + 1}.{item.duration_weeks} <br />
                  Fees: {index + 1}.{item.fees}<br />
                </Text>
                <Link to={`/details/${item.id}`}>
                  <Text fontSize="14px" cursor={'pointer'} fontWeight="semibold" ml="25px" color="#49BBBD" paddingTop="10px">
                    View details .
                  </Text>
                </Link>
                <Button
                  bg="#49BBBD"
                  w="200px"
                  h="35px"
                  ml="40px"
                  marginTop="8px"
                  borderRadius="11px"
                  _hover={{ bg: '#3a9597' }}
                  onClick={async () => {
                    try {
                      const accessToken = window.sessionStorage.getItem('accessToken');
                      const { data } = await axios.post('http://127.0.0.1:8000/intern/delete-applied-internship/',
                        { user: userId, internship_id: item.id },
                        {
                          headers: {
                            Authorization: `Bearer ${accessToken}`
                          }
                        });
                      toast({
                        title: 'Deletion Successful',
                        description: 'Your application has been removed',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                      });
                      setAppliedInternships(appliedInternships.filter(x => x.id !== item.id));
                      console.log(data)
                    } catch (error) {
                      toast({
                        title: 'Failed to Delete',
                        description: 'Something went wrong',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                      });
                      console.log(error);
                    }
                  }}
                >
                  <Text fontSize="20px" fontWeight="semibold" color="white">
                    Delete
                  </Text>
                </Button>
              </Box>
            ))}
        </VStack>
      </Box>
      <Footer />
    </div>
  )
}

export default Applied