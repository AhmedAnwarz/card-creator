import React from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin,FaGithubSquare} from 'react-icons/fa'
export default function Footer(){
    return (
        <div className='social-icons'>
            <ul >
                <li><a href='#' ><FaFacebookSquare className='social--icon'/></a></li>
                <li><a href='#' ><FaTwitterSquare className='social--icon'/></a></li>
                <li><a href='#' ><FaInstagramSquare className='social--icon'/></a></li>
                <li><a href='#' ><FaLinkedin className='social--icon'/></a></li>
                <li><a href='#' ><FaGithubSquare className='social--icon'/></a></li>
            </ul>           
        </div>
    )
}