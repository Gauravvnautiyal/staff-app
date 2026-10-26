import { createContext, useState } from "react";
import stafflist from "../stafflist";

export const StaffContext = createContext(
  {
    staff: []
  }
);

export function StaffProvider({ children }) {
  const [staff, setStaff] = useState(stafflist);

  const value = { staff };

  return (
    <StaffContext.Provider value={value}>
      {children} 
      </StaffContext.Provider>
  );
}