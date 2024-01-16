import React, { useEffect, useState } from 'react'
import { Heading, Box, Text, HStack, VStack } from '@chakra-ui/react'
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
  const [skills, setSkills] = useState([]);
  const { userId } = useSelector((state) => state.user);

  useEffect(() => {
    const viewRecommendedInternships = async () => {
      try {
        const accessToken = window.sessionStorage.getItem('accessToken');
        const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/intern/rec/`,
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
    const getUserData = async () => {
      try {
        const accessToken = window.sessionStorage.getItem('accessToken');
        const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/user-data/`,
          { user: userId },
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
        let inputString = data.skills;
        inputString = inputString.replace(/'/g, '"');
        let myArray = JSON.parse(inputString);
        setSkills(myArray)
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
    viewRecommendedInternships();
  }, [userId]);

  useEffect(() => {
    axios.get(`https://gyanbackend.aim4u.co.in/intern/all-internship/`)
      .then(res => {
        setInternships(res.data);
        console.log('Internships:', res.data);
      }).catch(err => {
        console.log(err)
      })

  }, [userId]);
  const { isAdmin } = useSelector((state) => { return state.user });
  const { isAuthenticated } = useSelector((state) => { return state.user });
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
      {isAuthenticated &&
        <Box>
          {skills.length > 0 && <Heading ml="80px" paddingTop="25px" paddingBottom="50px">
            <Text fontSize="31px" fontWeight="bold"> Hey, </Text>
            <Text fontSize="24px" display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
              <Text>it seems that you are well equipped with</Text>
              {skills.map((item) => {
                const x = " " + item + ",";
                return <Text whiteSpace={'pre-wrap'}>{x}</Text>
              })}
              <Text>and a lot more.</Text>
            </Text>
          </Heading>}
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
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>
      }

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
            </Box>
          ))}
        </VStack>
      </Box>
    </div>
  )
}

export default Home
