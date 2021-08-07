import React, { useEffect, useState } from 'react';
import { Center, VStack, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { getUsers } from '../apis/dashboard.js';
import { Empty } from 'antd';
const DashboardView = () => {
  const [stats, setStats] = useState([]);

  const getData = async () => {
    const res = await getUsers();
    setStats(res);
  };

  useEffect(() => {
    getData();
  }, []);

  if (stats.length === 0) {
    return (
      <Center>
        <Empty />
      </Center>
    );
  }
  return (
    <VStack>
      {stats.map((s, i) => (
        <Stat>
          <StatNumber>
            {i + 1}. ID - {s.id}
          </StatNumber>
          <StatLabel>email - {s.email}</StatLabel>
          {s.company && <StatLabel>company - {s.company}</StatLabel>}
          {s.age && <StatNumber>age - {s.age}</StatNumber>}
        </Stat>
      ))}
    </VStack>
  );
};

export default DashboardView;
