import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
            position: ''
        }

        this.handleSearch=this.handleSearch.bind(this)

    }

    handleSearch(e){
        e.preventDefault()
        this.props.fetchAllBusinesses(this.state)
        this.navToBusinesses()
    }

    navToBusinesses(){
        this.props.history.push('/businesses')
      }

    update(field){
       return e=>this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSearch}>
                    <input type="text" value={this.state.value} onChange={this.update('value')}/>
                    <input type="text" value={this.state.position} onChange={this.update('position')}/>
                    <input type="submit" value='search'/>   
                </form>
            </div>
        )
    }
    
}

export default withRouter(SearchBar);