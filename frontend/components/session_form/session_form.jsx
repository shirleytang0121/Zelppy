import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            email:'',
            password: '',
            firstname: '',
            lastname: '',
            show_error: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)

    }

    handleSubmit(e){
        e.preventDefault();
        let user
        if(this.props.formType === 'Signup'){
            user = {
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            }
        }else{
             user = {
                email: this.state.email,
                password: this.state.password,
             }
        }
        this.props.processForm(user).then(this.setState({show_error: true}))
        
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
        return e => this.setState( {[field]: e.currentTarget.value, show_error:false})
    }

    renderErrors(field) {
        for(let i=0; i <this.props.errors.length;i++){
            console.log(this.props.errors)
            if(this.props.errors[i].includes(field)){
                return (
                <div>
                    {this.props.errors[i]}
                </div>)
            }
        }
        // return(
        //   <ul className='session-error'>
        //     {this.props.errors.map((error, i) => (
        //       <li key={`error-${i}`}>
        //         {error}
        //       </li>
        //     ))}
        //   </ul>
        // );
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
                     {this.state.show_error&&this.props.formType==='Signup' ? this.renderErrors('Firstname') : null} 
                      <input type="text" value={this.state.firstname} onChange={this.update('firstname')} placeholder='Firstname' className='session-name'/>
                      {this.state.show_error&&this.props.formType==='Signup' ? this.renderErrors('Lastname') : null} 
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
                <div className='session-form'>
                    {this.renderInstruction()}
                    <div className='form-box'>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderNames()}
                            {this.state.show_error&&this.props.formType==='Login' ? this.renderErrors('email') : null} 
                            {this.state.show_error&&this.props.formType==='Signup' ? this.renderErrors('Email') : null} 
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email' className='session-email'/>
                            {this.state.show_error&&this.props.formType==='Signup' ? this.renderErrors('Password') : null} 
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