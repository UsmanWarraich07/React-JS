import PropType from "prop-types";
import { createContext, useContext, useReducer } from "react";

AuthProvider.propTypes = {
  children: PropType.any,
};

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthentication: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthentication: true,
      };
    case "logout":
      return { ...state, user: null, isAuthentication: false };
  }
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthentication }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login = function (email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      return dispatch({ type: "login", payload: FAKE_USER });
  };
  const logout = function () {
    dispatch({ type: "logout" });
  };
  <AuthContext.Provider value={(user, isAuthentication, login, logout)}>
    {children}
  </AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("cities context was use outside the contextProvider.");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
