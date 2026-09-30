import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

const API = import.meta.env.VITE_API;

const RoutinesContext = createContext();

export function RoutinesProvider({ children }) {
  const [routines, setRoutines] = useState([]);

  async function getRoutines() {
    const response = await axios.get(API + "/routines");
    //console.log(response.data);
    setRoutines(response.data);
  }

  useEffect(() => {
    getRoutines();
  }, []);

  const value = { routines };
  return (
    <RoutinesContext.Provider value={value}>
      {children}
    </RoutinesContext.Provider>
  );
}

export function useRoutines() {
  const context = useContext(RoutinesContext);
  if (!context) throw Error("useContext must be used within AuthProvider");
  return context;
}
