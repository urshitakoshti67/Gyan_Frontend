import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, VStack, Text, Tab, TabList, TabPanel, TabPanels, Tabs, Heading, Select, Button, useToast } from '@chakra-ui/react';

const Search = () => {
  const [Fname, setFName] = useState('');
  const [searchOption, setSearchOption] = useState('title');//title,duration,skills
  const [selectedOption, setSelectedOption] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const { isAdmin } = useSelector((state) => { return state.user });
  const toast = useToast();

  const searchByTitle = async () => {
    if (!selectedOption) {
      toast({
        title: 'Select a Title',
        description: 'Empty Selection',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const { data } = await axios.get(`http://127.0.0.1:8000/intern/search/title/?search=${selectedOption}`);
    setSearchResult(data);
    console.log(data);
  }
  const searchByDuration = async () => {
    if (!selectedOption) {
      toast({
        title: 'Select a Duration',
        description: 'Empty Selection',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const { data } = await axios.get(`http://127.0.0.1:8000/intern/search/duration/?duration=${selectedOption}`);
    setSearchResult(data);
    console.log(data);
  }
  const searchBySkill = async () => {
    if (!selectedOption) {
      toast({
        title: 'Select a Skill',
        description: 'Empty Selection',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const arr = [selectedOption];
    const { data } = await axios.get(`http://127.0.0.1:8000/intern/search/skills/?user_skills=${arr}`);
    setSearchResult(data);
    console.log(data);
  }
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const accessToken = window.sessionStorage.getItem('accessToken');
        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        };
        const { data } = await axios.get('http://localhost:8000/profile/', config);
        // Assuming the API response key is 'Fname'
        setFName(data.Fname.charAt(0).toUpperCase() + data.Fname.slice(1));
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
  }, []); // Empty dependency array to ensure it runs only once after the component mounts
  const [selectedTab, setSelectedTab] = useState('title');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box w={'full'}>
      <NavBar isAdmin={isAdmin} />
      <Box w={'full'} display={'flex'} justifyContent={'center'} mb={5} mt={'2%'}>
        <Heading>Search Options</Heading>
      </Box>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab
            onClick={() => handleTabChange('title')}
            _selected={{ bg: '#007BFF', color: 'white' }}
            _focus={{ outline: 'none' }}
          >
            Title
          </Tab>
          <Tab
            onClick={() => handleTabChange('duration')}
            _selected={{ bg: '#007BFF', color: 'white' }}
            _focus={{ outline: 'none' }}
          >
            Duration
          </Tab>
          <Tab
            onClick={() => handleTabChange('skill')}
            _selected={{ bg: '#007BFF', color: 'white' }}
            _focus={{ outline: 'none' }}
          >
            Skill
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel w={'full'} display={'flex'} justifyContent={'center'}>
            <Select
              placeholder="Select a Title"
              value={selectedOption}
              onChange={handleSelectChange}
              width="200px"
            >
              <option>Web Development</option>
              <option>Machine Learning</option>
              <option>Flutter Development</option>
              <option>Android Development</option>
            </Select>
            <Button onClick={searchByTitle} ml={5} bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }}>Search</Button>
          </TabPanel>
          <TabPanel w={'full'} display={'flex'} justifyContent={'center'}>
            <Select
              placeholder="Select a Duration"
              value={selectedOption}
              onChange={handleSelectChange}
              width="200px"
            >
              <option>6 weeks</option>
              <option>8 weeks</option>
              <option>10 weeks</option>
              <option>12 weeks</option>
            </Select>
            <Button onClick={searchByDuration} ml={5} bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }}>Search</Button>
          </TabPanel>
          <TabPanel w={'full'} display={'flex'} justifyContent={'center'}>
            <Select
              placeholder="Select a Skill"
              value={selectedOption}
              onChange={handleSelectChange}
              width="200px"
            >
              <option>HTML</option>
              <option>CSS</option>
              <option>Javascript</option>
              <option>React</option>
              <option>Next</option>
              <option>Node</option>
              <option>Python</option>
              <option>Django</option>
              <option>Flutter</option>
              <option>Android Studio</option>
            </Select>
            <Button onClick={searchBySkill} ml={5} bg={'#007BFF'} color={'white'} _hover={{ bg: '#49BBBD' }}>Search</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {searchResult.length > 0 && <Box bg="#e8f3fd" w={"full"} >
        <Text fontSize='35px' fontWeight='bold' ml="80px" paddingTop="15px">Search Results</Text>
        <VStack bg="#e8f3fd" w={"full"}>
          {searchResult.map((internship) => (
            <Box
              key={internship.id} // assuming each internship has a unique id
              w="1060px"
              h="340px"
              ml='100px'
              mt='30px'
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
              <Text fontSize="14px" fontWeight="bold" ml="25px" paddingTop="25px" lineHeight="30px">
                {/* Openings: {internship.openings} <br /> */}
                Techstack: {internship.key_skills} <br />
                Duration: {internship.duration_weeks} <br />
                Fees: {internship.fees}<br />
              </Text>
              <Link to={`/details/${internship.id}`}>
                <Text fontSize="14px" cursor={'pointer'} fontWeight="semibold" ml="25px" color="#49BBBD" paddingTop="10px">
                  View details
                </Text>
              </Link>
              {/* <Button
                bg="#49BBBD"
                w="200px"
                h="35px"
                ml="40px"
                marginTop="8px"
                borderRadius="11px"
                _hover={{ bg: '#3a9597' }}
                onClick={() => apply(internship.id)} // Pass the internship.id to the apply function
              >
                <Text fontSize="20px" fontWeight="semibold" color="white">
                  Apply Now
                </Text>
              </Button> */}
            </Box>
          ))}
        </VStack>
      </Box>}
      <Footer />
    </Box >
  );
};

export default Search;
