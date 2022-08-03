import React from 'react'
import userImg from '../Images/userPic.jpg'
import {MdEmail} from 'react-icons/md'
export default function Info(){
    return (
        <div className="info">
            <img src={userImg} alt='user-pic'/>
            <p className="user-name">Ahmed Anwar</p>
            <p id='user-position' className="user-position">Software Engineer</p>
            <a href= 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ahmed.anwar.eldokmak@gmail.com' target="_blank" rel="noopener noreferrer"><button id='emailbtn' className='email-button'><MdEmail className='email-icon'/> Email</button></a>
        </div>
    )
}