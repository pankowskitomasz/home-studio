import React,{Component} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const dummy = [
    {name:"name 1",ext: "ext data",price:"price 1"},
    {name:"name 2",ext: "ext data",price:"price 2"},
    {name:"name 3",ext: "ext data",price:"price 3"},
    {name:"name 4",ext: "ext data",price:"price 4"}
];

class OfferS2 extends Component{
    render(){
        let tableData;
        if(this.props.data!==undefined){
            tableData = this.props.data.map((item,idx)=>{
                return <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.ext}</td>
                    <td>{item.price}</td>
                </tr>;
            });
        }
        else{
            tableData = dummy.map((item,idx)=>{
                return <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.ext}</td>
                    <td>{item.price}</td>
                </tr>;
            });
        }
        return(
            <Container fluid className="offer-s2 d-flex align-items-center py-5">
                <Row className="w-100 mx-0 mt-5">
                    <Col xs={12} md={8} lg={7} className="minh-25vh mx-auto text-center text-secondary d-flex align-items-center">
                        <div>
                            <h1 className="display-6 fw-bold">
                                Our&nbsp;Offer
                            </h1>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna 
                                sed lectus ornare scelerisque. Donec sit amet lacus vitae urna ullamcorper 
                                pretium sed a risus. Aenean laoreet leo id tempor pellentesque. Vestibulum 
                                congue, velit congue eleifend facilisis, erat nibh aliquam sem, eu convallis 
                                elit orci a nunc.
                            </p>
                            <Table striped bordered hover variant="secondary">
                                <thead>
                                    <tr>
                                        <th>Lorem ipsum</th>
                                        <th>Lorem ipsum</th>
                                        <th>Lorem ipsum</th>
                                    </tr>
                                </thead>
                                <tbody className="text-start">
                                    {tableData}
                                </tbody>
                            </Table>
                        </div>                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferS2;