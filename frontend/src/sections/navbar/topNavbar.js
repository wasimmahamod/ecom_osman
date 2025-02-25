import React from "react";
import InstagramIcon from "../../../public/assets/svg/instagram";
import Facebook from "../../../public/assets/svg/facebook";
import TwitterX from "../../../public/assets/svg/twitter";
import Linkedin from "../../../public/assets/svg/linkedin";
import Telephone from "../../../public/assets/svg/telephone";
import Email from "../../../public/assets/svg/email";
import Account from "../../../public/assets/svg/account";

const TopNavbar = () => {
  return (
    <>
      <div className="topNavbar">
        <div className="socimedia">
          <div className="instagram">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className="facebook">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
          <div className="twitter">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterX />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="contact">
          <div className="icon">
            <Telephone />
            <span>+12 345 6789 0</span>
          </div>
          <div className="icon">
            <Email />
            <span>support@tronix.com</span>
          </div>
          <div className="icon">
            <Account />
            <span>Account</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
