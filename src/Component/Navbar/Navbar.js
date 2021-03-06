import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };


  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };

  }, []);



  return (
    <>
    <nav>

    {(toggleMenu || largeur > 500) && (

      <ul className="liste">
      <Link to='/'>
        <li className="items" >Accueil</li>
      </Link>
      <Link to='/formulaire'>

        <li className="items">Information</li>
      </Link>
     

      </ul>
    )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
    </>
  );
}

export default Navbar;
