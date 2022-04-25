import React,{Component} from "react";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class IndexS1 extends Component{
    render(){
        let linkContent = "";
        if(this.props.config!==undefined && this.props.config.returnNav!==undefined){
            linkContent = <Link to={this.props.config.returnNav.link} className="btn btn-secondary rounded-pill">
                {this.props.config.returnNav.title}
            </Link>
        }
        return(
            <Container fluid className="index-s1 d-flex align-items-center py-5">
                <Row className="w-100 mx-0 mt-5">
                    <Col xs={12} className="d-md-none minh-25vh"></Col>
                    <Col xs={12} md={6} className="minh-50vh text-center text-secondary d-flex align-items-center">
                        <div>
                            <h1 className="display-5 fw-bold">
                                Exclusive Interior Design
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna 
                                sed lectus ornare scelerisque. Donec sit amet lacus vitae urna ullamcorper 
                                pretium sed a risus.
                            </p>
                            <div className="w-100 text-center">
                                {linkContent}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default IndexS1;