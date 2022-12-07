import React from "react";
import Row from 'react-bootstrap/Row';

export default function footer() {
    return (
     <footer class="bg-light text-center text-lg-start fixed-bottom bg-dark bg-gradient">
    <div class="text-center p-3 text-light" >
    <Row>
      <p class="text-light"> © Densys    Welcome to Densys, Health Care website</p>
    </Row>
     </div>
    </footer>

    // <footer className="site-footer">
    //     <p>© Densys</p>
    //     <p>Welcome to Densys, Health Care website</p>
    // </footer>
    )
};