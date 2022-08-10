import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import WebsiteLayout from '../layout/Website/Website';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <WebsiteLayout />
    </BrowserRouter>
  );
};

export default App;
