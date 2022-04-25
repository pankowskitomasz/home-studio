import React,{Component} from 'react';
import {Container,Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        let socialMenu;
        if(this.props.socialMenu!==undefined && Array.isArray(this.props.socialMenu)){
            socialMenu = this.props.socialMenu.map((item,idx)=>{
                return <li key={idx} className="list-inline-item">
                    <a href={item.path} target="_blank" className="text-white">
                        {item.icon}
                    </a>
                </li>;
            });
        }
        return(
            <Container fluid className="w-100 p-2">
                <Row className="w-100 mx-0">
                    <Col xs={12} className="text-center text-white">
                        <ul className="list-inline mb-1">
                            {socialMenu}
                        </ul>
                    </Col>
                    <Col xs={12} className="text-center text-white small">
                        <small>
                            Copyright &copy; 2022 Tomasz Pankowski. 
                            <Link to="/privacy" 
                                className="ms-1 text-white text-decoration-none">
                                Privacy policy.
                            </Link>
                        </small>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;