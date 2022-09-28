import React, { useEffect, useState } from "react";
import { getUser } from "../app/Actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

export const UserContext = React.createContext();

const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.user);
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
    dispatch(getUser('currentuser'));
  }, []);
  useEffect(() => {
      if(!user){ 
    console.log("cccc")
    dispatch(getUser())
    setCurrentUser(user);
      }
  }, [user]);
  if(currentUser){ 
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );}
  else{
      return null
  }
};

export default RequireAuth;
