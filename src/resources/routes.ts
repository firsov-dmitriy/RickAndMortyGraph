import { FC } from 'react';
import {Main} from "@/pages/Main";



export interface IRoutes {
  path: string;
  Element: FC;
}

export const ROUTES = {
  main: '/',
  skills: '/skills',
};

export const PublicRoutes: IRoutes[] = [
  {
    path: ROUTES.main,
    Element: Main,
  },

];
