import "./sass/styles.scss";
import React,{Component} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {paths,socialNav} from "./config.js";
import Footer from "./components/footer";
import PageNavbar from "./components/navbar";

class App extends Component{
  render(){
    let routeContent = paths.map((item,idx)=>{
      return <Route path={item.path} element={item.element} key={idx}/>
    });
    return(
      <BrowserRouter>
        <PageNavbar config={paths}/>
        <Routes>
          {routeContent}
        </Routes>
        <Footer socialMenu={socialNav}/>
      </BrowserRouter>
    )
  }
}

export default App;