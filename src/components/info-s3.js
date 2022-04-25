import React,{Component} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class InfoS3 extends Component{
    render(){
        return(
            <Container fluid className="info-s3 d-flex align-items-center py-5">
                <Row className="w-100 mx-0 mt-5">
                    <Col xs={12} md={6} lg={7} className="minh-25vh"></Col>
                    <Col xs={12} md={6} lg={5} className="minh-50vh text-center text-md-start text-secondary d-flex align-items-center">
                        <div>
                            <h1 className="display-6 fw-bold">
                                Premium&nbsp;Design
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna sed 
                                lectus ornare scelerisque. Donec sit amet lacus vitae urna ullamcorper pretium 
                                sed a risus. Aenean laoreet leo id tempor pellentesque. Vestibulum congue, 
                                velit congue eleifend facilisis, erat nibh aliquam sem, eu convallis elit 
                                orci a nunc.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InfoS3;