import React from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin,FaGithubSquare} from 'react-icons/fa'
export default function Footer(){
    return (
        <div id='socialID' className='social-icons'>
            <ul >
                <li><a target= "_blank" href='https://www.facebook.com/Anwarzzz' ><FaFacebookSquare id='icon1' className='social--icon'/></a></li>
                <li><a target= "_blank" href='https://twitter.com/A7mdAnwr1' ><FaTwitterSquare id='icon2' className='social--icon'/></a></li>
                <li><a target= "_blank" href='https://www.instagram.com/a7mdanwr/' ><FaInstagramSquare id='icon3' className='social--icon'/></a></li>
                <li><a target= "_blank" href='https://www.linkedin.com/in/ahmed-anwar-eldokmak/' ><FaLinkedin id='icon4' className='social--icon'/></a></li>
                <li><a target= "_blank" href='https://github.com/AhmedAnwarz' ><FaGithubSquare id='icon5' className='social--icon'/></a></li>
            </ul>           
        </div>
    )
}