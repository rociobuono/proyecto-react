import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layouts
import Frontend from './Layouts/Frontend';
import Backoffice from './Layouts/Backoffice';

const RouterApp = (props) => {
  const [user, setUser] = useState(null);
  const [protectedRoutes, setProtectedRoutes] = useState(<></>);

  const baseFrontRoutes = (route, children) => {
    return (
      <Route 
        path={route} 
        element={
          <Frontend 
            children={children} 
          />
        } 
      />
    );
  }

  const baseBakendRoutes = (route, children) => {
    return (
      <Route 
        path={route} 
        element={
          <Backoffice 
            children={children} 
          />
        } 
      />
    )
  }

  useEffect(() => {
    if (true) {
      setProtectedRoutes(
        <>
          
        </>
      );
    } else {
      setProtectedRoutes(<></>);
    }
  }, [user])


  return (
    <>
      <BrowserRouter>
          <Routes>
            {protectedRoutes}
          </Routes>
      </BrowserRouter>
    </>

  );
}

export default RouterApp;