import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import InfoS1 from "../components/info-s1";
import InfoS2 from "../components/info-s2";
import InfoS3 from "../components/info-s3";

class InfoPage extends Component{
    render(){
        return(
            <Container fluid 
            className={(this.props.config===undefined || this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <InfoS1/>
                <InfoS2/>
                <InfoS3/>
            </Container>
        );
    }
}

export default InfoPage;