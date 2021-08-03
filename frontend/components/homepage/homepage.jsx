import React from"react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";


class HomePage extends React.Component{
    render(){
        return(
         <header >
            <GreetingContainer />  
            <Link to='/'> <h1>Zelppy</h1> </Link>
          </header>
        )
    }
}

export default HomePage