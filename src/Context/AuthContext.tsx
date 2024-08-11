import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
interface AuthContextType {
  saveUserData: () => void;
  userData: any;
}
export let AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider(props: any) {
  const [userData, setUserData]: any = useState<any>(null);

  let saveUserData = (): any => {
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
