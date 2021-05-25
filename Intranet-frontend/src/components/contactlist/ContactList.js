import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './ContactList.css'

function ContactList() {

const [contactList,setContactList]=useState([])
useEffect(()=>{
    axios({
        method:'get',
        url:"http://localhost:8000/api/getcontacts",
        
    }).then((response)=>{
        console.log(response.data.data)
        setContactList(response.data.data)
        
    },(error)=>{
        console.log("Error from api",error)
    })

},[])
return (
  <>
    <Navbar />
    <div id="container" className="container">
        <table className="table table-bordered table-hover">
<thead>
<tr className="table-dark">
  <th scope="col">First Name</th>
  <th scope="col">Last Name</th>
  <th scope="col">Email</th>
  <th scope="col">Description</th>
  <th scope="col">File</th>
</tr>
</thead>
<tbody>
{contactList.map((each)=>{
return(
<tr>

  <td>{each.firstname}</td>
  <td>{each.lastname}</td>
  <td>{each.email}</td>
  <td>{each.description}</td>
  <td>{each.file}</td>
</tr>)
})}
</tbody>
</table>
</div>
</>
)
}

export default ContactList