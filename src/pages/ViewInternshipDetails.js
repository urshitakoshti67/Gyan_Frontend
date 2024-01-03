import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
const ViewInternshipDetails = () => {
    const { isAdmin } = useSelector((state) => { return state.user });
    const [internships, setInternships] = useState([]);
    const getInternships = async (e) => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/super/view-internsips/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            setInternships(data);
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getInternships();
    }, []);
    return (
        <Box>
            <NavBar isAdmin={isAdmin} />
            {internships.map((internship) => (
                <Box
                    key={internship.id} // assuming each internship has a unique id
                    w="1060px"
                    ml='100px'
                    mt='30px'
                    pb={10}
                    bg="white"
                    borderRadius="10px"
                    boxShadow="2px -2px 10px black"
                >
                    <Text fontSize="30px" fontWeight="semibold" ml="25px" paddingTop="25px">
                        {internship.Internship_title}
                    </Text>
                    <Text fontSize="23px" fontWeight="semibold" ml="25px" paddingBottom="19px">
                        Gyan/Aim4U
                    </Text>
                    <hr />
                    <hr />
                    <hr />
                    <Text fontSize="18px" fontWeight="bold" ml="25px" paddingTop="25px" lineHeight="30px">
                        {/* Openings: {internship.openings} <br /> */}
                        Title:{internship.Internship_title}
                        <br />
                        Completion Certificate:{internship.completion_certificate ? "true" : "false"}
                        <br />
                        Duration: {internship.duration_weeks} <br />
                        Fees: {internship.fees}<br />
                        Type: {internship.internship_type} <br />
                        Key Skills: {internship.key_skills} <br />
                        LOR: {internship.lor ? "true" : "false"} <br />
                        Paper Writing: {internship.paper_writing ? "true" : "false"} <br />
                        Project Count: {internship.project_count} <br />
                    </Text>
                    <Link to={`/updateDetails/${internship.id}`}>
                        <Text fontSize="14px" cursor={'pointer'} fontWeight="semibold" ml="25px" color="#49BBBD" paddingTop="10px">
                            Edit details
                        </Text>
                    </Link>
                </Box>
            ))}
            <Footer />
        </Box>
    );
}

export default ViewInternshipDetails;