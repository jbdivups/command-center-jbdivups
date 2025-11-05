import { Box, Text } from '@chakra-ui/react';
import {
  LuChartNoAxesColumnIncreasing,
  LuHouse,
  LuUsers,
} from 'react-icons/lu';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1d283a;
  }

  &.active {
    background-color: #1d283a;
  }
`;

export const Sidebar = () => {
  return (
    <aside>
      <Box h="calc(100%)" p={4} px={0} bg={'brand.bgSide'} minW={256}>
        <MenuItem to={'command-center/dashboard'}>
          <LuHouse /> Dashboard
        </MenuItem>
        <MenuItem to={'command-center/participants'}>
          <LuUsers /> Participants
        </MenuItem>
        <MenuItem to={'command-center/reports'}>
          <LuChartNoAxesColumnIncreasing /> Reports
        </MenuItem>
        <MenuItem to={'command-center/ontology'}>
          <Text color={'red'}>Ontology Debug</Text>
        </MenuItem>
      </Box>
    </aside>
  );
};
