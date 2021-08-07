import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Divider,
  SimpleGrid,
  StackDivider,
  useToast,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import cookie from 'js-cookie';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from './CoreRoutes';

const Navbar = () => {
  const toast = useToast();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const token = cookie.get('adminToken');
  const onClickLogout = () => {
    if (typeof window !== 'undefined') {
      cookie.remove('adminToken');
      history.push('/signin');
      toast({
        title: 'Successfully Logged Out',
        status: 'success',
        variant: 'subtle',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const MenuBackground = useColorModeValue('gray.100', 'gray.900');
  const onClickLogin = () => {
    history.push('/login');
  };

  return (
    <Box>
      <Flex
        h={16}
        bg={MenuBackground}
        px={4}
        marginBottom={8}
        justify='space-between'
        align='center'
        direction='row'
      >
        <IconButton
          size={'sm'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <SimpleGrid
          spacing={3}
          as={'nav'}
          display={{ base: 'none', md: 'inline-table' }}
        >
          {routes.map((link, i) => (
            <Link to={link.path} key={i}>
              {link.name}
            </Link>
          ))}
          <SimpleGrid spacingX='40px' spacingY='20px' />
        </SimpleGrid>
        <HStack isInline alignItems={'center'} spacing={4}>
          <Divider orientation='vertical' style={{ height: '50px' }} />
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
            >
              <Avatar size={'sm'} />
            </MenuButton>
            <MenuList background={MenuBackground} zIndex={100}>
              {token ? (
                <MenuItem onClick={onClickLogout}>Logout</MenuItem>
              ) : (
                <MenuItem onClick={onClickLogin}>Login</MenuItem>
              )}
              <MenuDivider />
              <MenuItem onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack
            as={'nav'}
            spacing={4}
            divider={<StackDivider borderColor='gray.200' />}
          >
            {routes.map((link, i) => (
              <Link to={link.path} key={i}>
                {link.name}
              </Link>
            ))}
            <StackDivider borderColor='gray.200' />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
