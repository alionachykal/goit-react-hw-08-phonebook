

import { Routes, Route} from "react-router-dom";
import {  lazy } from 'react';
import { Layout } from "./Layout/Layout";
import { PrivateRoute } from "./AuthRouts/PrivateRoute";
import { PublicRoute } from "./AuthRouts/PubllicRoute";
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from "pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));



export const App = () => {

  return (
    <ChakraProvider>    
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
         <Route path ="" element ={<PublicRoute/>}>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path ="" element ={<PrivateRoute/>}>
            <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      
      </Route>
      </Routes>
       <ToastContainer autoClose={3000} />
      </ChakraProvider>
  );
};
