import React from "react";
import { Link } from "react-router-dom";

export default function accessDenied() {
    return (
    <header className="site-header">
		<div class="container">
		<p><ht class="back-ht"><Link className="text-link" to="/login-admin">A-Clinic</Link></ht></p>
      		<p><Link className="text-link" to="/AdministratorMP">Main Page</Link></p>
      		<p>Register Doctor</p>
      		<p><Link className="text-link" to="/register-patient">Register Patient</Link></p>
		</div>
	</header>
    )
};