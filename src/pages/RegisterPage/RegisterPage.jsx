import { useState } from "react";
import { useDispatch  } from "react-redux";
import css from "./RegisterPage.module.css";
import { register } from '../../redux/auth/auth-operations';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Heading,Button } from "@chakra-ui/react";

const state = {
    name: '',
    email: '',
    password: '',
};

const  RegisterPage = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(state);
    const navigate = useNavigate();



    const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await dispatch(register(values)).unwrap();
            navigate('/contacts', { replace: true })
             toast.success('You are successfully registered in the phone book');
        } catch (error) {
            toast.error('Incorrect email or password. Please verify your information and try login again'
        );
   
        }
       
  };
      
        
  
return (
    <div>
        
        <Heading mt="50px" textAlign="center">
                 Sign in
      </Heading>
        <form className={css.form} onSubmit={handleSubmit}autoComplete="off">
            <label  className={css.label}> Username
                <input className={css.label}
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter user name"

                />

            </label>
            <label className={css.label} >
                Email
                <input
                    className={css.label}
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter user email" />

            </label>
            <label className={css.label} >
                Password
                <input
                    className={css.label}
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Enter user password"
                    onChange={handleChange} />
                    

            </label>

         <Button
        type="submit"
        colorScheme="teal"
        size="md"
        ml={5}
      >
     Register
      </Button>
        </form>

    </div>
);

};
export default RegisterPage;