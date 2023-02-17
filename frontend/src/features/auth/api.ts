import { AuthMessage, LoginInput, PayloadAuth, RegistrationInput} from './types/User';

export async function postRegistration(action:RegistrationInput):Promise<PayloadAuth> {
  const result = await fetch('http://localhost:4000/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(action),
  });

  return result.json();
}

 export async function postLogin(action:LoginInput):Promise<PayloadAuth> {
  const result = await fetch('http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(action),
  });
  return result.json();
}

 export async function getLogout():Promise<PayloadAuth> {
  const result = await fetch('http://localhost:4000/api/auth/logout',{
    method: 'GET',
    credentials: 'include',
  });
  return result.json();
}

 export async function getCheckUser():Promise<PayloadAuth> {
  const result = await fetch('http://localhost:4000/api/auth/checkUser',{
    method: 'GET',
    credentials: 'include',
  });
  return result.json();
 }
