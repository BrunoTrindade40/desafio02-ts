import { Alert, AlertIcon } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';

test('renders Alert Success component', () => {
  render(<Alert status="success"><AlertIcon /></Alert>);
  const alertElement = screen.getByRole('alert');

  expect(alertElement).toBeInTheDocument();
  //expect(alertElement).toHaveTextContent('Formulário enviado com sucesso!');
});
test('renders Alert Error component', () => {
  render(<Alert status="error"><AlertIcon /></Alert>);
  const alertElement = screen.getByRole('alert');

  expect(alertElement).toBeInTheDocument();
});