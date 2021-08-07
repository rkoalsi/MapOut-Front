import React from 'react';
import { Flex } from '@chakra-ui/layout';
import CoreNavbar from './CoreNavbar';
import styled from 'styled-components';

const CoreLayout = (props) => {
  const { children } = props;

  return (
    <>
      <CoreNavbar />
      <Flex justifyContent='center' align='center'>
        <CoreBody>{children}</CoreBody>
      </Flex>
    </>
  );
};

export default CoreLayout;

const CoreBody = styled.div`
  z-index: 10;
  flex: 1;
`;
