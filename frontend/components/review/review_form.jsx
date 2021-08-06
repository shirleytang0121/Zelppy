import React from 'react'

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props.match.params.businessId)
        return(
            <div>
               this is form page 
            </div>
        )
    }
}

export default ReviewForm