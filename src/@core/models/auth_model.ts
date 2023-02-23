import { IUser, IUserFormValues } from "./user_model";

export type loginProps = {
  email: string;
  password: string;
};
export type loginResponse = {
  token: string;
  user: IUserFormValues;
};

export type registerProps = {
  email: string;
  password: string;
  name: string;
  user_type: string;
};

export interface AuthContextType {
  getData: () => void;
  login: (data: loginProps) => void;
  register: (data: registerProps) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: JSX.Element;
}
