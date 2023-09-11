
import React, { createContext, useContext, useState } from "react";


interface IUser {
  user: any;
  CurrentUser: (values: any, userId: any) => void;
  LogOutUser: () => Promise<any>;
}

const UserContext = createContext<IUser>({
  user: null,
  CurrentUser(values, userId) {
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


  const [user, setUser] = useState<any>({} as any);

  const CurrentUser = async (values: any, UserId: any) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/current/${UserId}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values)
      }
      )
        .then((data) => {
          setUser(data)

        });
    } catch (err) {
      console.log(err);

    };
  };

  const LogOutUser = async () => {
    // return removeCookie("userId");
  };

  return (
    <UserContext.Provider value={{ user, CurrentUser, LogOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
