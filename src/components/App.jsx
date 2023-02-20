

import { Routes, Route, Navigate } from "react-router-dom";
import {  lazy } from 'react';
import { Layout } from "./Layout/Layout";
import { PrivateRoute } from "./AuthRouts/PrivateRoute";
import { PublicRoute } from "./AuthRouts/PubllicRoute";


const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));





export const App = () => {

  return (
      
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<Navigate to="login" />} />
         <Route path ="" element ={<PublicRoute/>}>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path ="" element ={<PrivateRoute/>}>
          <Route path="/contacts" element={<ContactsPage />} />
          
        </Route>
       
      </Route>
      </Routes>
  );
};
