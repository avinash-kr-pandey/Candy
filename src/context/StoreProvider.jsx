import React, { useState } from "react";
import { Store } from "./Store";
function StoreProvider({ children }) {
  const [Token, setToken] = useState("");
  return (
    <Store.Provider value={{ Token, setToken }}>{children}</Store.Provider>
  );
}

export default StoreProvider;
