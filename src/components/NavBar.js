import "../App.css";
import "./Navbar.css"
import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";


function NavBar() {
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)

const style = {
  marginLeft: "-30px",
  textAlign: "center",
}

    return (
      <>
     
          <Link  to="/" className='menu-bars'> 
            <icon onClick={showSidebar} style={style} className="nav-color"><br /><FiMenu /></icon>
          </Link>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <div className='navbar-toggle'>
              <Link  to="/" className='menu-bars' /> 
            </div>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
                </li>
              )
            })}
            
          </ul>
        </nav>

      </>
     

    );
 
}

export default NavBar;

