import React from 'react'
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Relatedpost from './relatedpost';
import Blgdtlscomment from './blgdtlscomment';
import Leavecmnt from './leavecmnt';

function Blgdtlsrightpart() {
  return (
    <div className='blg-dtls-right-part'>
      <h3>6 Best Smartphone for e-Sport Pro Player</h3>
      <div className='admin-cmnt-part'>
        <div className='timing'>
          <SlCalender/>
          <p>12 JUNE 2021</p>
        </div>
        <div className='timing'>
          <CiUser/>
          <p>Admin</p>
        </div>
        <div className='timing'>
          <TfiCommentAlt/>
          <p>Comment</p>
        </div>
      </div>

      <div className='comnt-img'>
        <Image src='/Ad_3.png' width={1050} height={400} alt='cmnt-img' style={{objectFit: "cover"}}/>
      </div>
      <div className='blg-dtls-text'>
        <p>To support performance in playing, a professional e-sport player must use the right device. To support performance in playing, a professional e-sport player must use the right e-sport-support smartphone.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='blg-dtls-text-quote'>
        <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”</p>
        <h4>- Sam Alabama</h4>
      </div>

      <div className='blg-dtls-text'>
        <p>To support performance in playing, a professional e-sport player must use the right device. To support performance in playing, a professional e-sport player must use the right e-sport-support smartphone.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='blg-dtls-tag'>
        <div className='tags'>
          <h3>Tags:</h3>
          <p>Tips, Blog, Tech</p>
        </div>
        <div className='share'>
          <h3>Share:</h3>
          <FaTwitter/>
          <FaFacebookSquare/>
          <Image src='/link.svg' width={18} height={18} alt='link-img'/>
        </div>
      </div>
      <div className='rltd-post'>
        <Relatedpost/>
        <Blgdtlscomment/>
        <Leavecmnt/>
      </div>
    </div>
  )
}

export default Blgdtlsrightpart
