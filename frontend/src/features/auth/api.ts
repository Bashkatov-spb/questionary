import { AuthMessage, LoginInput, RegistrationInput, User } from './types/User';

export async function postRegistration(action:RegistrationInput):Promise<User> {
  const result = await fetch('http://localhost:4000/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
   body: JSON.stringify(action)
  });
  
  return result.json();
 }

 export async function postLogin(action:LoginInput):Promise<User> {
  const result = await fetch('http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
   body: JSON.stringify(action)
  });
  return result.json();
 }

 export async function getLogout():Promise<AuthMessage> {
  const result = await fetch('http://localhost:4000/api/auth/logout',{
    method: 'GET',
    credentials: 'include',
  });
  return result.json();
 }
