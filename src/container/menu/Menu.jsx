import React, {useState, useEffect} from 'react'

const Menu = ({
        reload, 
        setSearchKey
      }) => {

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Characters App</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search via character name" aria-label="Search" onChange={(e) => setSearchKey(e.currentTarget.value)} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
  );
}

export default Menu;
