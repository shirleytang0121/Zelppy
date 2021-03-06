import React from 'react';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component{
    componentDidMount(){
        let val =this.props.val;
        let pos =this.props.pos;
        if( val!== undefined ){
            val =this.props.val.split('+').join(" ")
        }
        if( pos!== undefined ){
            pos =this.props.pos.split('+').join(" ")
        }
        this.props.updateFilter('search',{value: val, position: pos})
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>    
                <ul>
                    {this.props.businesses.length===0 ? <div className='businesses-no-result'><p>No Results Found</p></div> :
                      <div>
                       <p>All Results</p>
                       {this.props.businesses.map((business,idx) => <BusinessIndexItem key={business.id} business={business} idx={idx+1}/>)}
                       </div>
                    }
                    
                </ul>
            </div>
        )
    }
}

export default BusinessIndex;