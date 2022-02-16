import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectAccessToken } from 'redux/features/authSlice';
import { useAppSelector } from 'redux/hooks';
import { Routing } from './routing';

export const withAuthGuard = <T extends object = object>(
  Component: ComponentType<T>
) =>
  function AuthGuardedPage(hocProps: T) {
    // TODO: possibly change logic to some existing user data
    const loggedIn = useAppSelector(selectAccessToken);
    const navigate = useNavigate();

    const navOutFn = () => {
      if (!loggedIn) {
        navigate(Routing.ROOT);
        return;
      }
    };

    useEffect(navOutFn, []);
    useEffect(navOutFn, [loggedIn]);

    if (!loggedIn) {
      return null;
    }
    return <Component {...hocProps} />;
  };
