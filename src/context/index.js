import React, {createContext, useState} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState(['coucou']);
  const a = 'hello';

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
        a,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
