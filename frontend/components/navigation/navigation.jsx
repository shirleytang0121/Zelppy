import React from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.handlePizza =this.handlePizza.bind(this)
    }

    handlePizza(e){
        this.props.fetchAllBusinesses({value:'pizza',position:''})
        this.navToBusinesses()
    }

    navToBusinesses(){
        this.props.history.push('/businesses')
    }

    render(){
        return(
            <div>
                <button onClick={this.handlePizza}>pizza</button>
            </div>
        )
    }
}

export default withRouter(Navigation)