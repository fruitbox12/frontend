import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IProps {
  component: any;
  layout: any;
  exact: boolean;
  path: string;
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const isAuthenticated = true;

  return (
    <Route
   
    />
  );
};

export { PrivateRoute };
