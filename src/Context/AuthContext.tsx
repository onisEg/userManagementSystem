import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

export default function AuthContextProvider(props: any) {
  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encodedToken: any = localStorage.getItem("userToken");
    let decodedToken: any = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveUserData, userData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
