import React from "react";
import {v4 as uuid} from "uuid"
function NavBar() {
  const links = ["home", "about", "projects"];
  const myLinks = links.map((link) => {
    return <a key={{ link }} href={{ link }}>{ link }</a>;
  })

  return <nav>{links.map((link)=> <a key={uuid()}href={`#${link}`}>{link}</a> )}
   
  </nav>;
}

export default NavBar;
