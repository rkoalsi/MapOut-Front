import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  Input,
  Button,
  useToast,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { handleError } from '../helpers/errorHandler';

import { signin } from '../apis/auth';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    if (email && password) {
      await setUserAction();
    } else {
      toast({
        title: `Missing Credentials`,
        description: 'Please fill in all details',
        status: 'error',
        variant: 'subtle',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const setUserAction = async () => {
    setLoading(true);
    try {
      const body = { email, password };
      const res = await signin(body);
      cookie.set('adminToken', res.token);
      if (res.token) {
        toast({
          title: 'Successfully Logged In',
          status: 'success',
          variant: 'subtle',
          duration: 3000,
          isClosable: true,
        });
        history.replace('/');
      }
    } catch (error) {
      handleError(error, toast);
    }
    setLoading(false);
  };
  const headerColor = useColorModeValue('#000', '#ffff');
  return (
    <Flex height='90vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' rounded={6}>
        <Heading mb={6} as='h1' textAlign='center' color={headerColor}>
          Map Out
        </Heading>
        <Stack spacing={3}>
          <FormControl id='email' isRequired>
            <Input
              w='sm'
              placeholder={'Email'}
              variant='filled'
              type='email'
              onChange={handleEmailChange}
            />
          </FormControl>
          <FormControl id='password' isRequired>
            <Input
              w='sm'
              onChange={handlePasswordChange}
              placeholder={'Password'}
              type='password'
              variant='filled'
            />
          </FormControl>
          <Button
            mb={6}
            colorScheme='teal'
            onClick={handleSubmit}
            isLoading={loading}
          >
            Log In
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
