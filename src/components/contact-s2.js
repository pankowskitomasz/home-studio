import React,{Component} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ContactS2 extends Component{
    render(){
        return(
            <Container fluid className="offer-s2 d-flex align-items-center py-5">
                <Row className="w-100 mx-0 mt-5">
                    <Col xs={12} md={8} lg={7} className="minh-25vh mx-auto text-center text-secondary d-flex align-items-center">
                        <div>
                            <h1 className="display-6 fw-bold">
                                Visit&nbsp;Us
                            </h1>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna 
                                sed lectus ornare scelerisque. Donec sit amet lacus vitae urna ullamcorper 
                                pretium sed a risus. Aenean laoreet leo id tempor pellentesque. Vestibulum 
                                congue, velit congue eleifend facilisis, erat nibh aliquam sem, eu convallis 
                                elit orci a nunc.
                            </p>
                            <address>
                                Lorem ipsum dolor<br/>
                                consectetur adipiscing<br/>
                                congue eleifend<br/>
                                elit orci<br/>
                            </address>
                        </div>                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactS2;