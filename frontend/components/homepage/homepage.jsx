import React from"react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
// import HomePageFood from '../../../app/assets/images/homepageFood.jpg'


class HomePage extends React.Component{
    render(){
        return(
        <div className="home-page">
              <img src= {window.homePageFoodURL} className='home-background' />
            <header className='homepage-header'>
                <Link to='/businesses' className='home-link'>Write a Review</Link>
                <GreetingContainer />  
            </header>
            <Link to='/'> <img src={window.logoURL} className='logo'/> </Link>
          
          </div>
        )
    }
}

export default HomePage;