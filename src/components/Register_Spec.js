import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Register from './Register';

describe('Register', () => {
  test('renders input fields with labels and submit button', () => {
    render(<Register />);
    expect(screen.getByLabelText('User')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Create Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByText('User Registration')).toBeInTheDocument();
    expect(screen.getByText('Show Password')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('shows password when Show Password button is clicked', () => {
    render(<Register />);
    const showPasswordButton = screen.getByText('Show Password');
    fireEvent.click(showPasswordButton);
    expect(screen.getByLabelText('Create Password')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Confirm Password')).toHaveAttribute('type', 'text');
  });

  test('prevents form submission when passwords do not match', () => {
    render(<Register />);
    const submitButton = screen.getByText('Submit');
    const passwordInput = screen.getByLabelText('Create Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'different_password' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('wrong, please enter same password')).toBeInTheDocument();
  });

  test('prevents form submission when user is already registered', async () => {
    const mockAPIData = [
      { user: 'test_user', email: 'test_user@test.com', pass: 'Test123!', cpass: 'Test123!' },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPIData),
    });
    render(<Register />);
    const submitButton = screen.getByText('Submit');
    const userInput = screen.getByLabelText('User');
    fireEvent.change(userInput, { target: { value: 'test_user' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText('Already registerred')).toBeInTheDocument();
    });
  });

  test('successfully registers user when form is submitted with valid data', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });
    render(<Register />);
    const submitButton = screen.getByText('Submit');
    const userInput = screen.getByLabelText('User');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Create Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    fireEvent.change(userInput, { target: { value: 'new_user' } });
    fireEvent.change(emailInput, { target: { value: 'new_user@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Test123!' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText('registration seccessful!!')).toBeInTheDocument();
    });
  });
});
