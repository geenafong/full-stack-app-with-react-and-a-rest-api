import React from 'react';
import {Link} from 'react-router-dom';
import { Consumer } from './Context'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';




class UserSignIn extends React.Component {
    constructor() {
        super();
        this.state = {
          user: '',
          password: '',
        }
      }
     state = {
        emailAddress:'',
        password:''
     }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.props.history, this.state.emailAddress, this.state.password)
        console.log(this.props.emailAddress);
    }
     
    render() {
        return (
            <Consumer>
              {context => {
                if (context.signedIn){
                    this.props.history.push('/')
                }
            return(
            <div className="bounds">
                <div className="grid-33 centered signin">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                        <div><input id="emailAddress" name="emailAddress" onChange ={this.handleChange} type="text" className="" placeholder="Email Address" value={this.state.emailAddress} /> </div>
                        <div><input id="password" name="password" onChange={this.handleChange} type="password" className="" placeholder="Password" value={this.state.password} /> </div>
                        <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign In</button>
                        <Link to="/courses"><button className="button button-secondary">Cancel</button></Link></div>

                    </form>
                </div>
                <p>&nbsp;</p>
                <p>Don't have a user account? <Link to="/signup">Click here</Link> to sign up!</p>
            </div>
            );
            }}
           </Consumer>
        );
    }
}

export default withRouter (UserSignIn);