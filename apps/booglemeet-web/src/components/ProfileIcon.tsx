import React from 'react';
import Type_UserInfo from '@/types/Type_UserInfo';

type ProfileIconInfo = {
    userInfo: Type_UserInfo;
    iconPath: string;
    iconAlt: string;
}

function ProfileIcon({ userInfo: userInfo, iconPath, iconAlt }: ProfileIconInfo) {
    const toolTipLabel = ['Google Account', userInfo.userName, userInfo.email];
    return (
        <div className='outer_mast_icon profile_icon'>
            <div className='mast_icon'>
                <img src={iconPath} alt={iconAlt} />
                <img className='mast_profile_pic' src={userInfo.thumbNail} alt='Profile Picture' />
            </div>
            <span>{toolTipLabel.map(line => {
                return <span key={line}>{line}</span>
            })}</span>
        </div>
    )
}

export default ProfileIcon