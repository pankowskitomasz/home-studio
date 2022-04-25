import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import ContactS1 from "../components/contact-s1";
import ContactS2 from "../components/contact-s2";

class ContactPage extends Component{
    render(){
        return(
            <Container fluid 
            className={(this.props.config===undefined || this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <ContactS1/>
                <ContactS2/>
            </Container>
        );
    }
}

export default ContactPage;