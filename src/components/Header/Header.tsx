//import './Header.css'

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer
} from '@chakra-ui/react';

export const Header  = () => {
  return(
    <>
      <Flex alignItems='center' gap={2} bgColor='white' minWidth='100%' padding='0 25px'>
        <Box p={2}>
          <Heading>DIO Bank</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}
