import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Heading, Input, Button, useToast } from '@chakra-ui/react';
const UpdateInternshipDetails = () => {
    const { isAdmin } = useSelector((state) => { return state.user });
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [completionCertificate, setCompletionCertificate] = useState(false);
    const [duration, setDuration] = useState(0);
    const [fees, setFees] = useState(0);
    const [type, setType] = useState('');
    const [keySkills, setKeySkills] = useState('');
    const [LOR, setLOR] = useState(false);
    const [paperWriting, setPaperWriting] = useState(false);
    const [projectCount, setProjectCount] = useState(0);
    const toast = useToast();
    const getInternships = async (e) => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            let internship;
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/super/view-internsips/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            data.forEach((item) => {
                if (item.id == id) {
                    internship = item;
                }
            });
            setTitle(internship.Internship_title);
            setCompletionCertificate(internship.completion_certificate);
            setDuration(internship.duration_weeks);
            setFees(internship.fees);
            setType(internship.internship_type);
            setKeySkills(internship.key_skills);
            setLOR(internship.lor);
            setPaperWriting(internship.paper_writing);
            setProjectCount(internship.project_count);
        }
        catch (error) {
            console.log(error);
        }
    }
    const updateDetails = async () => {
        try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}/super/view-internsips/?uid=${id}`,
                {
                    id: id,
                    Internship_title: title,
                    internship_type: type,
                    key_skills: keySkills,
                    duration_weeks: duration,
                    project_count: projectCount,
                    paper_writing: paperWriting,
                    lor: LOR,
                    completion_certificate: completionCertificate,
                    fees: fees
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            console.log(data);
            toast({
                title: 'Update Successful',
                description: 'Details have been updated',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Failed to Update Details',
                description: 'Something went wrong',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            console.log(error);
        }
    }
    useEffect(() => {
        console.log(id);
        getInternships();
    }, [])
    return (
        <Box>
            <NavBar isAdmin={isAdmin} />
            <Box bg={'#E4FFFF'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} w={['100%', '100%', '50%']} m={'auto'} borderRadius={['0', '20']} pt={5} pb={10} mb={10}>
                <Heading>Update Details</Heading>
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['100%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Title</Heading>
                </Box>
                <Input
                    placeholder="Title"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Completion Certificate</Heading>
                </Box>
                <Box w={['80%', '60%']} display={'flex'} alignItems={'center'}>
                    <Input
                        placeholder="Completion Certificate"
                        bgColor="white"
                        h="10"
                        mt={'1'}
                        fontSize="3l"
                        size="sm"
                        borderRadius="100"
                        borderWidth="medium"
                        borderColor="#49BBBD"
                        value={completionCertificate}
                        readOnly
                    />
                    <Button ml={2} onClick={() => {
                        if (completionCertificate) {
                            setCompletionCertificate(false);
                        }
                        else {
                            setCompletionCertificate(true);
                        }
                    }}>Toggle</Button>
                </Box>
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Duration (in weeks)</Heading>
                </Box>
                <Input
                    placeholder="Duration"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Fees</Heading>
                </Box>
                <Input
                    placeholder="Fees"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    value={fees}
                    onChange={(e) => setFees(e.target.value)}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Type</Heading>
                </Box>
                <Input
                    placeholder="Type"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Key Skills</Heading>
                </Box>
                <Input
                    placeholder="Key Skills"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    value={keySkills}
                    onChange={(e) => setKeySkills(e.target.value)}
                />
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>LOR</Heading>
                </Box>
                <Box w={['80%', '60%']} display={'flex'} alignItems={'center'}>
                    <Input
                        placeholder="LOR"
                        bgColor="white"
                        h="10"
                        mt={'1'}
                        fontSize="3l"
                        size="sm"
                        borderRadius="100"
                        borderWidth="medium"
                        borderColor="#49BBBD"
                        value={LOR}
                        readOnly
                    />
                    <Button ml={2} onClick={() => {
                        if (LOR) {
                            setLOR(false);
                        }
                        else {
                            setLOR(true);
                        }
                    }}>Toggle</Button>
                </Box>
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Paper Writing</Heading>
                </Box>
                <Box w={['80%', '60%']} display={'flex'} alignItems={'center'}>
                    <Input
                        placeholder="Paper Writing"
                        bgColor="white"
                        h="10"
                        mt={'1'}
                        fontSize="3l"
                        size="sm"
                        borderRadius="100"
                        borderWidth="medium"
                        borderColor="#49BBBD"
                        value={paperWriting}
                        readOnly
                    />
                    <Button ml={2} onClick={() => {
                        if (paperWriting) {
                            setPaperWriting(false);
                        }
                        else {
                            setPaperWriting(true);
                        }
                    }}>Toggle</Button>
                </Box>
                <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
                    <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Project Count</Heading>
                </Box>
                <Input
                    placeholder="Project Count"
                    bgColor="white"
                    h="10"
                    mt={'1'}
                    w={['80%', '60%']}
                    fontSize="3l"
                    size="sm"
                    borderRadius="100"
                    borderWidth="medium"
                    borderColor="#49BBBD"
                    type='number'
                    value={projectCount}
                    onChange={(e) => setProjectCount(e.target.value)}
                />
                <Button mt={10} bg={'#ffffff'} onClick={updateDetails}>
                    Update
                </Button>
            </Box>
            <Footer />
        </Box>
    );
}

export default UpdateInternshipDetails