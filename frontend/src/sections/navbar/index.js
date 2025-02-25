import Container from "@/components/container";
import TopNavbar from "./topNavbar";
import "./style.css"
import BottomNavbar from "./bottomNavbar";

export default function Navbar() {
  return (
   <>
    <Container>
     <TopNavbar/>
     <BottomNavbar/>
    </Container>
   </>
  );
}