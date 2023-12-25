import { useState, useEffect } from 'react';
import axios from 'axios'; 
import ProfileSearchForm from './ProfileSearchForm';

const BASE_URL ='https://api.github.com/users';

export default function ProfileViewer(){
    const [username, setUsername] = useState('SudeevDivakar');
    const [profile, setProfile] = useState({data: null, isLoading: true});

    useEffect(function fethcUserOnUsernameChange(){
        async function fetchUser(){
            const userResult = await axios.get(`${BASE_URL}/${username}`);
            setProfile({data: userResult.data, isLoading: false});           
        }
        fetchUser();
    },[username]);

    function search(user){
        setProfile({data: null, isLoading: true});
        setUsername(user);
    }
    if(profile.isLoading) return <i>Loading...</i>
    return(
        <div>
            <ProfileSearchForm search={search}/>
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url} alt="" />
        </div>
    );
}