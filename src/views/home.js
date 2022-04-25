import React,{Component} from "react";
import IndexS1 from "../components/index-s1";

class HomePage extends Component{
    render(){
        return(
            <div className={(this.props.config===undefined || this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <IndexS1 config={this.props.config}/>             
            </div>
        );
    }
}

export default HomePage;