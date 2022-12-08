import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import { CDBFooter, CDBBox, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import logo from '../image/densys2.png'

export default function footer() {
  return (
<footer class="text-center text-lg-start bg-light text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
             <img src={logo} className="logo rounded-circle position-relative" />
             <i class=""></i>Densys
          </h6>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="/main">Main Page</Link>
          </p>
          <p>
            <Link to="/appointment-form">Appointment</Link>
          </p>  
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i>Republic of Kazakhstan, 010000, Astana city, 53 Kabanbay Batyr Ave.</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            nu@nu.edu.kz
          </p>
          <p><i class="fas fa-phone me-3"></i>8 (7172) 70 66 88</p>
        </div>
      </div>
    </div>
  </section>
  

 
  <div class="text-center p-4">
    © 2022 Densys:
    <p class="text-reset fw-bold" >Welcome to Densys, Health Care Clinic</p>
  </div>
  
</footer>
  );
};

// import React from "react";
// import Row from 'react-bootstrap/Row';

// export default function footer() {
//     return (
//      <footer class="bg-light text-center text-lg-start fixed-bottom bg-dark bg-gradient">
//     <div class="text-center p-1 text-light" >
//     <Row>
//       <p class="text-light"> © Densys    Welcome to Densys, Health Care website</p>
//     </Row>
//      </div>
//     </footer>

//     // <footer className="site-footer">
//     //     <p>© Densys</p>
//     //     <p>Welcome to Densys, Health Care Clinic</p>
//     // </footer>
//     )
// };