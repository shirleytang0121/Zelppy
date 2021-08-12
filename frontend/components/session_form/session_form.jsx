import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state= this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)

    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({},this.state)
        this.props.processForm(user)
    }

    handleDemo(e){
        e.preventDefault();
        const demouser ={
            email: 'demo@aa.io',
            password: '123456'
        }
        const user = Object.assign({},demouser)
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

      renderInstruction(){
          if(this.props.formType === 'Signup'){
              return(
                  <div className='signup-intr'>
                          <header>{this.props.formType} for Zelppy</header>
                          <p>Already have an account {this.props.navLink}</p>
                  </div>
              )
          }else{
              return(
                <div className='login-intr'>
                    <header>{this.props.formType} into Zelppy</header>
                    <p>New to Zelppy? {this.props.navLink}</p>
                </div>
              )
          }
      }

      renderNames(){
        if(this.props.formType === 'Signup'){
            return(
                <div className='signup-names'>
                      <input type="text" value={this.state.firstname} onChange={this.update('firstname')} placeholder='Firstname' className='session-name'/>
                      <input type="text" value={this.state.lastname} onChange={this.update('lastname')} placeholder='Lastname' className='session-name'/>
                </div>
            )
        }else{
            return null
        }
      }

    render(){
        return(
            <div className='session-container'>
                <div className='session-header'>
                    <Link to='/' ><img src={window.logoURL} id='session-logo' /> </Link>
                </div>
                <div className='session-form-container'>
                {this.renderErrors()} 
                <div className='session-form'>
                    {this.renderInstruction()}
                    <div className='form-box'>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderNames()}
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email' className='session-email'/>
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='password' className='session-password'/>  
                            <input type="submit" value={this.props.formType} className='sign-btn'/>
                            {this.props.formType==='Signup'? null:<button className='sign-btn' onClick={this.handleDemo}>Demo User</button>} 
                        </form> 
                    </div>
                </div>
                   <div className='session-img'>
                     <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"  />
                    </div>
                </div>
            </div>
        )

    }
}


export default SessionForm;