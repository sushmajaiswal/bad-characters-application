import React from "react";

import {Container, Jumbotron} from "react-bootstrap";
import { ToastContainer } from 'react-toastify';

import Menu from "../../container/menu/Menu";

const Base = ({
  children,
  reload, 
  setSearchKey
}) => {
  return (
    <div>   
        <Menu reload={reload} setSearchKey={setSearchKey} /> 
        
        <Container>
          <ToastContainer />
          {children}
        </Container>

        <div className="fixed-footer">
          <Jumbotron className="header text-white text-center py-3 mb-0">   
            <h5 className="font-weight-bold pb-1">Follow us</h5>
            <ul className="social-network social-circle">
              <li><a href="/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="/" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a href="/" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/" className="icoReddit" title="Reddit"><i className="fa fa-reddit"></i></a></li>

            </ul>	
            <div className="row mt-3">
              <div className="col-md-12 mt-1 copy" style={{height: "45px"}}>
                <p className="font-weight-bold">&copy; Copyright 2020 - Company Name.  All rights reserved.</p>
              </div>
            </div>
          </Jumbotron>
        </div>
    </div>
  );
};

export default Base;
