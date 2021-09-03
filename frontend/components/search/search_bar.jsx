import React from "react";
import { withRouter } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";


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
        this.props.updateFilter('search',this.state)
        this.navToBusinesses()
    }

    navToBusinesses(){
        if(this.state.value!==''){
            let val = this.state.value.split(" ").join("+")
            let pos = this.state.position.split(" ").join("+")
            this.props.history.push(`/search/${val}/${pos}`)
        }else{
            let pos = this.state.position.split(" ").join("+")
            this.props.history.push(`/search/val/${pos}`)
        }
      }

    update(field){
       return e=>this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div className='search-bar'>
                {this.props.type === 'home-search'? 
                <button className='search-bar-home'>
                <form onSubmit={this.handleSearch}>
                    <label className='search-label'>Find
                        <input type="text" value={this.state.value} onChange={this.update('value')} className='search-main' placeholder='restaurants'/>
                    </label >
                    <label className='search-label'>Near
                    <input type="text" value={this.state.position} onChange={this.update('position')}className='search-main' placeholder='city or state'/>
                    </label>  
                    <button type='submit' className='submit-icon'><BiSearchAlt /></button>
                </form>
                </button> :
                <div className='search-bar-header'>
                 <form onSubmit={this.handleSearch}>
                    <input type="text" value={this.state.value} onChange={this.update('value')} className='search-sub' placeholder='restaurants'/>
                    <input type="text" value={this.state.position} onChange={this.update('position')}className='search-sub' placeholder='city or state'/>
                    <button type='submit' className='submit-icon'><BiSearchAlt /></button>
                   </form>
                </div>
                     
                }
                
            </div>
        )
    }
    
}

export default withRouter(SearchBar);