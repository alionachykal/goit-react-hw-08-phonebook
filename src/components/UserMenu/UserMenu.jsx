import { useDispatch, useSelector} from 'react-redux';

import { selectUser } from 'redux/user/user-selector';
import { selectToken } from 'redux/auth/auth-selectors';
import { getUser } from 'redux/user/user-operation';
import { logOut } from '../../redux/auth/auth-operations';

import css from './UserMenu.module.css';
import { useEffect } from 'react';

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
      <div className={css.wrapper}>
      {user && (
        <>
          <p className={css.username}> Welcome, user! ,{user.name}</p>
          <p className={css.username}>{ user.email}</p>
        </>
    )}
      <button
        className={css.btnLogin}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};