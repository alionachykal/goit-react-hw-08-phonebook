import { NavLink } from "react-router-dom";
import { Link, Stack } from '@chakra-ui/react';

export const AuthNav = () => {
    
    return (
    <nav>
      <Stack as="ul" direction="raw" spacing={1} p={1}>
       
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            borderRadius={'12px'}
            to={'login'}
            _hover={{ bg: 'teal.400', color: 'white' }}
            _activeLink={{ bg: 'teal.500', color: 'white' }}
          >
            Log In
          </Link>
       
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            borderRadius={'12px'}
            to={'register'}
            _hover={{ bg: 'teal.400', color: 'white' }}
            _activeLink={{ bg: 'teal.500', color: 'white' }}
          >
           Register
          </Link>
       
      </Stack>
    </nav>
  );
};
