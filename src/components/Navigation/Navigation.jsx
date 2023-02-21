
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

import { Link, Stack } from '@chakra-ui/react'





export const Navigation = () => {
    const token = useSelector(selectToken);
    
    return (
      
        <nav>
        <Stack as="ul" direction={[ 'row']} spacing='24px' >
    
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            borderRadius={'12px'}
            to={'/'}
            _hover={{ bg: 'teal.400', color: 'white' }}
            _activeLink={{ bg: 'teal.500', color: 'white' }}
          >
            Home
          </Link>
  
        {token && (
      
            <Link
              as={NavLink}
              fontSize="lg"
              fontWeight='500'
              p={2}
              mr={1}
              borderRadius={'12px'}
              to={'contacts'}
              _hover={{ bg: 'teal.400', color: 'white' }}
              _activeLink={{ bg: 'teal.500', color: 'white' }}
            >
              Contacts
            </Link>
         
        )}
      </Stack>
    </nav>
  );
};
     
  
