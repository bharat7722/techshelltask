import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
		  <Link style={{textDecoration:"none"}} to={"/"}>
      <li className="nav-item active">
        <a className="nav-link" href="#">Get Data</a>
      </li>
		</Link>
		<Link style={{textDecoration:"none"}} to={"/add-customer"}>
      <li className="nav-item">
        <a className="nav-link" href="#">Add Customer</a>
      </li>
	  		</Link>
		<Link style={{textDecoration:"none"}} to={"/post-job"}>
      <li className="nav-item">
        <a className="nav-link" href="#">Post job</a>
      </li>
	  	</Link>
		  <Link style={{textDecoration:"none"}} to={"/add-mobile"}>
      <li className="nav-item">
        <a className="nav-link" href="#">Add Mobile Number</a>
      </li>
	  	</Link>
		  <Link style={{textDecoration:"none"}} to={"/update-profile/"}>
      <li className="nav-item">
        <a className="nav-link" href="#">Update Profile</a>
      </li>
	  	</Link>
    </ul>
  </div>
</nav>
  )
}
