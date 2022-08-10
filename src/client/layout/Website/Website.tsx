import React from 'react';
import { Link } from 'react-router-dom';

import AppRoutes from '../../Routes';

/* check authentication on each route change */
// export const renderRoutes = routes => {
//   return routes
//     ? routes.map((route, i) => (
//         <Route
//           key={route.key || i}
//           path={route.path}
//           exact={route.exact}
//           strict={route.strict}
//           render={props => {
//             return <route.component {...props} route={route} />;
//           }}
//         />
//       ))
//     : null;
// };

const WebsiteLayout: React.FC = () => {
  return (
    <div className="site-wrapper">
      <h1>Hey Website work</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AppRoutes />
    </div>
  );
};

export default WebsiteLayout;
