import React, { Component } from 'react'
import './Signup.css'
import { withRouter } from 'react-router-dom';
class Signup extends Component {
    
    constructor() {
        super();
        this.state = {
          input: {name:'',
                  email:'',
                  phone:'',
                  password:'',
                  confirmpassword:''
                  },
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
         
      handleSubmit(event) {
       
        event.preventDefault();
        if(this.validate()){
            console.log(this.state);
      
            // let input = {};
            // input["name"] = "";
            // input["email"] = "";
            // input["phone"] = "";
            // input["password"] = "";
            // input["confirmpassword"] = "";
            // this.setState({input:input});
            this.props.history.push('/login');
            alert('Demo Form is submited');
            
        }
      }
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
          }
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
          }
      
          if (typeof input["phone"] !== "undefined") {
              
            let pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
              isValid = false;
              errors["phone"] = "Please enter only number.";
            }else if(input["phone"].length !== 10){
              isValid = false;
              errors["phone"] = "Please enter valid phone number.";
            }
          }
      
          if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }
      
          this.setState({
            errors: errors
          });
          
          if(input["password"]!==input["confirmpassword"]){
              isValid=false;
              errors["confirmpassword"]="passowrd and confirm password are not matching.";
          }
          return isValid;
      }
         
      render() {
        return (
          <div data-testid="signupBox">
            <h1>Sign-up</h1>
            <form onSubmit={this.handleSubmit} method="post">

              <div className="form-group">
                
                <input 
                  type="text" 
                  name="email" 
                  value={this.state.input.email}
                  onChange={this.handleChange}
                  className="form-control" 
                  placeholder="Enter Email" 
                  data-testid="email" />
      
                  <div className="text-danger">{this.state.errors.email}</div>
              </div>
     
              <div className="form-group">
                
                <input 
                  type="text" 
                  name="name" 
                  value={this.state.input.name}
                  onChange={this.handleChange}
                  className="form-control" 
                  placeholder="Enter Username" 
                  data-testid="username" />
      
                  <div className="text-danger">{this.state.errors.name}</div>
              </div>

              <div className="form-group">
                
                <input 
                  type="text" 
                  name="phone" 
                  value={this.state.input.phone}
                  onChange={this.handleChange}
                  className="form-control" 
                  placeholder="Enter Mobile Number" 
                  data-testid="mobilenumber" />
      
                  <div className="text-danger">{this.state.errors.phone}</div>
              </div>
      
              <div className="form-group">
               
                <input
                  type='password'
                  name="password"
                  value={this.state.input.password} 
                  onChange={this.handleChange}
                  placeholder="Enter Password"
                  className="form-control" 
                  data-testid="password"
                  />
      
                  <div className="text-danger">{this.state.errors.password}</div>
              </div>
              <div className="form-group">
                
                <input
                  type='password'
                  name="confirmpassword"
                  value={this.state.input.confirmpassword} 
                  onChange={this.handleChange}
                  placeholder="Confirm Password"
                  className="form-control" 
                  data-testid="confirmpassword"
                  />
      
                  <div className="text-danger">{this.state.errors.confirmpassword}</div>
              </div>
                  
              <input type="submit" value="Submit" data-testid="submitButton" className="btn btn-success" />
              <div>Already a member?
                <a 
                href="/login" 
                data-testid="signinLink">
                  Click here
                </a>
              </div>
            </form>
            {/* block for adding image */}
            <div>
            
            </div>
          </div>
          
        );
      }
     
}

export default withRouter(Signup)
