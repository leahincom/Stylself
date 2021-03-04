import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  artworks: [

  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

   
}