import { createContext, ReactNode, useContext, useState } from 'react';
import { IUser } from '../../../config/redux/auth/types';

export type AuthRoleAlternativesData = {
  role: IUser['role'];
  setRole: (role: IUser['role']) => void;
};

export interface AuthRoleAlternativesContextProviderProps {
  children: ReactNode;
}

const AuthRoleAlternativesContext = createContext(
  {} as AuthRoleAlternativesData
);

export const AuthRoleAlternativesContextProvider = ({
  children,
}: AuthRoleAlternativesContextProviderProps) => {
  const [role, setRole] = useState<IUser['role']>('student');


  return (
    <AuthRoleAlternativesContext.Provider value={{ role, setRole }}>
      {children}
    </AuthRoleAlternativesContext.Provider>
  );
};

export const useAuthRoleAlternativesContext = () =>
  useContext(AuthRoleAlternativesContext);
