import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initProfileUser, updateAvatar } from './profileSlise';
import styles from './Profile.module.scss';

function Profile(): JSX.Element {
  const [state,setState] = useState(false)
  const dispatch = useAppDispatch();
  const { avatar ,error} = useSelector((state:RootState) => state.profile);

  useEffect(()=>{
    dispatch(initProfileUser())
  },[])

  const saveNewAvatar = async(e:any) => {
    const picturesData = [...e.target.files];
    try {
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append("homesImg", img);
      });
      setState(false)
      dispatch(updateAvatar(data));
    } catch (error) {}
  }
  return (
    <>
    <div className={styles.avatar}>
      <img  src={`http://localhost:4000${avatar}`}  alt="avatar" />
    </div>
   
    {state ? 
      <input  type="file" onChange={saveNewAvatar}/>
      :
      <button onClick={()=>setState(true)} type="button">изменить</button>
      }
      <h1>{error}</h1>
    </>
  );
}

export default Profile;
