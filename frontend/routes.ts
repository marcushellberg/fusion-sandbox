import { Route } from '@vaadin/router';
import './views/about/about-view';

export type ViewRoute = Route & { title?: string; children?: ViewRoute[] };

export const views: ViewRoute[] = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v19/flow/typescript/creating-routes.html)
  {
    path: '',
    component: 'about-view',
    title: '',
  },
  {
    path: 'about',
    component: 'about-view',
    title: 'About',
  },
];
export const routes: ViewRoute[] = [...views];
