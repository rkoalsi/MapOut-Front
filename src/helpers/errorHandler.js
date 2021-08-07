export const handleError = (error, toast) => {
  if (error.response) {
    if (error.response.status === 400) {
      toast({
        title: `Bad Request`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 401) {
      toast({
        title: `Unauthorized`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 403) {
      toast({
        title: `Forbidden`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 404) {
      toast({
        title: `Not Found`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 405) {
      toast({
        title: `Method Not Allowed`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 406) {
      toast({
        title: `Not Acceptable`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 408) {
      toast({
        title: `Request Timeout`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 500) {
      toast({
        title: `Internal Server Error`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 502) {
      toast({
        title: `Bad Gateway`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 503) {
      toast({
        title: `Service Unavailable`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else if (error.response.status === 504) {
      toast({
        title: `Gateway Timeout`,
        description: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: `${error}`,
        status: 'error',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
    }
  }
};
