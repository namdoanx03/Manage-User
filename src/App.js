import React, { useState } from 'react';
import './App.scss';
import Headers from './components/Header';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { UserContext} from './context/UserContext';
import { useContext, useEffect} from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  const { user, loginContext } = useContext(UserContext);
  console.log(user)

  useEffect(()=> {
    if(localStorage.getItem("token")){
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  }, [])
  
  return (
    <>
      <div className="app-container">
      <Headers />
        <Container>
          <AppRoutes/>
        </Container>
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </>
  )
}

export default App;
