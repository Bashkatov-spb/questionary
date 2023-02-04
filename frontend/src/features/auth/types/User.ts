export interface Res { message:string; user:string }

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  message?:string;
}
export interface LoginInput {
  email: string,
  password: string,
}

export interface RegistrationInput {
  name: string,
  email: string,
  password: string,
  password2: string,
}

export interface AvatarInput {
 img: string,
}

export interface AuthState {
  user: undefined | User,
  error: undefined | string,
}

export interface AuthMessage {
  message: string,
}
