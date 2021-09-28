import { createContext, useReducer } from "react";

const INTITAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const context = createContext(INITIAL_STATE);

export const contextProvider = ({ children }) => {};
