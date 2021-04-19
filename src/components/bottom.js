import React from "react";
import { Search } from "./search";
function Bottom() {
    
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        
        <a className="navbar-brand" href="/">
          Home
        </a>
        <Search />
      </nav>
    </>
  );
}

export default Bottom;
