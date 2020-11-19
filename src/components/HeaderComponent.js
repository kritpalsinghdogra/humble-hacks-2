import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
    import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
         this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
            
        this.toggleNav = this.toggleNav.bind(this);
         this.toggleModal = this.toggleModal.bind(this);

                this.handleLogin = this.handleLogin.bind(this);

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
                        
                        <NavbarBrand className=" d-md-none" href="/"><img className="logo" src='assets/images/hack-logo.png' height="80" width="80" alt='Humble-Hacks' /></NavbarBrand>
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
                            <Button className="btn btn-yellow raleway shadow">Register Here <i className="fa fa-arrow-circle-right"></i></Button>
                            </div>
                            <div className="col-12 col-sm-6 text-center">
                                 <img className="img-fluid w-75 w-lg-50" src="http://localhost:3001/images/hack-vector.png" alt="hack-vector"/>

                            </div>
                        </div>
                        
                    </div>
                    <img className="img-fluid" src="http://localhost:3001/images/bottom-abstract.png" alt="bottom-abstract"/>

                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                     <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;