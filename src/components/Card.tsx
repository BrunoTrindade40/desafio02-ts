
import { Box, Center } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";

export const Card = () => {
  return(
    <>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <LoginForm />
        </Box>
      </Box>

    </>
  )
}