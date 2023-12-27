import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
  Flex,
  Input,
  Button,
  Box,
  Heading,
  InputGroup,
  InputRightAddon,
  Icon,
  InputLeftAddon,
  Text,
} from '@chakra-ui/react';
import card1 from '../images/payments/paypal.png';
import card2 from '../images/payments/Aexpress.png';
import card3 from '../images/payments/visa.png';
import card4 from '../images/payments/Mastercard.png';
import upi from '../images/Upi.png'
import { CheckCircleIcon } from '@chakra-ui/icons';

const Form = () => {
  const [var1, setVar1] = useState(null);

  const handleImageClick = (altValue) => {
    setVar1(altValue);
  };
  const [show1, setShow1] = React.useState(false)
  const handleClick1 = () => setShow1(!show1)
  const [show2, setShow2] = React.useState(false)
  const handleClick2 = () => setShow2(!show2)
  const [cvc,setCVC]=useState('');
  
  const handleChange = (event) => {
    let value = event.target.value;
  value = value.slice(0, 3);
  setCVC(value);
  };
  const isCVC=cvc.length===3;
  const [cardNumber, setCardNumber] = useState('');
  const isCardNumberValid = cardNumber.length === 16;
  const [phone,setPhone]=useState('');
  const isPhone=phone.length===10;
  return (
    <Flex direction={'row'} align="center" justify="center" >
      <Flex direction={'column'} width='full' ml='10'>
      <Heading>Checkout</Heading>
      <Box
        m={['4', '10']}
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="#EBF5FF"
        width={['100%', '55%']}
        h="100%"
        borderRadius='3xl'

      >
        <Heading>Card</Heading>
        {/* Cards */}
        <FormControl isRequired m='2' width='90%'>
          <FormLabel textAlign="initial" ml="10" fontSize="xl">
            Card Type
          </FormLabel>
          <Flex spacing='10%' justifyContent="center" maxW="full">
            <Image
              src={card1}
              boxSize='4xs'
              w="20%"
              mx="3%"
              border="2px"
              borderRadius="15px"
              alt="PayPal"
              onClick={() => handleImageClick('PayPal')}
              _hover={{ border: '2px', borderColor: '#49BBBD' }}
            />
            <Image
              src={card2}
              boxSize="4xs"
              w="20%"
              mx="3%"
              border="2px"
              borderRadius="15px"
              alt="American Express"
              onClick={() => handleImageClick('American Express')}
              _hover={{ border: '2px', borderColor: '#49BBBD' }}
            />
            <Image
              src={card3}
              boxSize="4xs"
              w="20%"
              mx="3%"
              border="2px"
              borderRadius="15px"
              alt="Visa"
              onClick={() => handleImageClick('Visa')}
              _hover={{ border: '2px', borderColor: '#49BBBD' }}
            />
            <Image
              src={card4}
              boxSize="4xs"
              w="20%"
              mx="3%"
              border="2px"
              borderRadius="15px"
              alt="Mastercard"
              onClick={() => handleImageClick('MasterCard')}
              _hover={{ border: '2px', borderColor: '#49BBBD' }}
            />
          </Flex>
          <FormHelperText textAlign="center" fontSize="lg">
            Your Card information is Safe with us.
          </FormHelperText>
        </FormControl>

        <div>{var1}</div>
        <FormControl boxSize='4xs' isRequired m="2" mt="15" width="90%" ml="10">
          <FormLabel textAlign="initial" fontSize="xl">
            Name of Card Owner
          </FormLabel>
          <Input placeholder="Enter Name on Card" size="lg" />
        </FormControl>
        <FormControl boxSize='4xs' isRequired m="2" mt="15" width="90%" ml="10">
      <FormLabel textAlign="initial" fontSize="xl">
        Card Number
      </FormLabel>
      <InputGroup>
        <Input
          placeholder="Enter Card Number"
          size="lg"
          type={show1 ? 'number' : 'password'}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <InputRightAddon h='12'>
          <Button onClick={handleClick1}>
            {show1 ? 'Hide' : 'Show'}
          </Button>
        </InputRightAddon>
        {isCardNumberValid && (
          <Icon as={CheckCircleIcon} color="green.500" boxSize={10} ml={2} mt='1'/>
        )}
      </InputGroup>
    </FormControl>
        <Flex>
          <FormControl boxSize='4xs' isRequired m="2%" mt="15" width="43%" ml="10">
            <FormLabel textAlign="initial" fontSize="xl">
              Expiration Date (MM/YY)
            </FormLabel>
            <InputGroup >
                  
                  <Input placeholder="Enter Date."
                  bgColor="white"
                  type='month'
                  fontSize="xl"
                  size="lg"
                  />
                </InputGroup>
          </FormControl>
          <FormControl boxSize='4xs' isRequired m="5%" mt="15" width="43%" ml="10">
      <FormLabel textAlign="initial" fontSize="xl">
        CVC
      </FormLabel>
      <InputGroup>
        <Input
          placeholder="Enter CVC"
          size="lg"
          type={show2 ? 'number' : 'password'}
          maxLength="3"
          value={cvc}
          onChange={handleChange}
        />
        <InputRightAddon h='12'>
          <Button onClick={handleClick2}>
            {show2 ? 'Hide' : 'Show'}
          </Button>
        </InputRightAddon>
        {isCVC && (
          <Icon as={CheckCircleIcon} color="green.500" boxSize={10} ml={2} mt='1'/>
        )}
      </InputGroup>
    </FormControl>
        </Flex>
        <Button
          colorScheme="blue"
          fontSize="2xl"
          ml="10"
          width="93%"
          height="14"
          mt="30"

        >
          Confirm Payment
        </Button>
      </Box>
      <Box 
  m={['4', '10']}
  boxShadow="2xl"
  p="6"
  rounded="md"
  bg="#EBF5FF"
  width={['100%', '55%']}
  h="100%"
  borderRadius='3xl'
        
>
  <Heading>UPI</Heading>
  <Image src={upi} alt='upi' boxSize='20' width='32' mx='auto' />
  <FormControl boxSize='4xs' isRequired m="5%" mt="15" width="90%" ml="10">
    <FormLabel textAlign="initial" fontSize="xl">
      Phone Number
    </FormLabel>
    <InputGroup w='100%'>
      <InputLeftAddon children="+91" placeholder="Enter Phone No."
        bgColor="white"
        h='12'
        fontSize="xl"
        size="lg"
      />
      <Input
        placeholder="Enter Phone No."
        size="lg"
        type='number'
        value={phone}
        w='100%'
        onChange={(e) => setPhone(e.target.value)}
      />
      {isPhone && (
        <Icon as={CheckCircleIcon} color="green.500" boxSize={10} ml={2} mt='1'/>
      )}
    </InputGroup>
    <Button
          colorScheme="blue"
          fontSize="2xl"
          ml="10"
          width="95%"
          height="14"
          mt="30"

        >
          Confirm Payment
        </Button>
  </FormControl>
</Box>
<Box 
  m={['4', '10']}
  boxShadow="2xl"
  p="6"
  rounded="md"
  bg="#EBF5FF"
  width={['100%', '55%']}
  h="100%"
  borderRadius='3xl'
        
>
  <Heading>NetBanking</Heading>
  {/*   <Image src={upi} alt='upi' boxSize='20' width='32' mx='auto' /> */}
  <FormControl boxSize='4xs' isRequired m="5%" mt="15" width="90%" ml="10">
    <FormLabel textAlign="initial" fontSize="xl">
      Current Bank
    </FormLabel>
    <InputGroup w='100%'>
      
      <Input
        placeholder="Enter Bank"
        size="lg"
        value={phone}
        w='100%'
        onChange={(e) => setPhone(e.target.value)}
      />
      {isPhone && (
        <Icon as={CheckCircleIcon} color="green.500" boxSize={10} ml={2} mt='1'/>
      )}
    </InputGroup>
    <Button
          colorScheme="blue"
          fontSize="2xl"
          ml="10"
          width="95%"
          height="14"
          mt="30"

        >
          Confirm Payment
        </Button>
  </FormControl>
</Box>
          </Flex>

          <Flex direction={'column'} width='30%' mt='-96' ml='-96' justify='flex-start'>
            <Heading m='5'>
              Payment GateWay
            </Heading>
            <Text>List of Internships</Text>
          </Flex>
          </Flex>

  );
};

export default Form;

