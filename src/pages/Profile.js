import React, { useRef } from 'react';
import {
  Box,
  Button,
  Text,
  Heading,
  Input,
  useToast
} from '@chakra-ui/react';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Profile = () => {
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [userProfile, setUserProfile] = useState({});
  const [resumeData, setResumeData] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [singleSkill, setSingleSkill] = useState('');
  const [edu, setEdu] = useState('');
  const toast = useToast();
  const { userId } = useSelector((state) => state.user);
  const { isAdmin } = useSelector((state) => state.user);

  const downloadResume = async () => {
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      console.log(accessToken);
      const formData = new FormData();
      formData.append('user', userId);
      const { data } = await axios.get('http://127.0.0.1:8000/user-resume/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      window.open(data.user_resume, '_blank');
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setResume(selectedFile);
  }

  const getUserProfile = async () => {
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };
      const { data } = await axios.get('http://localhost:8000/profile/', config);
      // console.log(data);
      setFName(data.Fname);
      setLName(data.Lname);
      setUserProfile(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getUserData = async (e) => {
    // e.preventDefault();
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      const { data } = await axios.post(`http://127.0.0.1:8000/user-data/`,
        { user: userId },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
      let inputString = data.skills;
      // Remove the single quotes around the array elements to make it a valid JSON string
      inputString = inputString.replace(/'/g, '"');
      // Parse the JSON string to get the array
      let myArray = JSON.parse(inputString);
      setSkills(myArray)
      inputString = data.education;
      // Remove the single quotes around the array elements to make it a valid JSON string
      inputString = inputString.replace(/'/g, '"');
      // Parse the JSON string to get the array
      myArray = JSON.parse(inputString);
      setEducation(myArray)
      setPhoneNumber(data.phone_number);
      setResumeData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserProfile();
    getUserData();
  }, [userId])
  const handleUpdate = async (e) => {
    try {
      if (Fname === '') {
        toast({
          title: 'First Name Required',
          description: 'First Name cannot be empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      if (Lname === '') {
        toast({
          title: 'Last Name Required',
          description: 'Last Name cannot be empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      if (phoneNumber === '') {
        toast({
          title: 'Phone Number Required',
          description: 'Phone Number cannot be empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      const accessToken = window.sessionStorage.getItem('accessToken');

      //user information update
      const { data } = await axios.put(`http://127.0.0.1:8000/user-data/`,
        { user: userId, phone_number: phoneNumber, skills: JSON.stringify(skills), education: JSON.stringify(education) },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

      toast({
        title: 'Information Updated Successfully',
        description: 'Information has been updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      console.log(data);
    } catch (error) {
      toast({
        title: 'Failed To Update',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }

  }

  const uploadResume = async () => {
    //resume upload
    if (resume) {
      const accessToken = window.sessionStorage.getItem('accessToken');
      console.log("Selected file:", resume);
      console.log("user", userId);
      const formData = new FormData();
      formData.append('user_resume', resume);
      formData.append('user', userId);
      try {
        const response = await axios.post(`http://127.0.0.1:8000/user-resume/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${accessToken}`
          }
        });

        toast({
          title: 'Resume Uploaded Successfully',
          description: 'Resume has been updated',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

      } catch (error) {
        toast({
          title: 'Resume Upload Failed',
          description: 'Something went wrong',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.error("File upload failed:", error);
      }
    }
    else {
      toast({
        title: 'Empty Selection',
        description: 'Please Select a File',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <Box>
      <NavBar isAdmin={isAdmin} />
      <Box bg={'#E4FFFF'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} w={['full', '50%']} m={'auto'} borderRadius={['0', '20']} pt={5} pb={10} mb={10}>
        <Heading>User Information</Heading>
        <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
          <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>First Name</Heading>
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
          value={Fname}
          onChange={(e) => setFName(e.target.value)}
        />
        <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
          <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Last Name</Heading>
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
          value={Lname}
          onChange={(e) => setLName(e.target.value)}
        />
        <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
          <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Phone Number</Heading>
        </Box>
        <Input
          placeholder="Phone Number"
          bgColor="white"
          h="10"
          mt={'1'}
          w={['80%', '60%']}
          fontSize="3l"
          size="sm"
          borderRadius="100"
          borderWidth="medium"
          borderColor="#49BBBD"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
          <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1} mb={1}>Skills</Heading>
          {skills.map((sk, index) => {
            return <Box key={index} display={'flex'}>
              <DeleteIcon onClick={() => {
                setSkills(skills.filter((_, i) => i !== index));
              }} />
              <Text>{sk}</Text>
            </Box>
          })}
        </Box>
        <Box display={'flex'} mt={1} w={['80%', '60%']}>
          <Input
            placeholder="Add a Skill"
            bgColor="white"
            h="10"
            fontSize="3l"
            size="sm"
            borderRadius="100"
            borderWidth="medium"
            borderColor="#49BBBD"
            value={singleSkill}
            onChange={(e) => setSingleSkill(e.target.value)}
          />
          <Button bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }} ml={2} onClick={() => {
            let temp = skills;
            temp.push(singleSkill);
            setSkills(temp);
            setSingleSkill('');
          }}>Add</Button>
        </Box>
        <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
          <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1} mb={1}>Education</Heading>
          {education.map((ed, index) => {
            return <Box key={index} display={'flex'}>
              <DeleteIcon onClick={() => {
                setEducation(education.filter((_, i) => i !== index));
              }} />
              <Text>{ed}</Text>
            </Box>
          })}
        </Box>
        <Box display={'flex'} mt={1} w={['80%', '60%']}>
          <Input
            placeholder="Add an Education"
            bgColor="white"
            h="10"
            fontSize="3l"
            size="sm"
            borderRadius="100"
            borderWidth="medium"
            borderColor="#49BBBD"
            value={edu}
            onChange={(e) => setEdu(e.target.value)}
          />
          <Button bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }} ml={2} onClick={() => {
            let temp = education;
            temp.push(edu);
            setEducation(temp);
            setEdu('')
          }}>Add</Button>
        </Box>
        <Button onClick={handleUpdate} mt={10} bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }}>
          Update
        </Button>
      </Box>
      <Box bg={'#E4FFFF'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} w={['full', '50%']} m={'auto'} borderRadius={['0', '20']} pt={5} pb={10} mb={10}>
        <Box display={'flex'} flexDirection={'column'} mt={'5'} w={['80%', '60%']}>
          <Heading fontSize={'1.2rem'} alignSelf={'flex-start'} ml={1}>Resume</Heading>
        </Box>
        <Input
          placeholder="Resume"
          bgColor="white"
          h="10"
          mt={'1'}
          w={['80%', '60%']}
          fontSize="md"
          size="sm"
          borderRadius="100"
          borderWidth="medium"
          borderColor="#49BBBD"
          type='file'
          accept='.pdf,.doc,.docx'
          onChange={handleFileChange}
        />
        <Button onClick={uploadResume} mt={10} bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }}>
          Upload Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
