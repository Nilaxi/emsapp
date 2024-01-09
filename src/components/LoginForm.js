import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import authfetch from '../axioshandler/interceptor';
import { useNavigate } from 'react-router-dom';



export default function LoginForm() {
  const navi = useNavigate();
    const [form,setform] = useState({
        email: "",
        password : ""
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        authfetch.post("/accounts/authenticate",form).then(y=>{
          localStorage.setItem("userInfo",JSON.stringify(y.data));
          navi("/home");
        }).catch(y=> {
          console.log(y)
        });
       
    }
    const handleInput = (e) =>{
        setform({...form,[e.target.name]:e.target.value})
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Container>
            <h2>LOGIN</h2>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='Text' name='email' placeholder="email@example.com" onChange={handleInput} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" name="password" placeholder="Password"  onChange={handleInput}/>
        </Col>
      </Form.Group>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Remember Me"
        name="Remember Me"
      />
      <br></br>
      <Button variant="primary" type='Submit'>Save</Button>
      <h6>Forget Password?</h6>
      </Container>
    </Form>
  )
}
