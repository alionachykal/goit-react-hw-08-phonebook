import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
import { toast } from 'react-toastify';
import css from "./LoginPage.module.css";
import { Button, Heading } from '@chakra-ui/react';

import { MdContentPaste } from "react-icons/md";

const state = {
  email: '',
  password: '',
};

const LoginPage = () => {

  const dispatch = useDispatch();
  const [values, setValues] = useState(state);




  
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

  };
    


  const handleSubmit = async e => {
    e.preventDefault();
   
     await dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('You are successfully log in the phone book');
        
      })
      .catch(() => {
        toast.error(
          'Incorrect email or password. Please verify your information and try login again'
        );
     
      });
  };
  return (
    <div>
      <Heading mt="50px" textAlign="center">
        < MdContentPaste className={css.icon} />
        
       Log In Page
      </Heading>
         
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
                
        <label className={css.label}>
           
          <input className={css.label}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter user name"
            aria-required='true'
          />

        </label>
        <label className={css.label}>
          <input className={css.label}
            type="password"
            name="password"
            value={values.password}
            aria-required='true'
            onChange={handleChange}
            placeholder="Enter password"
                     
          />
                    
        </label>

         <Button
        type="submit"
        colorScheme="teal"
        size="md"
        ml={5}
      >
          Log In
      </Button>
      </form>

    </div>
  );

};


export default LoginPage;