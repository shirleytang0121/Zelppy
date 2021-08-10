import React from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.handlePizza =this.handlePizza.bind(this)
        this.handleJapanese = this.handleJapanese.bind(this)
    }

    handlePizza(e){
        this.props.fetchAllBusinesses({value:'pizza',position:''})
        this.navToBusinesses()
    }

    handleJapanese(e){
        this.props.fetchAllBusinesses({value:'japanese',position:''})
        this.navToBusinesses()
    }

    navToBusinesses(){
        this.props.history.push('/businesses')
    }

    render(){
        return(
            <div className='navigation-container'>
                <button onClick={this.handlePizza}>Pizza</button>
                <button onClick={this.handleJapanese}>Japanese</button>
                <button>Chinese Food</button>
                <button>Burger</button>
            </div>
        )
    }
}

export default withRouter(Navigation)