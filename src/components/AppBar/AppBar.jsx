

import { Navigation } from 'components/Navigation/Navigation';
 import { Container } from '@chakra-ui/react'


export const AppBar = () => {
   
  return (
 
  <>
      <h1 style={styles.title}>
        Phonebook 
        <span role="img" aria-label="Telephone icon">
          ☎️
        </span>
      </h1>
      <Navigation />
    </>
     
          
   
  );
};


const styles = {

  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};




