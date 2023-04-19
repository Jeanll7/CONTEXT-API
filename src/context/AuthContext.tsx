import { createContext, ReactNode, useState } from "react";

interface UserProps {
  name: string;
  email: string;
}

interface AuthContextData {
  user: {
    name: string;
    email: string;
  };
  setUser: ({ name, email }: UserProps) => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const initialState: AuthContextData = {
  user: {
    name: "",
    email: "",
  },
  setUser({ name, email }: UserProps) {},
};

export const AuthContext = createContext<AuthContextData>(initialState);

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [data, setData] = useState<UserProps>({
    name: "",
    email: "",
  });

  function handleSetUser({ name, email }: UserProps) {
    setData({
      name,
      email,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user: data,
        setUser: handleSetUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
