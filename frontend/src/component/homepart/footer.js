import React from 'react'
import Container from '../container/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoIosMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { companytitle, infotitle } from './categoryData';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Image from 'next/image';

function Footer() {
  return (
    <div className='footer-part'>
        <Container>
        <div className='footer-items'>
           <div className='logo-part'>
                <div className='logo-name'>
                    <h2>Tronix</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                </div>
                <div className='icon-element'>
                    <div className='icons'>
                        <FiPhone className='icon'/>
                        <p>+1234567890</p>
                    </div>
                    <div className='icons'>
                        <IoIosMail className='icon'/>
                        <p>lovia@support.com</p>
                    </div>
                </div>
            </div>
            
                <div className='company-items'>
                    <h3>Company</h3>
                    <ul>
                        {
                            companytitle.map((item, i) => (
                                <li key={i}>{item.titile}</li>
                            ))
                        }
                    </ul>
                </div>
            
                <div className='company-items'>
                    <h3>Information</h3>
                    <ul>
                        {
                            infotitle.map((item, i) => (
                                <li key={i}>{item.titile}</li>
                            ))
                        }
                    </ul>
                </div>

            <div className='company-items'>
                <h3>Follow Us</h3>
                <div className='follow-icon'>
                    <div className='f-icon'>
                        <FaInstagram/>
                    </div>
                    <div className='f-icon'>
                        <FaTwitterSquare/>
                    </div>
                    <div className='f-icon'>
                        <FaFacebookSquare/>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright-part'>
            <div className='copy-text'>
                <p>Copyright © 2021 Tronix. All Right Reseved</p>
            </div>
            <div className='card-item'>
                <Image src='/payment.png' width={130} height={32} alt='vector'/>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Footer
