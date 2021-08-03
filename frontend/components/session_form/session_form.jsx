import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state= this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({},this.state)
        this.props.processForm(user)
    }

    update(field){
        return e => this.setState( {[field]: e.currentTarget.value})
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

      renderNames(){
          if(this.props.formType === 'Signup'){
              return(
                  <div className='signup-names'>
                      <label>FirstName
                          <input type="text" value={this.state.firstname} onChange={this.update('firstname')}/>
                      </label>
                      <label>LastName
                          <input type="text" value={this.state.lastname} onChange={this.update('lastname')}/>
                      </label>
                  </div>
              )
          }else{
              return null
          }
      }

    render(){
        return(
            <div className='session-container'>
                <header>{this.props.formType} into Zelppy</header>
                {this.renderErrors()}
                <div className='session-form'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>
                        <label>
                            Password
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                         {this.renderNames()}
                        <input type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )

    }
}


export default SessionForm;