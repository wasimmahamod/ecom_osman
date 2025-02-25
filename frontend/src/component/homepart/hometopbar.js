import React from 'react'
import './style.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import HomeMenuBar from './HomeMenuPart';

function HomeTopBar() {
    return (
        <div>
            <div className='home-top'>
                <div className='top-icon'>
                    <FaInstagram />
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <IoLogoLinkedin />
                </div>
                <div className='top-right'>
                    <div className='right-element'>
                        <FiPhone className='right-icon' />
                        <p className='right-text'>+12 345 6789 0</p>
                    </div>
                    <div className='right-element'>
                        <IoIosMail className='right-icon' />
                        <p className='right-text'>support@tronix.com</p>
                    </div>
                    <div className='right-element'>
                        <FaRegUser className='right-icon' />
                        <p className='right-text'>Account</p>
                    </div>
                </div>
            </div>
            {/* <div className='mt-8 mb-16'>
                <HomeMenuBar />
            </div> */}
        </div>
    )
}

export default HomeTopBar