import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const WebContext = createContext();

const WebContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [loggedin, setLoggedIn] = useState(!!token);
  const navigate = useNavigate();
  const [name,setName] = useState();
  const [products,setProducts] = useState([])

  // Save token to local storage and set login state
 
const saveToken = (newToken, userName) => {
  setToken(newToken);
  localStorage.setItem('token', newToken);
  setName(userName); // Set the user's name when saving the token
  setLoggedIn(true);  
};

const getProductData = async () =>{
  try {
    const response = await axios.get(backendUrl + '/api/products/list')
    if(response.data.success){
      // console.log("Data::",response.data.products);
      
      setProducts(response.data.products)
    }
  } catch (error) {
    console.log(error);
  }
}

useEffect(() =>{
  getProductData()
},[])

  // Remove token from local storage and update login state
  const removeToken = () => {
    setToken('');
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/login');
  };

  // Use effect to handle page refresh and maintain login state
  useEffect(() => {
    if (token) {  
      setLoggedIn(true);
    }else {
      setLoggedIn(false); // Ensure the loggedin state is updated correctly
    }
  }, [token]);

  const value = {
    backendUrl,
    token,
    setToken: saveToken,
    removeToken,
    loggedin,
    setLoggedIn,
    navigate,
    name,
    setName,
    products,
  };

  // console.log(products);
  

  return (
    <WebContext.Provider value={value}>
      {props.children}
    </WebContext.Provider>
  );
};

export default WebContextProvider;
