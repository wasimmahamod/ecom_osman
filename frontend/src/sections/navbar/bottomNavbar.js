import Link from "next/link";
import Logo from "../../../public/assets/svg/logo";
import "./style.css";
import SearchBar from "@/components/searchbar";
import Bag from "../../../public/assets/svg/bag";
import Email from "../../../public/assets/svg/email";

export default function BottomNavbar() {
  return (
    <>
      <div className="bottom_navbar">
        <div>
          <Logo />
        </div>
        <div className="navbar_menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="shopping_alert">
          <div className="bag">
            <Bag />
            <div className="alert">
              <span>99</span>
            </div>
          </div>
          <div>
            <Email />
          </div>
        </div>
      </div>
    </>
  );
}
