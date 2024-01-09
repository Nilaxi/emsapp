import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authfetch from '../axioshandler/interceptor';
import LanguageCreateContext from '../LanguageCreateContext';
import { Container } from 'react-bootstrap';

export default function RegistrationForm() {
  const {lan}= useContext(LanguageCreateContext)

 const languageObject= {


  "en" : {

    "firstName": "firstName",
    "lastName": "lastName"

  },
  "hi": {
    "firstName": "pratham name",
    "lastName": "akhri name"
  },
  "gj" :{
    "firstName" : "Naam",
    "lastName" : "atak"
  }




 }
  const [form,setForm] = useState({
      title : "",
      firstName : "",
      lastName:"",
      email : "",
      password : "",
      confirmPassword : "",
      acceptTerms : "false"
})
const  handleInput = (e) =>{
  if(e.target.checked){
    setForm({...form,[e.target.name] : e.target.checked})
  }
  else{
    setForm({...form,[e.target.name] : e.target.value})
  }
  
}
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(form);
  authfetch.post("accounts/register",form)
  .then(y =>{
    console.log(y)
  }).catch(y =>{
    console.log(y);
  })
}
 
    return (
<>
<Form onSubmit={handleSubmit} >
  <Container>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="enter your title" name="title" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{languageObject[lan].firstName}</Form.Label>
        <Form.Control type="text" placeholder="enter your firstname" name="firstName" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{languageObject[lan].lastName}</Form.Label>
        <Form.Control type="text" placeholder="enter your lastname" name="lastName"onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="enter your email"  name="email" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="enter your password" name="password" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="text" placeholder="pls confirm password" name="confirmPassword" onChange={handleInput} />
      </Form.Group>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="acceptTerms"
        name="acceptTerms"
        onChange={handleInput} 
      />
     <Button type="submit" variant="primary">Save</Button>
     <Button type="reset" variant="danger">Cancel </Button>
     </Container>
</Form>
</>
  )
}
