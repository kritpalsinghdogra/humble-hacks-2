import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader,ModalFooter, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
    import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
         this.state = {
            modal:false,
            isNavOpen: false,
            isModalOpen: false
        };
            this.toggle = this.toggle.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
         this.toggleModal = this.toggleModal.bind(this);

                this.handleLogin = this.handleLogin.bind(this);

      }
toggle() {
        this.setState({modal: !this.state.modal});
    }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });

      }
  toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
  handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return(
            <div>
                <Navbar className="fixed-top shadow" dark expand="md">
                    <div className="container-fluid">
                        
                        <NavbarBrand className=" d-md-none" href="/"><img className="logo" src='/assets/images/hack-logo.png' height="80" width="80" alt='Humble-Hacks' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-between text-center">
                            <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link onhover-bb onhover-yellow raleway text-yellow-hover"  to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link onhover-bb onhover-yellow raleway text-yellow-hover" to='/aboutus'>Item</NavLink>
                            </NavItem>
                            </Nav>
                             <NavbarBrand className="mx-5 d-none d-md-block " href="/"><img className="logo" src='assets/images/hack-logo.png' height="80" width="80" alt='Ristorante Con Fusion' /></NavbarBrand>
                        
                            <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink className="nav-link onhover-bb onhover-yellow raleway text-yellow-hover"  to='/menu'>Item</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link onhover-bb onhover-yellow raleway text-yellow-hover" to='/contactus'>Item</NavLink>
                            </NavItem>
                            </Nav>

                
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 text-center text-sm-left">
                                <h1 className="grey-light">Humble Hacks</h1>
                                <h3>Transcending Reality</h3>
                                <p>MyMLH is an API that enables hackers to easily share  and manage their data in one click
                                </p>
                            <Button onClick={ this.toggle} className="btn btn-yellow raleway shadow">Register Here <i className="fa fa-arrow-circle-right"></i></Button>
                            </div>
                            <div className="col-12 col-sm-6 text-center">
                                 <img className="img-fluid w-75 w-lg-50" src="/assets/images/hack-vector.png" alt="hack-vector"/>

                            </div>
                        </div>
                        
                    </div>
                    <img className="img-fluid" src="/assets/images/bottom-abstract.png" alt="bottom-abstract"/>

                </Jumbotron>
               <Modal isOpen={this.state.modal} fade={true}
                       toggle={this.toggle} >
                    <ModalHeader className="bg-grey-dark text-center" toggle={this.toggle}>
                        <h3 className="h-center raleway yellow text-center">REGISTER</h3>
                    </ModalHeader>
                    <ModalBody>
                      <form className="hh-form">
        
        <div className="form-group row mb-5 hh-row">
          <div className="col-2 col-sm-1 icon-col"><i className="v-center fa fa-lg fa-user prefix grey-text "></i></div>
          <div className="col-10 col-sm-11 "> 
          <input placeholder="Enter Your Name" type="text" id="orangeForm-name" className="form-control validate"/>
          </div>
          
        </div>
        <div className="form-group row mb-5 hh-row">
          <div className="col-2 col-sm-1 icon-col"><i className="v-center fa fa-lg fa-envelope prefix grey-text "></i></div>
          <div className="col-10 col-sm-11 "> <input placeholder="Enter Email Address" type="email" id="orangeForm-name" className="form-control validate "/>
          </div>
          
        </div>
        <div className="form-group row mb-5 hh-row">
          <div className="col-2 col-sm-1 icon-col"><i className="v-center fa fa-lg fa-lock prefix grey-text "></i></div>
          <div className=" col-10 col-sm-11"> <input placeholder="Enter Password" type="password" id="orangeForm-name" className="form-control validate"/>
          </div>
          
        </div>
        <div className="text-center mt-4">
          <Button className="btn btn-yellow-alt raleway shadow w-100 rounded-pill">Login <i className="fa fa-sign-in-alt"></i></Button>
        </div>
      </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;