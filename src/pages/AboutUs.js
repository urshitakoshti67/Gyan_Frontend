import React from 'react';
import NavBar from '../components/NavBar';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import sir from '../images/sir.png';
import ambassidor from '../images/ambassidor.png';
import PrevInterns from '../components/PrevInterns';
import Footer from '../components/Footer';
import about from '../images/about.png';
import { useSelector } from 'react-redux';
const AboutUs = () => {
  const { isAdmin } = useSelector((state) => { return state.user });
  return (
    <div>
      <NavBar isAdmin={isAdmin} />
      <Flex
        mt={['2', '2', '4']}
        overflowX={'auto'}
        direction={['column', 'column', 'row']}
        alignItems={'center'}
      >
        <Text
          mx="auto"
          maxW={['100%', '100%', '33%']}
          width={['100%', '100%', '33%']}
          as="u"
          fontSize={['xl', '2xl', '2xl']}
          // color="#000080"
          textAlign={['center', 'center', 'left']}
          mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
          textDecoration={'none'}
        >
          <Text mt='10' fontSize="3xl" fontWeight={'semibold'} color="#000080">
            About Us
          </Text>
          We believe in fostering the next generation of talent. Our internship program is more than just an opportunity - it's a gateway to hands-on experience, mentorship, and a vibrant community that values innovation, growth, and diversity.
        </Text>
        <Image
          src={about}
          alt="picture"
          mx="auto"
          minW={['100%', '100%', '400px']} // Set minimum width for small screens
          maxW={['100%', '100%', '55%']} // Set maximum width for larger screens
          mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
          order={['2', '2', '1']} // Change order for small and medium screens
        />
      </Flex>

      <div>
        <Box bgColor="#000080" mt="10">
          <Heading p="12" fontSize="3xl" color="white">
            Our Master Trainer
          </Heading>
          <Center>
            <Image
              src={sir}
              alt=""
              bgColor="white"
              borderRadius="16"
              p="28"
              mb="10"
              mx='auto'
              w='70%'
            />
          </Center>
        </Box>
        <Box bgColor="#000080" mt="10">
          <Heading p="12" fontSize="3xl" color="white">
            Our Ambassador
          </Heading>
          <Center>
            <Image
              src={ambassidor}
              alt=""
              bgColor="white"
              borderRadius="16"
              p="28"
              mb="10"
              mx='auto'
              w='70%'
            />
          </Center>
        </Box>
        <Box bgColor="#000080" mt="10">
          <Heading p="12" fontSize="3xl" color="white">
            Our Previous Interns
          </Heading>
          <PrevInterns />
          <Center>
            
          </Center>
        </Box>
      </div>
      
      <Footer />
    </div>
    
  );
};

export default AboutUs;

// import React from 'react';
// import NavBar from '../components/NavBar';
// import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
// import sir from '../images/sir.png';
// import ambassidor from '../images/ambassidor.png';
// import Neil from '../images/InternImages/Neil.png';
// import Tejas from '../images/InternImages/Tejas.png';
// import tanvi from '../images/InternImages/tanvi.png';
// import Sarah from '../images/InternImages/Sarah.png';
// import Aditya from '../images/InternImages/Aditya.png';
// import Sumit from '../images/InternImages/Sumit.png';
// import Rithvika from '../images/InternImages/Rithvika.png';
// import parth from '../images/InternImages/parth.png';

// // import Mahesh from '../InternImages/Mahesh.png';
// // import palak from '../InternImages/palak.png';
// // import SarahSonje from '../InternImages/Sarah Sonje.png';

