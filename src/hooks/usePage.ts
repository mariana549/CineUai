import { useContext } from "react";
import { PageContext } from "../context/appContext";

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a PageProvider");
  return context;
};
