import { Avatar, Profile } from "./types/Profile";

export async function getProfile():Promise<Profile> {
  const result = await fetch('http://localhost:4000/api/profile',{
    method: 'GET',
    credentials: 'include',
  });
  return result.json();
 }
 export async function putAvatar(action:any):Promise<Avatar> {
  const result = await fetch('http://localhost:4000/api/profile/avatar',{
    method: 'PUT',
    credentials: 'include',
   body: action
  });
  return result.json();
 }
 
