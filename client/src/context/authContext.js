import {createContext, useState, useEffect} from "react";
import axios from "axios";

const url = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_IP+":"+process.env.REACT_APP_BACKEND_PORT;

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [curUser, setCurUser] = useState(
    JSON.parse(localStorage.getItem('lcw_user')) || {username: 'Visitor'});
  
  const login = async (inputs) => {
    const res = await axios.post(url+'/api/login', inputs, { withCredentials: true });
    console.log('context login: ', res.data);
    setCurUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post(url+'/api/logout', {}, { withCredentials: true });
    setCurUser({username: 'Visitor'});
  };

  useEffect(() => {
    localStorage.setItem('lcw_user', JSON.stringify(curUser));
  }, [curUser])

  return (
    <AuthContext.Provider value={{curUser, login, logout}}>
      {children}
    </AuthContext.Provider>);
}

