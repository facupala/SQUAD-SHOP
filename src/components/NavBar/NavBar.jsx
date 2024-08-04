import "./navbar.css"
import LogoSaquadBuster from "../../assets/logo-squad-buster.png"

import CarWidget from "./CarWidget";

const NavBar = ()=>{
 return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid nav-custom">
    <div className="container-fluid barra-logo">
    <a class="navbar-brand" href="#"><img className="logo" src={LogoSaquadBuster} alt="" /></a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container-fluid collapse navbar-collapse Menu " id="navbarNav">
      <ul class="navbar-nav Lista">
        <li class="nav-item links">
          <a class="nav-link one" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item links">
          <a class="nav-link two" href="#"></a>
        </li>
        <li class="nav-item links">
          <a class="nav-link three" href="#"></a>
        </li>
        <li class="nav-item links">
          <a class="nav-link four" aria-disabled="true"></a>
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