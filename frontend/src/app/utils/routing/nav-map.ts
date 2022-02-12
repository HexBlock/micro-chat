import { Routing } from './routing';

export const navMap = [
  {
    path: Routing.ROOT,
    name: 'Login',
  },
  {
    path: Routing.REGISTER,
    name: 'Register',
  },
  {
    path: Routing.MAIN,
    name: 'Chat',
  },
  {
    path: Routing.PROFILE,
    name: 'Profile',
  },
] as const;
