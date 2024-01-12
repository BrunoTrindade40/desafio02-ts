import { Alert, AlertIcon, Button, Center, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../services/login";

export const LoginForm = () => {
  /* const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm() */

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  /* console.log(handleSubmit);
  console.log(errors); */

  function isNullOrEmpty(value: string | null | undefined): boolean {
    return value === null || value === undefined || value === "";
  }
  const [textoSucesso, setTextoSucesso] = useState<string>('Formulário enviado com sucesso!');
  const alterarTextoSucesso = (value:string) => {
    setTextoSucesso(value);
  };
  const [textoErro, setTextoErro] = useState<string>('Um ou mais Campos estão vazios!');
  const alterarTextoErro = (value:string) => {
    setTextoErro(value);
  };

  const handleSubmit = (e:React.SyntheticEvent) => {
    console.log(e.target);
    setShowAlertError(false);
    setShowAlertSuccess(false);
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!

    console.log(email);
    console.log(password);

    if(isNullOrEmpty(email) || isNullOrEmpty(password)) {
      console.log("Não Passou");
      setShowAlertError(true);
    } else {
      if(login(email, password)) {
        console.log("Passou");
        alterarTextoSucesso(`Bem vindo ${email}`);
        setShowAlertSuccess(true);
      } else {
        alterarTextoErro(`Caro ${email}, Não foi possivel a conexão no momento, tente novamente.`);
        setShowAlertError(true);
      }
    }

    e.preventDefault();
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <FormControl >
          <Input
            placeholder="email"
            id="email"
            type="email"

          />
        </FormControl>
        <FormControl>
          <Input
            placeholder="password"
            id="password"
            type="password"

          />
        </FormControl>
        {
          showAlertError && (
          <Alert status='error'>
            <AlertIcon /> {textoErro}
          </Alert>
          )
        }
        {
          showAlertSuccess &&
          (
            <Alert status="success">
              <AlertIcon /> {textoSucesso}
            </Alert>
          )
        }
        <Center>
          <Button mt={4} colorScheme='teal' type='submit'>
            Submit
          </Button>
        </Center>
      </form>
    </>
  );
};