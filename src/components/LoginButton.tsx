import { Button } from "@chakra-ui/react";

interface ILoginButton {
  event: () => any
}

export const LoginButton =  (props: ILoginButton) => {
  return (
    <>
      <Button onClick={props.event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        Login
      </Button>
    </>
  );
}