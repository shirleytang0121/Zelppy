import React from"react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
import HomePageFood from '../../../app/assets/images/homepageFood.jpg'


class HomePage extends React.Component{
    render(){
        return(
        <div className="home-page">
            <header className='homepage-header'>
                <Link to='/businesses'>Write a review</Link>
                <GreetingContainer />  
            </header>
            <Link to='/'> <h1>Zelppy</h1> </Link>
            <img src={HomePageFood}  />
          </div>
        )
    }
}

export default HomePage;