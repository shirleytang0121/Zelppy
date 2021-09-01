import React from "react";



class BusinessPhotoCreate extends React.Component{
    constructor(){
        
    }



    render(){
        return(
            <div>
                  <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile} multiple /> 
                    <button type='submit'>upload</button>
                    <button onClick={}>cancel</button>
                </form>
            </div>
        )
    }

}