import { useState } from "react";
import { StateContext } from "./useStateContext";

function ContextProvider({ children }) {
  const [pendingTran, setpendingTran] = useState(true);

  const value = { pendingTran };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export default ContextProvider;
