import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class PageNavbar extends Component {
    render() {
        let navbarContent="";
        if(this.props.config!==undefined && Array.isArray(this.props.config)){
            navbarContent = this.props.config.map((item,idx)=>{
                if(item.menuItem){
                    return <Nav.Item key={idx}>
                    <Link to={item.path} className="nav-link text-white">
                        {item.name}
                    </Link></Nav.Item>;
                }
            });
        }
        return (
            <Navbar expand="md" variant={"dark"} className="position-absolute w-100 px-3">
                <Link to="/" className="navbar-brand">                    
                    <Image src="img/logo.png" alt="logo" />                    
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="text-end">
                        {navbarContent}                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PageNavbar;