import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import logo1 from '../../images/logo-infobeans-black.svg';
import './Contact.css'

function Contact() {
const [file,setfile]=useState([])
useEffect(()=>{},[file])
const contact=(e)=>{


console.log(e.target[4].files[0])
e.preventDefault()
if(e.target[4].files[0].name){
const data =new FormData()
data.append("firstname",e.target[0].value)
data.append("lastname",e.target[1].value)
data.append("email",e.target[2].value)
data.append("description",e.target[3].value)
data.append("file",file)

console.log(data)

axios.post('http://localhost:8000/api/contact',data)
.then((res)=>{
  console.log(res.data)
})
}
}

const fileUpdate=(e)=>{
  e.preventDefault();
  console.log(e.target.files[0]);
  setfile(e.target.files[0])
}

// axios.post("https:httpbin.org/anything", data).then(
//     (response) => {
//       console.log(response);
//     },
//     (error) => console.log(error)
//   );
return (
  <>
  <Navbar />
  <div className="container" id="contact-container">
  <img src={logo1} alt="Infobeans-white" />
    <h3>Contact Us</h3>
    <form  className="form" encType="multipart/form-data" onSubmit={contact} >
      <div>
        <label for="formControlInput" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
        />
      </div>
      <div>
        <label for="formControlInput" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
        />
      </div>
      <div>
        <label for="formControlInput" className="form-label">
          Email
        </label>
        <input type="text" required className="form-control" placeholder="email" />
      </div>
      <div>
        <label for="formControlInput" className="form-label">
          Description
        </label>
        <textarea className="form-control" placeholder="description" id="floatingTextarea" style={{"height": "100px"}}></textarea>
      </div>

      <div>
        <label for="formFile" className="form-label text-start">
          Default file input
        </label>
        <input className="form-control" type="file" id="formFile" onChange={fileUpdate} />
      </div>

      <div className="submitbutton">
        <button type="submit" id="submitbtn" class="btn btn-danger">
          Submit
        </button>
      </div>
    </form>
  </div>
  </>
);
}

export default Contact