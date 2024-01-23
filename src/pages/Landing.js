import {
  Button, ButtonGroup, Heading, Center, GridItem, Grid, Box, Flex, Image, Spacer, Text, useToast,
} from '@chakra-ui/react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { wrap } from 'framer-motion'
import img1 from "../images/img11.avif"
import img2 from "../images/img12.webp"
import img3 from "../images/homepage.png"
import img4 from "../images/diploma@2x.png"
import img5 from "../images/paper-plane@2x.png"
import img6 from "../images/project-management@2x.png"
import img7 from "../images/graduate@2x.png"
import img8 from "../images/bookmark@2x.png"
import img9 from "../images/star.png"
import img10 from "../images/aim4u_logo.jpg"
import { useSelector } from 'react-redux';
import Navbar from '../components/NavBar';
import InternshipCard from '../components/InternshipCard'; // Update the path accordingly
import Footer from '../components/Footer';



function Landing() {
  const { isAuthenticated, isAdmin } = useSelector((state) => { return state.user });

  <style>
    {`
          .t {
            textWrap: balance;
          }

          .scroll {
            padding-top: 3vw;
            float: center;
            padding-left: 4vw;
            transform: scale(1.0);
            padding-bottom: 3vw;
          }

          .container {
            position: relative;
          }

          /* Bottom right text */
          .text-block {
            max-width: 45vw;
            max-height: 30vh;
            position: absolute;
            top: 9.5vw;
            left: 8vw;
            transform: scale(1.2);
            color: white;
          }

          img {
            width: 100%;
            image-rendering: pixelated;
          }
        `}
  </style>
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const toast = useToast();

  return (
    <Box>
      <Box mb={'5rem'}>
        <Navbar isAdmin={isAdmin} />
        <div >
          <div className="container">
            <Image src={img3} alt="Norway" object-fit="cover" w='full' />
            <div className="text-block">

              <Heading pb="1vw" textAlign="center" size={{ base: "base", sm: "sm", md: "md", lg: "lg", xl: "2xl", "2xl": "2xl" }} marginTop={'2%'} color="#000080">Join Us And Shape Tomorrow</Heading>
              <Heading textAlign="center" size={{ base: "base", sm: "sm", md: "md", lg: "lg", xl: "lg", "2xl": "2xl" }} marginLeft={'19%'}><Heading as="span" color="#9acd32" size={{ base: "base", sm: "sm", md: "md", lg: "lg", xl: "2xl", "2xl": "2xl" }}>Internships </Heading><Heading as="span" color="white" size={{ base: "base", sam: "sm", md: "md", lg: "lg", xl: "2xl", "2xl": "2xl" }}>That Make A <br /> Difference</Heading></Heading>
              <Text pt="1vw" pb="1vw" textAlign={'center'} fontSize={{ base: "base", sm: "sm", md: "md", lg: "lg", xl: "2xl", "2xl": "2xl" }}>Being an Intern is much easier</Text>
              <Link to={'/internship'}><Button marginLeft={'45%'} size={{ base: "sm", md: "md", lg: "lg" }} backgroundColor={'#000080'} color={'white'} _hover={{ bg: '#9acd32' }}>Apply Now</Button></Link>
            </div>
          </div>
        </div>
        <Box pt="3vw" pb="1vw" fontSize={["sm", "md", "lg", "xl"]} >
          <Heading size="lg" pt={10} textAlign={'center'}><Heading as="span" size={{ base: "base", md: "lg", lg: "2xl" }} color="#000080">Where Learning Meets </Heading><Heading as="span" size={{ base: "base", md: "lg", lg: "2xl" }} color="#9acd32">Opportunity</Heading></Heading>
          <Center >
            <Center w='60vw' p={5} fontWeight="medium"> Perfect for students who aspire to embark on careers with leading tech giants like Microsoft, Google, and Barclays. Our opportunities are limited, and selection will be based on the information you provide in your application. Your future with these prestigious tech companies may just be a click away.</Center>
          </Center>

          <Flex justifyContent="space-evenly" p={5} >
            {/* <Box>
                   <Heading size={{ base: "base", md: "lg", lg: "3xl" }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' >100+</Heading>
                   <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">Students</Text>
                </Box> */}
            <Box>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: 'linear-gradient(to left, #9acd32, #000080)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textAlign: 'center',
                }}
              >
                50
              </Heading>
              <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">
                Top Universities
              </Text>
            </Box>

            {/* <Box>
                   <Heading size={{ base: "base", md: "lg", lg: "3xl" }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>50</Heading>
                   <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">Top Universities</Text>
                </Box> */}
            <Box>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: 'linear-gradient(to left, #9acd32, #000080)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textAlign: 'center',
                }}
              >
                100
              </Heading>
              <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">
                Projects
              </Text>
            </Box>

            {/* <Box>
                   <Heading size={{ base: "base", md: "lg", lg: "3xl" }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>100</Heading>
                   <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">Projects</Text>
                </Box> */}
            <Box>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: 'linear-gradient(to left, #9acd32, #000080)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textAlign: 'center',
                }}
              >
                7
              </Heading>
              <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">
                Industry Experts
              </Text>
            </Box>

            {/* <Box>
                   <Heading size={{ base: "base", md: "lg", lg: "3xl" }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>7</Heading>
                   <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }}  fontWeight="bold">Industry Experts</Text>
                </Box> */}
            <Box>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: 'linear-gradient(to left, #9acd32, #000080)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textAlign: 'center',
                }}
              >
                23
              </Heading>
              <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} textAlign={'center'} fontWeight="bold">
                Years of Experience
              </Text>
            </Box>

            {/* <Box>
                   <Heading size={{ base: "base", md: "lg", lg: "3xl" }} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>23</Heading>
                   <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">Years of Experience</Text>
                </Box> */}
            <Box>
              <Heading
                size={{ base: "base", md: "lg", lg: "3xl" }}
                style={{
                  background: 'linear-gradient(to left, #9acd32, #000080)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textAlign: 'center',
                }}
              >
                100+
              </Heading>
              <Text fontSize={{ base: "base", md: "lg", lg: "2xl" }} fontWeight="bold">
                Students
              </Text>
            </Box>

          </Flex>
        </Box>

        <Box fontSize={["sm", "md", "lg", "xl"]}>
          <Heading pt={10} textAlign={'center'}><Heading as="span" size={{ base: "base", md: "lg", lg: "2xl" }} color="#000080">What is </Heading><Heading as="span" size={{ base: "base", md: "lg", lg: "2xl" }} color="#9acd32">Gyan?</Heading></Heading>
          <Center >
            <Center w='60vw' p={5} fontSize={'2xl'} fontWeight="medium"> Gyan@Aim4u - Experience the power of learning with Aim4u. This is a transformation in learning process which incorporates internship experience along with learning from the industry experts and get ready to face the world of Artificial Intelligence and Machine Learning.</Center>
          </Center>

          <Center>

            <Flex wrap={wrap} width="70vw" justifyContent="space-between" gap={'10'} pt={5}>

              <Box>
                <div className="image-wrapper">
                  <Image src={img1} className='image' />
                  {/* <Box as="flex" alignSelf="center" className='image-text'>
                  <Text color="white" fontSize={["base", "sm", "md", "xl"]}>New to Our Page?</Text>
                  <Button size={{ base: "sm", md: "sm", lg: "md" }} backgroundColor={'#000080'} color={'white'} _hover={{ bg: '#9acd32' }}>Register Now</Button>
                </Box> */}
                </div>
              </Box>
              <Box>
                <div className="image-wrapper">
                  <Image src={img2} className='image' />
                  {/* <Box as="flex" alignSelf="center" className='image-text'>
                  <Text color="white" fontSize={["base", "sm", "md", "xl"]}>Latest Internships</Text>
                  <Link to={'/internship'}>
                    <Button size={{ base: "sm", md: "sm", lg: "md" }} variant="solid" backgroundColor={'#000080'} color={'white'} _hover={{ bg: '#9acd32' }}>Apply Now</Button>
                  </Link>
                </Box> */}
                </div>
              </Box>
              <Box>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box>
          <Box fontSize={["sm", "md", "lg", "xl"]} pt="4%" pl={'4'}>
            <Heading textAlign={'center'}><Heading as="span" size={{ base: "base", md: "lg", lg: "2xl" }} color="#000080">Benefits Of Joining Our </Heading><Heading as="span" size={{ base: "base", md: "lg", lg: "2xl" }} color="#9acd32">Internship</Heading></Heading>
            <Center>
              <Grid pt="5vw" h='400px'
                templateRows={{ base: "repeat(4, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)" }}
                templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)", xl: "repeat(6, 1fr)" }}
                gap={4}
              >
                <GridItem colSpan={2}  >
                  <Center>
                    <Image boxSize="6vw" src={img4} /> <br />
                  </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' fontWeight="bold"> Letter Of Recommendation</Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} className="t" w='30vw' fontWeight="medium" > <Text >Attract top universities and companies with the LOR provided by our world-class professor</Text> </Center>
                  <br />

                </GridItem>
                <GridItem colSpan={2}  >
                  <Center>
                    <Image boxSize="6vw" src={img5} /> <br />
                  </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' fontWeight="bold">Internship Certificate</Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' className="t" fontWeight="medium"> A certificate of Completion to upskill your resume and chart your career growth</Center>
                  <br />

                </GridItem>
                <GridItem colSpan={2}  >
                  <Center>
                    <Image boxSize="6vw" src={img6} /> <br />
                  </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' fontWeight="bold" > Real-Life Projects </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' className="t" fontWeight="medium">Industry level projects that focus on society issues, business
                    analytics and many more</Center>
                  <br />

                </GridItem>

                <GridItem colSpan={2}  >
                  <Center>
                    <Image boxSize="6vw" src={img7} /> <br />
                  </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' fontWeight="bold">Research Opportunity</Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' className="t" fontWeight="medium">  Publishing Research Papers efficiently that will boost your
                    career chart</Center>
                  <br />

                </GridItem>

                <GridItem colSpan={2}  >
                  <Center>
                    <Image boxSize="6vw" src={img8} /> <br />
                  </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' fontWeight="bold">Structured Learning</Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' className="t" fontWeight="medium" >The course has been designed to facilitate an outcome based learning experience</Center>
                  <br />

                </GridItem>
                <GridItem colSpan={2}  >
                  <Center>
                    <Image boxSize="6vw" src={img9} /> <br />
                  </Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' fontWeight="bold"> And much more!</Center>
                  <Center fontSize={["sm", "md", "lg", "xl"]} w='30vw' className="t" fontWeight="medium" > Connect with mentors and ease your way to the top</Center>
                  <br />

                </GridItem>
              </Grid>
            </Center>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Landing