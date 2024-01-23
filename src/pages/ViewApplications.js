import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, VStack, Text } from '@chakra-ui/react';
const ViewApplication = () => {
    const [applications, setApplications] = useState([]);
    const getApplications = async (e) => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            const { data } = await axios.get(`https://gyanbackend.aim4u.co.in/super/view-appiled-interns/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            setApplications(data);
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    const { isAdmin } = useSelector((state) => { return state.user });
    useEffect(() => {
        getApplications();
    }, [])
    return (
        <Box>
            <NavBar isAdmin={isAdmin} />
            <Box bg="#e8f3fd" w={"full"} >
                <Text fontSize='35px' fontWeight='bold' ml="80px" paddingTop="15px">Applications</Text>
                <VStack bg="#e8f3fd" w={"full"}>
                    {applications.map((item) => (
                        <Box
                            key={item.internship.id} // assuming each internship has a unique id
                            w="1060px"
                            // h="340px"
                            ml='100px'
                            mt='30px'
                            pb='30px'
                            bg="white"
                            borderRadius="10px"
                            boxShadow="2px -2px 10px #000080"
                        >
                            <Text fontSize="30px" fontWeight="semibold" ml="25px" paddingTop="25px">
                                {item.internship.Internship_title}
                            </Text>
                            <Text fontSize="23px" fontWeight="semibold" ml="25px" paddingBottom="19px">
                                Gyan/Aim4U
                            </Text>
                            <hr />
                            <hr />
                            <hr />
                            <Text fontSize="14px" fontWeight="bold" ml="25px" paddingTop="25px" lineHeight="30px">
                                {/* Openings: {internship.openings} <br /> */}
                                Applicant: {item.user.Fname + " " + item.user.Lname} <br />
                                Email: {item.user.email} <br />
                            </Text>
                            <Text fontSize="14px" fontWeight="bold" ml="25px" paddingTop="25px" lineHeight="30px">
                                {/* Openings: {internship.openings} <br /> */}
                                Techstack: {item.internship.key_skills} <br />
                                Duration: {item.internship.duration_weeks} <br />
                                Fees: {item.internship.fees}<br />
                            </Text>
                        </Box>
                    ))}
                </VStack>
            </Box>
            <Footer />
        </Box>
    );
}

export default ViewApplication