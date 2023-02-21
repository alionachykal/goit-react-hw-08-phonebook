import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors'; 
 import {
  Card,
  Heading,
  CardFooter,
  Button,
  Text
} from '@chakra-ui/react';


 const HomePage = () => {
    const navigate = useNavigate();
    const token = useSelector(selectToken);
  return (
    <Card textAlign='center' mt='80px' minW='300px' maxW='650px' ml='auto' mr='auto' alignItems='center' borderBottom={`1px solid`}
    borderColor={'gray.100'}>
    
      <Heading size="xl" >
        <Text
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize='6xl'
              fontWeight='extrabold'>
             Welcome to Phonebook
       </Text>
            <span role="img" aria-label="Telephone icon"> ☎️</span>
       </Heading>
      <CardFooter>
      <Button  colorScheme='teal' onClick={()=>!token ? navigate('/login') : navigate('/contacts')} >
        Let`s start!
      </Button>
      </CardFooter>
    </Card>
  );
};

export default HomePage;
