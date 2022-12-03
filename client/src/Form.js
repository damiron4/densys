import { useState } from 'react';
import { Link , useParams} from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
const {id} = useParams();

	
return (
	
	<div>
	<header className="site-header">
		<div class="container">
			<p><ht class="back-ht">A-Clinic</ht></p>
      		<p>Main Page</p>
      		<p>Message</p>
      		<p>Health Care Services</p>
		</div>
	</header>

	
	<section class= "features">
	<h1>Form for id: {id}</h1>

	</section>
	<footer class="site-footer">
      <div class="con">
        <p>© A-Clinic</p>
        <p>Welcome to A-Clinic, Health Care website</p>
      </div>
    </footer>
	</div>
);
}
