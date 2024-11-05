import { useContext } from "react";
import { DataContext } from "../context/appContext";

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
