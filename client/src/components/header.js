import React from "react";
import { Link } from "react-router-dom";

export default function accessDenied() {
    return (
    <header className="site-header">
		<div className="container">
		<p><ht className="back-ht"><Link className="text-link" to="/">A-Clinic</Link></ht></p>
      		<p><Link className="text-link" to="/">Main Page</Link></p>
      		<p>Register Doctor</p>
      		<p><Link className="text-link" to="/register/patient">Register Patient</Link></p>
		</div>
	</header>
    )
};