// // import Smruti from '../InternImages/Smruti.png';
// import Urvi from '../images/InternImages/Urvi.png';
// import Aumkar from '../images/InternImages/Aumkar.png';
// import Tanisha from '../images/InternImages/Tanisha.png';
// import Anjali from '../images/InternImages/Anjali.png';
// // import PrevInterns from '../components/PrevInterns';
// import Footer from '../components/Footer';
// import about from '../images/about.png';
// import { useSelector } from 'react-redux';
// const AboutUs = () => {
//   const { isAdmin } = useSelector((state) => { return state.user });
//   return (
//     <div>
//       <NavBar isAdmin={isAdmin} />
//       <Flex
//         mt={['2', '2', '4']}
//         overflowX={'auto'}
//         direction={['column', 'column', 'row']}
//         alignItems={'center'}
//       >
//         <Text
//           mx="auto"
//           maxW={['100%', '100%', '33%']}
//           width={['100%', '100%', '33%']}
//           as="u"
//           fontSize={['xl', '2xl', '2xl']}
//           // color="#000080"
//           textAlign={['center', 'center', 'left']}
//           mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
//           textDecoration={'none'}
//         >
//           <Text mt='10' fontSize="3xl" fontWeight={'semibold'} color="#000080">
//             About Us
//           </Text>
//           We believe in fostering the next generation of talent. Our internship program is more than just an opportunity - it's a gateway to hands-on experience, mentorship, and a vibrant community that values innovation, growth, and diversity.
//         </Text>
//         <Image
//           src={about}
//           alt="picture"
//           mx="auto"
//           minW={['100%', '100%', '400px']} // Set minimum width for small screens
//           maxW={['100%', '100%', '55%']} // Set maximum width for larger screens
//           mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
//           order={['2', '2', '1']} // Change order for small and medium screens
//         />
//       </Flex>

//       <div>
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Master Trainer
//           </Heading>
//           <Center>
//             <Image
//               src={sir}
//               alt=""
//               bgColor="white"
//               borderRadius="16"
//               p="28"
//               mb="10"
//               mx='auto'
//               w='70%'
//             />
//           </Center>
//         </Box>
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Ambassador
//           </Heading>
//           <Center>
//             <Image
//               src={ambassidor}
//               alt=""
//               bgColor="white"
//               borderRadius="16"
//               p="28"
//               mb="10"
//               mx='auto'
//               w='70%'
//             />
//           </Center>
//         </Box>



//         {/* previous Interns */}
        
//         <Box bgColor="#000080" mt="10">
//           <Heading p="12" fontSize="3xl" color="white">
//             Our Interns
//           </Heading>
//           <Center>
//             {/* <Image
//               // src={ambassidor}
//               alt=""
//               bgColor="white"
//               borderRadius="16"
//               p="28"
//               mb="10"
//               mx='auto'
//               w='70%'
//             /> */}
//             <Box bgColor="#000080" mt="1">
//       {/* <Heading p="12" fontSize="3xl" color="white">
//         Our Interns
//       </Heading> */}
// <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
//   <Center>
//     <Box display="flex" justifyContent="space-between" w="80%">
//           {/* First Image */}
//           <Image
//             src={Tejas} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed   
//           />
          
//           {/* Second Image */}
//           <Image
//             src={Neil} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Third Image */}
//           <Image
//             src={tanvi} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Fourth Image */}
//           <Image
//             src={Sarah} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//     </Box>
//   </Center>
// </Box>

// <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
//   <Center>
//     <Box display="flex" justifyContent="space-between" w="80%">
//           {/* First Image */}
//           <Image
//             src={Aditya} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed   
//           />
          
//           {/* Second Image */}
//           <Image
//             src={Sumit} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Third Image */}
//           <Image
//             src={Rithvika} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Fourth Image */}
//           <Image
//             src={parth} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//     </Box>
//   </Center>
// </Box>






// <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
//   <Center>
//     <Box display="flex" justifyContent="space-between" w="80%">
//           {/* First Image */}
//           <Image
//             src={Aditya} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed   
//           />
          
//           {/* Second Image */}
//           <Image
//             src={Sumit} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Third Image */}
//           <Image
//             src={Rithvika} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Fourth Image */}
//           <Image
//             src={parth} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//     </Box>
//   </Center>
// </Box>

    


// <Box display="flex" justifyContent="space-between" w="100%" flexWrap="wrap">
//   <Center>
//     <Box display="flex" justifyContent="space-between" w="80%">
//           {/* First Image */}
//           <Image
//             src={Urvi} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed   
//           />
          
//           {/* Second Image */}
//           <Image
//             src={Aumkar} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Third Image */}
//           <Image
//             src={Anjali} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//           {/* Fourth Image */}
//           <Image
//             src={Tanisha} // Replace with your image source
//             alt=""
//             bgColor="white"
//             borderRadius="10"
//             p="2"
//             mb="10"
//             w="23%" // Adjust the width as needed
//           />
//     </Box>
//   </Center>
// </Box>
   


          
//           </Box>
//           {/* </Box> */}
//       </Center>
      
//         </Box>
        
//       </div>
      



    
//       {/* <PrevInterns /> */}

    




//       <Footer />
      
//     </div>
    
//   );
// };

// export default AboutUs;

