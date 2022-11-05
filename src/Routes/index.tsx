import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../Services/Validation/auth';

import PrivateRoutes from './privateRoute';
import PublicRoutes from './publicRoute';


const Routes = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>
      {logged ? <PublicRoutes /> : <PrivateRoutes />}
    </BrowserRouter>
  )
}

export default Routes;