import { Routing } from './routing';

export const navMap: ReadonlyArray<{
  path: Routing;
  name: string;
  unauthorized?: true;
}> = [
  {
    path: Routing.ROOT,
    name: 'Login',
    unauthorized: true,
  },
  {
    path: Routing.REGISTER,
    name: 'Register',
    unauthorized: true,
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
