import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe o campo email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email')
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const btn = screen.getAllByRole('button');
  expect(btn).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btn = screen.getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveProperty('type', 'button');
  expect(btn).toHaveValue('Enviar');
})

test('Verificando se o botão e o campo email estão funcionando.', async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);
  await waitFor(() => {
    expect(inputEmail).toHaveValue('');
  })
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
