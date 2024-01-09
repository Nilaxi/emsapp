import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import authfetch from '../axioshandler/interceptor';


export default function Display() {
  const [data, setData] = useState([]);
  const [isloadded, setIsLoadded] = useState(false);
  useEffect(() => {
    setIsLoadded(true);
    authfetch.get("/accounts").then(y => {
      setData(y.data);
      setIsLoadded(false);
    });
  }, [])
  return (


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>password</th>
          <th>confirmPassword</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((v, index) => {
            return (<tr><td>${v.title}</td><td>${v.firstName}</td><td>${v.lastName}</td><td>${v.email}</td><td>${v.password}</td><td>${v.confirmPassword}</td></tr>)
          })
        }



      </tbody>
    </Table>

  )
}
