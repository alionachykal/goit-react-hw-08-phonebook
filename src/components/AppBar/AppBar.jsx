

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectToken } from 'redux/auth/auth-selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Container} from '@chakra-ui/react';

export const AppBar = () => {
  const token = useSelector(selectToken);
   
  return (
    
 
    <>
      <Box
        as="header"
        bg={'teal.50'}
        borderBottom={`1px solid`}
        borderColor={'gray.100'}
        fontSize={20}
        mb={5}
        box ={`1px solid #black`}
      
      >
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="4xl"
          p={2}
        >
       {!token ? <AuthNav /> : <UserMenu />}
          <Navigation />
        </Container>
         </Box>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

  
    





