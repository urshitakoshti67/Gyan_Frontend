import { Button, Flex, Image, Input, Select } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import search from '../images/search.png';
import axios from 'axios';

const SearchBar = () => {
  const [userSkills, setUserSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [title, setTitle] = useState('Web Development');
  const [duration, setDuration] = useState('6 weeks');
  const [searchResults, setSearchResults] = useState(null); // Add this line

  const searchBySkills = useCallback(async () => {
    const accessToken = window.sessionStorage.getItem('accessToken');
    const { data } = await axios.get(`http://127.0.0.1:8000/intern/search/skills/?user_skills=${userSkills}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log('Search By Skills\n', data);
    setSearchResults(data); // Update the search results
  }, [userSkills, setSearchResults]);

  const searchByTitle = useCallback(async () => {
    const accessToken = window.sessionStorage.getItem('accessToken');
    const { data } = await axios.get(`http://127.0.0.1:8000/intern/search/title/?search=${title}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log('Search By Title\n', data);
    setSearchResults(data); // Update the search results
  }, [title, setSearchResults]);

  const searchByDuration = useCallback(async () => {
    const accessToken = window.sessionStorage.getItem('accessToken');
    const { data } = await axios.get(`http://127.0.0.1:8000/intern/search/duration/?duration=${duration}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log('Search By Duration\n', data);
    setSearchResults(data); // Update the search results
  }, [duration, setSearchResults]);

  useEffect(() => {
    searchBySkills();
    searchByTitle();
    searchByDuration();
  }, [searchBySkills, searchByTitle, searchByDuration]);


  return (
    <div>
      <Flex direction="column" height="96" my='2' position="relative">
        <Image src={search} alt='students' w='full' h='400px' position="absolute" zIndex="-1" />
        {/* Your first Flex container with the search input and button */}
        {/* <Flex
          width="70%"
          mt='auto'
          marginX='auto'
          position="relative"
          zIndex="1" 
          direction="row" // Set the direction to "row" for horizontal alignment
          justify="center" // Align the content horizontally to the center
        >
          <Input
            type="search"
            px="12"
            bgColor="white"
            h="14"
            fontSize="3xl"
            placeholder="Search your favorite Course"
            size="lg"
            borderRadius="10"
            borderWidth="medium"
            flexGrow="1"
          />
          <Button
            bgColor="#49BBBD"
            right="0.5"
            p='2'
            mt='1'
            mr='1'
            width='100px'  // Set the fixed width here
            height="90%"
            fontSize='2xl'
            position={['static', 'static', 'absolute']}
            color='white'
          >
            Search
          </Button>
        </Flex> */}

        {/* Your second Flex container with Select options */}
        <Flex width="40%" direction={['column', 'column', 'row']} position='relative' marginX='auto' my="auto" zIndex="1" >
          <Select placeholder='Title' fontSize='2xl' bgColor='white' h='16' borderWidth="medium" mb='10' mx='auto' minWidth="150px">
            <option value='option1'>Web Development</option>
            {/* <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option> */}
          </Select>
          <Select placeholder='Duration' fontSize='2xl' bgColor='white' h='16' borderWidth="medium" mb='10' mx={['auto', 'auto', '15']} minWidth="150px">
            <option value='option1'>6 weeks</option>
            {/* <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option> */}
          </Select>
          <Select placeholder='Skill Based' fontSize='2xl' bgColor='white' h='16' borderWidth="medium" mb='10' mx='auto' minWidth="150px">
            <option value='option1'>HTML</option>
            <option value='option2'>CSS</option>
            <option value='option3'>JavaScript</option>
          </Select>
        </Flex>
      </Flex>

      {/* Display the search results as needed */}
      {searchResults && (
        <div>
          {/* Render each result */}
          {searchResults.map(result => (
            <div key={result.id}>
              <p>{result.name}</p>
              {/* Add other properties as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
