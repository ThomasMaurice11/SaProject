import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const tokenObject = JSON.parse(localStorage.getItem('user'));

    if (tokenObject && tokenObject.token) {
      try {
        const decodedToken = jwt_decode(tokenObject.token);

        if (decodedToken) {
          setUserId(decodedToken._id);
        } else {
          console.error('Failed to decode token');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('Token or token property is missing');
    }
  }, []);

  return (
    <UserContext.Provider value={userId}>
      {children}
    </UserContext.Provider>
  );
};
