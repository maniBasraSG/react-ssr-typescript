import loadable from '@loadable/component';
import React from 'react';
import { useRoutes } from 'react-router-dom';

const Home = loadable(() => import('./Home'));
const About = loadable(() => import('./About'));

function AppRoutes() {
  const element = useRoutes([
    // These are the same as the props you provide to <Route>
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    // Not found routes work as you'd expect
    { path: '*', element: <div>No Page Found!</div> },
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}

export default AppRoutes;
