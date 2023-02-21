import { useDispatch, useSelector} from 'react-redux';
import { selectUser } from 'redux/user/user-selector';
import { selectToken } from 'redux/auth/auth-selectors';
import { getUser } from 'redux/user/user-operation';
import { logOut } from '../../redux/auth/auth-operations';
import { useEffect } from 'react';
import { Button, Container, Text } from '@chakra-ui/react';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
    
    useEffect(() => {
    if (token) {
      dispatch( getUser());
    }
  }, [token, dispatch]);

            return (
           <Container
            display="flex"
            ustifyContent="flex-end"
            alignItems="center"
              >
                {user && (
                  <>
                    <Text fontSize='lg' fontWeight='500'>Hello, Welcome Back {user.name}</Text> 
                  </>
                )}
                <Button
                  type="button"
                  colorScheme="teal"
                  size="md"
                  ml={5}
                  onClick={() => dispatch(logOut())}
                >
                  Logout
                </Button>
            </Container>
            );
          };