import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import css from "./LoginPage.module.css";


const state = {
  email: '',
  password: '',
};

const LoginPage = () => {

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
      dispatch(logIn(values)).unwrap();
      navigate('/contacts', { replace: true })
      toast.success('You are successfully loged in the phone book');
    } catch (error) {
      toast.error('Incorrect email or password. Please verify your information and try login again');
    }
    
        
  };

  return (
    <div>
      <h1  className={css.formText}> Log In Page</h1>
         
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
        <button className={css.formBtn} type="submit">
          Log In
        </button>
        <div></div>
      </form>

    </div>
  );

};


export default LoginPage;