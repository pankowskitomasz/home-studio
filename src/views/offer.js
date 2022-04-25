import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import OfferS1 from "../components/offer-s1";
import OfferS2 from "../components/offer-s2";
import OfferS3 from "../components/offer-s3";

class OfferPage extends Component{
    render(){
        return(
            <Container fluid 
            className={(this.props.config===undefined || this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <OfferS1/>
                <OfferS2/>
                <OfferS3/>
            </Container>
        );
    }
}

export default OfferPage;