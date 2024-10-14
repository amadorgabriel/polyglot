export type IUser = {
  id: string;
  name: string;
  email: string;
  role: 'teacher' | 'student';
};

export type IAuth = {
  user: IUser | null;
  token: string | null;
};
