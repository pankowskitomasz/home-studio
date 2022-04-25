import React,{Component} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class OfferS3 extends Component{
    render(){
        return(
            <Container fluid className="offer-s1 d-flex align-items-center py-5">
                <Row className="w-100 mx-0 mt-5">
                    <Col xs={12} className="minh-25vh"></Col>
                    <Col xs={12} md={8} lg={6} className="minh-25vh mx-auto text-center text-secondary d-flex align-items-center">
                        <div>
                            <h1 className="display-6 fw-bold">
                                Modern&nbsp;Design
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna 
                                sed lectus ornare scelerisque.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferS3;