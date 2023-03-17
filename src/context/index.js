import React, {createContext, useState} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState(['coucou']);

  const deleteFavorite = fav => {
    setFavorites(prevFavorites =>
      prevFavorites.filter(favorite => favorite !== fav),
    );
  };

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
        deleteFavorite,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
