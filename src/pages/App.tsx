import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import { Route, Routes } from 'react-router';
import Participants from './Participants/Participants';
import Reports from './Reports/Reports';
import Dashboard from './Dashboard/Dashboard';
import Ontology from './Ontology/Ontology';
import AuthRedirector from './AuthRedirector/AuthRedirector';

function App() {
  return (
    <>
      <Header />
      <Box>
        <Flex>
          <Sidebar />
          <Box
            py={8}
            px={16}
            w={'full'}
            minH={'100vh'}
            css={{
              backgroundImage: 'linear-gradient(to bottom, #fff, #f0fdf4)',
            }}
          >
            <Routes>
              <Route path={'command-center'}>
                <Route path={'auth'} element={<AuthRedirector />} />
                <Route path={'dashboard'} element={<Dashboard />} />
                <Route path={'participants'} element={<Participants />} />
                <Route path={'reports'} element={<Reports />} />
                <Route path={'ontology'} element={<Ontology />} />
              </Route>
            </Routes>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
