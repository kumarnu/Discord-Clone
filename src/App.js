import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectUser} from "./features/userSlice";
import Login from './Login';
import { auth } from './firebase';
import {login, logout} from "./features/userSlice"

function App() {
  const dispatch = useDispatch(); // shoot data into the data layer
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("user is", authUser);
      if (authUser) {
        //The user is logged in, push into redux on data layer
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (    //If user is logged in
        <>
      {/* Sidebar */}
      <Sidebar/>

      {/* chat */}
      <Chat/>
      </>

      ): (
        <Login/>
      )}
     
     
    </div>
  );
}

export default App;
