import "./navbar.css"
import LogoSaquadBuster from "../../assets/logo-squad-buster.png"
import IconBarbarian from "../../assets/iconbarbarian.webp"
import CarWidget from "./CarWidget";

const NavBar = ()=>{
 return (
 <nav className="navbar">
    <div className="Brand">
        <img className="logo" src={LogoSaquadBuster} alt="" />
    </div>
    <div className="Menu">
        <ul className="Lista">
            <li className="links">
                <a className="one" href="#"> </a>
            </li>
            <li className="links">
                <a className="two" href="#"></a>
            </li>
            <li className="links">
                <a className="three" href="#"></a>
            </li>
            <li className="links">
                <a className="four" href="#"></a>
            </li>
        </ul>
        <CarWidget/>
    </div>
 </nav>
 );
};
export default NavBar ;