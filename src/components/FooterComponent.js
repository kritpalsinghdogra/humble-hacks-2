import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="bg-yellow ">
    <div className="container">
      <div className="row py-4 d-flex align-items-center">

        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Keep yourself updated by connecting with us!</h6>
        </div>
  
        <div  className="col-md-6 col-lg-7 text-center text-md-right">

          
          <a className="btn btn-social-icon btn-facebook mx-2">
            <i  className="fab fa-facebook-f  "> </i>
          </a>
          <a className="btn btn-social-icon btn-twitter mx-2">
            <i className="fab fa-twitter "> </i>
          </a>
          <a className="btn btn-social-icon btn-linkedin mx-2">
            <i className="fab fa-linkedin "> </i>
          </a>
          <a className="btn btn-social-icon btn-instagram mx-2">
            <i className="fab fa-instagram "> </i>
          </a>
          <a className="btn btn-social-icon btn-github mx-2">
            <i className="fab fa-github "> </i>
          </a>
          <a className="btn btn-social-icon btn-whatsapp mx-2">
            <i className="fab fa-whatsapp "> </i>
          </a>
          <a className="btn btn-social-icon btn-telegram mx-2">
            <i className="fab fa-telegram "> </i>
          </a>
          <a className="btn btn-social-icon btn-discord mx-2">
            <i className="fab fa-discord "> </i>
          </a>

        </div>
       
      </div>

    </div>
  </div>
    </div>
    )
}

export default Footer;