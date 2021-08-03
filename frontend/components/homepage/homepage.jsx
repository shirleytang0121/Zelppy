import React from"react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";


class HomePage extends React.Component{
    render(){
        return(
        <div className="home-page">
            <header >
                <GreetingContainer />  
            </header>
            <Link to='/'> <h1>Zelppy</h1> </Link>
            <img />
          </div>
        )
    }
}

export default HomePage;