import "./navbar.css"
import LogoSaquadBuster from "../../assets/logo-squad-buster.png"
import CarWidget from "./CarWidget";

const NavBar = ()=>{
 return (
 <nav className="navbar">
    <div className="Brand">
        <img className="logo" src={LogoSaquadBuster} alt="" />
    </div>
    <div className="Menu">
        <ul className="Lista">
            <li>
                <a href="#">Personajes</a>
            </li>
            <li>
                <a href="#">Hechizos</a>
            </li>
            <li>
                <a href="#">Mobs</a>
            </li>
            <li>
                <a href="#">Gems</a>
            </li>
        </ul>
        <CarWidget/>
    </div>
 </nav>
 );
};
export default NavBar ;