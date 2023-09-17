
import React, { createContext, useContext, useState } from "react";
import { IAuthSignUp } from "./model";


interface IUser {
  user: any;
  CurrentUser: (userId: any) => void;
  LogOutUser: () => Promise<any>;
}

const UserContext = createContext<IUser>({
  user: null,
  CurrentUser(userId) {
    return null;
  },
  LogOutUser() {
    return null as any;
  },
});
export const useUserContext = () => {
  let context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

interface IProps {
  children: React.ReactNode;
}


export const UserContextProvder: React.FC<IProps> = ({ children }) => {


  const [user, setUser] = useState<IAuthSignUp>();

  const CurrentUser = async (UserId: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/current/${UserId}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();

      setUser(userData);
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };


  const LogOutUser = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/logout`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      })
    } catch (err) {
      console.log(err);

    };

  };

  return (
    <UserContext.Provider value={{ user, CurrentUser, LogOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
