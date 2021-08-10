import React from"react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
import NavigationContainer from '../navigation/navigation_container'
import SearchBar from "../search/search_bar";


class HomePage extends React.Component{

  constructor(props){
    super(props)
    this.handleClick =this.handleClick.bind(this)
}

handleClick(e){
    this.props.fetchAllBusinesses({value:'',position:''})
    this.navToBusinesses()
}

navToBusinesses(){
  this.props.history.push('/businesses')
}
    render(){
        return(
        <div className="home-page">
              <img src= {window.homePageFoodURL} className='home-background' />
            <header className='homepage-header'>
                <button className='home-link' onClick={this.handleClick}>Write a Review</button>
                <GreetingContainer />  
            </header>
            <Link to='/'> <img src={window.logoURL} className='logo'/> </Link>
            <SearchBar fetchAllBusinesses={this.props.fetchAllBusinesses}/>
            <NavigationContainer />
          
          </div>
        )
    }
}

export default HomePage;