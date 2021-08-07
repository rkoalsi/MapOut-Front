import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Divider: {
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
      },
    },
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
    fonts: {
      heading: 'Sen',
      body: 'Raleway',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});

export default theme;
