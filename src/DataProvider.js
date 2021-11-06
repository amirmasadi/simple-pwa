import { useState, createContext } from "react";

export const UserContext = createContext(null);
export const SetUserContext = createContext(null);
export const ParamContext = createContext(null);
export const SetParamsContext = createContext(null);

export default function DataProvider({ children }) {
  const [user, setUser] = useState(null);
  const [myParams, setMyParams] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <SetParamsContext.Provider value={setMyParams}>
          <ParamContext.Provider value={myParams}>
            {children}
          </ParamContext.Provider>
        </SetParamsContext.Provider>
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}
