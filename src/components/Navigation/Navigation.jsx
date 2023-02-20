
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';


export const Navigation = () => {
    const token = useSelector(selectToken);
    
    return (
        <>
        <nav>
            <ul className={css.link_list}>
                {!token ? (
                    <>
                        <li  className={css.link} >
                            <NavLink to= "login"  >Login</NavLink>
                        </li>
                        <li  className={css.link}>
                            <NavLink to="register" >Register</NavLink>
                        </li>
                    </>
                ) : (
                        <li  className={css.link}>
                            <UserMenu />
                            <NavLink to="contacts" >Contacts</NavLink>
                        </li>
        
                )}
            </ul>
        </nav>
        <Suspense fallback={null}>
        <Outlet/>
        </Suspense>
        </>
    );
        
}
    
  
