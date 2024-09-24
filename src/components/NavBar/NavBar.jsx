import "./navbar.css"
import LogoSaquadBuster from "../../assets/logo-squad-buster.png"
import CarWidget from "./CarWidget";
import { Link,NavLink } from "react-router-dom";

const NavBar = ()=>{
 return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid nav-custom">
    <div className="container-fluid barra-logo">
    <Link to="/" className="navbar-brand" ><img className="logo" src={LogoSaquadBuster} alt="" /></Link>
    {/* <a class="navbar-brand" href="#"><img className="logo" src={LogoSaquadBuster} alt="" /></a> */}
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="container-fluid collapse navbar-collapse Menu " id="navbarNav">
      <ul className="navbar-nav Lista">
        <li className="nav-item links">
          <Link to="/categoria/Personajes" className="nav-link one" aria-current="page"></Link>
        </li>
        <li className="nav-item links">
          <Link to="/categoria/Hechizos" className="nav-link two" ></Link>
        </li>
        <li className="nav-item links">
          <Link to="/categoria/Mobs" className="nav-link three" ></Link>
        </li>
        <li className="nav-item links">
          <Link to="/categoria/Gemas" className="nav-link four" aria-disabled="true"></Link>
        </li>
      </ul>
      <CarWidget/>
    </div>
  </div>
</nav>
//  <nav className=".container-fluid navbar">
//     <div className="Brand">
//         <img className="logo" src={LogoSaquadBuster} alt="" />
//     </div>
//     <div className="Menu">
//         <ul className="Lista">
//             <li className="links">
//                 <a className="one" href="#"> </a>
//             </li>
//             <li className="links">
//                 <a className="two" href="#"></a>
//             </li>
//             <li className="links">
//                 <a className="three" href="#"></a>
//             </li>
//             <li className="links">
//                 <a className="four" href="#"></a>
//             </li>
//         </ul>
//         <CarWidget/>
//     </div>
//  </nav>
 );
};
export default NavBar ;