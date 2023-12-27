import React, { useEffect, useState } from 'react'
import { Heading, Box, Text, HStack, Button, VStack } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'


const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const [internships, setInternships] = useState([]);
  const [recInternships, setRecInternships] = useState([]);
  const { userId } = useSelector((state) => state.user);

  useEffect(() => {
    const viewRecommendedInternships = async () => {
      try {
        const accessToken = window.sessionStorage.getItem('accessToken');
        const { data } = await axios.post(
          'http://127.0.0.1:8000/intern/rec/',
          { user: userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setRecInternships(data);
        console.log('Rec intern\n', data);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function when the component mounts
    viewRecommendedInternships();
  }, [userId]); // Make sure to include dependencies to avoid infinite loops

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/intern/all-internship/')
      .then(res => {
        setInternships(res.data);

        console.log('Internships:', res.data);
      }).catch(err => {
        console.log(err)
      })
    // viewRecommendedInternships();
  }, [userId]);
  const { isAdmin } = useSelector((state) => { return state.user });
  const userProfile = useSelector((state) => { return state.user });
  const apply = async (internshipId) => {
    // e.preventDefault();
    if (!internshipId) {
      alert("Please enter internship id");
      return;
    }
    try {
      const accessToken = window.sessionStorage.getItem('accessToken');
      console.log(accessToken);
      const { data } = await axios.post(`http://127.0.0.1:8000/intern/apply/`,
        { user: userProfile.userId, internship_id: internshipId },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <div style={{ "maxWidth": "100vw" }}>
      <NavBar isAdmin={isAdmin} />
      <Heading margin="" size="2xl" ml="80px" paddingBottom="15px">

        <HStack>
          <Box><Text>Develop </Text></Box>
          <Box><Text color="#5FBEC0" paddingTop="0px">Skills</Text> </Box>
        </HStack>
        <Text>from the <u>best source</u>...</Text>

      </Heading>
      {/* <Button onClick={toggleLoginStatus} colorScheme="teal" ml="80px">
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button> */}
      <Heading ml="80px" paddingTop="25px" paddingBottom="50px">

        <Text fontSize="31px" fontWeight="bold"> Hey </Text>
        <Text fontSize="24px" w="750px">it seems that you are well equipped with React, Node and Express
          Here are some recommended internships for you. </Text>
      </Heading>
      <Box bg="#e8f3fd" w={"full"} >
        <Text fontSize='35px' fontWeight='bold' ml="80px" paddingTop="15px">Recommended Internships</Text>

        <VStack bg="#e8f3fd" w={"full"}>

          {recInternships.map((internship) => (
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
      </Box>



      <Text fontSize='25px' fontWeight='bold' ml="80px" paddingTop="15px"> And here are all the internships  </Text>
      <Text fontSize='25px' fontWeight='bold' ml="80px" paddingBottom="20px"> Enroll and chart your career journey! </Text>

      <Box bg="#e8f3fd" w={"full"} >
        <Text fontSize='35px' fontWeight='bold' ml="80px" paddingTop="15px">All Internships</Text>

        <VStack bg="#e8f3fd" w={"full"}>

          {internships.map((internship) => (
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
      </Box>
    </div>
  )
}

export default Home
