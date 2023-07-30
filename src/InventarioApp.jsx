import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from "./ViewPrivate/Context/UserProvider";
import { Create, Read } from "./ViewPrivate/index";
import { HomePage, Login, CodigoQR } from './ViewPublic';

export const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Create/*' element={<Create />} />
        <Route path='/Read/*' element={<Read />} />
        <Route path='/Inicio' element={<HomePage />} />
        <Route path='/Catalogo/:Pk/*' element={<CodigoQR />} />
        <Route path='/*' element={<Error alert="404 not found" />} />
      </Routes>
    </UserProvider>
  );
};
