import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Image,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    user_name: '',
    user_password: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post('http://localhost:4000/users/login', values);

      toast.success(data.message);
      setCookie('token', data.token, { path: '/', maxAge: 10800 });
      setUser(data.user);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex

      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
      margin={"20px"}
        minH={'100vh'}
        direction={{ base: 'column', md: 'row' }}
        spacing={0}
        w={'full'}
        maxW={'3xl'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        rounded={'xl'}
        p={10}
        overflow={'hidden'}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          py={8}
          px={6}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>כניסה למערכת האתר</Heading>
            <FormControl id="username">
              <FormLabel>שם משתמש</FormLabel>
              <Input
                name="user_name"
                onChange={handleChange}
                type="text"
                placeholder="הכנס את שם המשתמש שלך"
                _hover={{ bg: 'pink.100' }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>סיסמה</FormLabel>
              <Input
                name="user_password"
                onChange={handleChange}
                type="password"
                placeholder="הכנס את הסיסמה שלך"
                _hover={{ bg: 'pink.100' }}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>זכור אותי</Checkbox>
                <Link color={'blue.500'}>שכחת סיסמה?</Link>
              </Stack>
              <Button
                type="submit"
                colorScheme={'blue'}
                variant={'solid'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLoginSubmit}
              >
                {loading ? <Spinner /> : 'התחברות'}
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'תמונת רקע'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
            }
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
