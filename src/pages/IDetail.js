import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Heading, Box, Text, HStack, UnorderedList, ListItem, Button, Image, Spacer, Flex, OrderedList, useToast } from '@chakra-ui/react';
import course from '../images/deal1.png';
import bars from '../images/bars.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const IDetail = () => {
  const { id } = useParams();
  const [internshipDetails, setInternshipDetails] = useState(null);
  const { isAdmin } = useSelector((state) => { return state.user });
  const { userId } = useSelector((state) => { return state.user });
  const toast = useToast();

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
        { user: userId, internship_id: id },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        });
      toast({
        title: 'Applied Successfully',
        description: 'You have applied for the internship',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      console.log(data);
    } catch (error) {
      toast({
        title: 'Failed to Apply',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchInternshipDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/intern/all-internship/');
        const allInternships = response.data;

        // Find the internship with the matching ID
        const selectedInternship = allInternships.find(internship => internship.id === parseInt(id, 10));
        // Set the internship details state
        setInternshipDetails(selectedInternship);
      } catch (error) {
        console.error('Error fetching internship details:', error);
      }
    };

    fetchInternshipDetails();
  }, [id]);

  if (!internshipDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar
        isAdmin={isAdmin} />
      <Heading margin="40px" fontSize='6xl' ml="100px" paddingBottom="15px">
        Internship details
      </Heading>
      <Flex bg="#e8f3fd">
        <Box h="480px" w={"full"} >

          <Text fontSize='50px' fontWeight='semibold' ml="110px" paddingTop="50px" lineHeight="45px">{internshipDetails.Internship_title}</Text>
          <Text fontSize='35px' fontWeight='semibold' ml="100px" paddingTop="0px">Become an expert and enhance your resume</Text>
          <Text fontSize='24px' fontWeight='medium' ml="100px" paddingTop="45px" lineHeight="55px">
            Duration: {internshipDetails.duration_weeks}<br />
            <b>Skills to learn:</b>{internshipDetails.key_skills}<br />
          </Text>
        </Box>
        <Spacer />
        <Image src={course} alt='deal1' boxSize='sm' w='4xl' my='auto' zIndex='base' mr='10' />
      </Flex>
      <HStack spacing='60px' paddingTop="80px" paddingLeft="50px" paddingRight="50px" >

        <Box paddingLeft="10px" w='1071px' bg="#e8f3fd" borderRadius="20px">
          <Text fontSize='4xl' fontWeight='bold' ml="40px" paddingTop="35px">About the project:</Text>

          {/* <UnorderedList fontSize='24px' fontWeight='bold'  ml="90px" paddingTop="33px" lineHeight="38px">
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList> */}

          {/* <Text fontSize='24px' fontWeight='bold'  ml="40px" paddingTop="105px">Starting Date: 25th<br/>
       December,2023 <br/>
       Date Of Completion: 15 February, 2023
       </Text> */}

          <Text fontSize='24px' fontWeight='bold' ml="40px" paddingTop="35px">
            The Internship Type is {internshipDetails.internship_type} and includes:<br /></Text>
          <OrderedList my='10'>
            {internshipDetails.project_count > 0 && (<ListItem fontSize='24px' fontWeight='medium' ml="40px" > {internshipDetails.project_count} Project/s</ListItem>)}
            {internshipDetails.lor === true && (<ListItem fontSize='24px' fontWeight='medium' ml="40px" >LOR</ListItem>)}
            {internshipDetails.completion_certificate === true && (<ListItem fontSize='24px' fontWeight='medium' ml="40px" >Certificate of Completion</ListItem>)}
            {internshipDetails.paper_writing === true && (<ListItem fontSize='24px' fontWeight='medium' ml="40px" >Publication/Paper Writing</ListItem>)}
            <ListItem fontSize='24px' fontWeight='medium' ml="40px" >Duration:{internshipDetails.duration_weeks}</ListItem>
            <ListItem fontSize='24px' fontWeight='medium' ml="40px" >Fees:{internshipDetails.fees}</ListItem>
            <ListItem fontSize='24px' fontWeight='medium' ml="40px" >Expert Mentors</ListItem>
          </OrderedList>
        </Box>


        <Box w='549px' bg="#e8f3fd" borderRadius="20px">
          <HStack spacing='68px' ml="30px" paddingTop="9px">

            <Box w='185px' h='50px' >

              <UnorderedList fontSize='18px' fontWeight='semibold' ml="30px" paddingTop="6px" lineHeight="32px">
                <ListItem>Expert Mentorship</ListItem>
                {internshipDetails.paper_writing === true && (<ListItem>Publication/Paper Writing</ListItem>)}
              </UnorderedList>

            </Box>


            <Box w='240px' h='50px' >

              <UnorderedList fontSize='18px' fontWeight='semibold' ml="30px" paddingTop="6px" lineHeight="32px">
                <ListItem><b>Number of Projects:</b>{internshipDetails.project_count}</ListItem>
                {internshipDetails.completion_certificate === true && (<ListItem><b>You get a Completion Certificate</b></ListItem>)}

              </UnorderedList>

            </Box>

          </HStack>
          <Box mt='16'>
            <Text fontSize='20px' fontWeight='semibold' ml="50px" paddingTop="35px">Duration: {internshipDetails.duration_weeks}</Text>
            <Text fontSize='20px' fontWeight='semibold' ml="50px" paddingTop="15px">Internship Type: {internshipDetails.internship_type}</Text>
          </Box>
          <Button bg="#d8e8bf" w='549px' h='80px' marginTop="50px" borderRadius="20px" _hover={{ bg: "#97A285" }}
            onClick={apply}>
            <Text fontSize='40px' fontWeight='semibold'>
              Apply Now
            </Text>
          </Button>
        </Box>

      </HStack>
      <Box mt="70px" ml="50px" w="820px" h="1160px" bg="#e8f3fd" borderRadius="20px">
        <Text fontSize="30px" fontWeight="bold" ml="50px" paddingTop="50px">Why is this internship the right choice for you?</Text>

        <HStack spacing='94px' ml="50px" paddingTop="50px">
          <Box w='270px' h='450px' bg='#DFFFF2' borderRadius="20px">
            <Text fontSize="30px" fontWeight="bold" width="200px" ml="40px" paddingTop="20px" lineHeight="40px"> Cover letter, and resume, interview preparation and corporate referencing.</Text>
            <Image src={bars} alt='bars' mt='12' />
          </Box>
          <Box w='270px' h='450px' bg='#DFFFF2' borderRadius="20px">
            <Text fontSize="30px" fontWeight="bold" width="200px" ml="40px" paddingTop="20px" lineHeight="40px"> Elevate your career with real-world insights and industry connections.</Text>
            <Image src={bars} alt='bars' mt='12' />
          </Box>

        </HStack>

        <HStack spacing='94px' ml="130px" paddingTop="50px">
          <Box w='270px' h='450px' bg='#DFFFF2' borderRadius="20px">
            <Text fontSize="30px" fontWeight="bold" width="200px" ml="40px" paddingTop="20px" lineHeight="40px"> Unlock coding essentials in 4 weeks – your gateway to the future of tech</Text>
            <Image src={bars} alt='bars' mt='12' />
          </Box>
          <Box w='270px' h='450px' bg='#DFFFF2' borderRadius="20px">
            <Text fontSize="30px" fontWeight="bold" width="200px" ml="40px" paddingTop="20px" lineHeight="40px">  Hands-on experience, skill development, and career exploration.</Text>
            <Image src={bars} alt='bars' mt='12' />
          </Box>

        </HStack>
      </Box>
      <Footer />
    </div>
  );
};

export default IDetail;








//      </div>
//   )
// }

// export default IDetail
