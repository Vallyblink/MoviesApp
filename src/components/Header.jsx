import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
   <nav className="navbar navbar-dark bg-primary">
        <div>
             <ul className="nav">
                <li className="nav-item">
                      <NavLink className="nav-link text-white" aria-current="page" to="/">
                          Home
                      </NavLink>
                </li>
                <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/movies">
                          Movies
                      </NavLink>
                </li>
                <li className=" nav-item ">
                      <NavLink className="nav-link text-white" to="/movieId">
                          Movie
                      </NavLink>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li> */}
            </ul>
        </div>
   </nav>
  )
}

export default Header