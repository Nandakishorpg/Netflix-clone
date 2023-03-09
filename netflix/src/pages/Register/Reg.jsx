import { React, useRef, useState } from "react";
import axios from 'axios'
import "./reg.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Reg() {
  const emailRef=useRef()  
  const passwordRef=useRef()  
  const userRef=useRef()  


  const [login,setlogin] = useState([]);
const signIn=(event)=>{
    event.preventDefault()
setlogin({Username:userRef.current.value,Email:emailRef.current.value,Password:passwordRef.current.value})

// axios.post("http://localhost:4000/api/auth/login",login).then((res)=>{
// console.log(res);
// })
} 



console.log("loginState",login);

  return (
    <div className="register">
      <img className="netLogo" src="./assets/2014logo.svg" alt="" />
<div className="login-container">
<div className="login">
        <Form className="registration-form__form">
            <span className="signIn-text">Sign in</span>
          <Form.Group  style={{width:"85%",height:"12%"}}  className="mb-3" controlId="formBasicUser">
            
            <Form.Control ref={userRef} style={{backgroundColor:"grey",height:"100%"}} type="text" placeholder="Enter UserName" />
           
          </Form.Group>
          <Form.Group  style={{width:"85%",height:"12%"}}  className="mb-3" controlId="formBasicemail">
            
            <Form.Control ref={emailRef} style={{backgroundColor:"grey",height:"100%"}} type="email" placeholder="Enter email" />
           
          </Form.Group>

          <Form.Group  style={{width:"85%",height:"12%"}} className="mb-3" controlId="formBasicPassword">
            
            <Form.Control ref={passwordRef}  style={{background:"grey",width:"100%",height:"100%"}} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button onClick={signIn} style={{width:"85%"}} variant="danger"  type="submit">
            Submit
          </Button>
        </Form>
      </div>
</div>
     
    </div>
  );
}
