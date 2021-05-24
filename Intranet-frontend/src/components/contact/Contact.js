// import { useState } from 'react';
// import axios from 'axios'
// import './Contact.css'

// function Contact(){
//     const [file,setFile] = useState([]);


//     const onSubmitContact=(e)=>{
//     e.preventDefault();

//     setFile(e.target[4].files[0])
//     console.log(e.target[4].files[0])
//     e.preventDefault()
    
//     const data =new FormData()
//     data.append("firstname",e.target[0].value)
//     data.append("lastname",e.target[1].value)
//     data.append("email",e.target[2].value)
//     data.append("description",e.target[3].value)
//     data.append("attachment",file) 

//     console.log(data);
// //     axios.post("https:httpbin.org/anything", data).then(
// //     (response) => {
// //       console.log(response);
// //     },
// //     (error) => console.log(error)
// //   );

// axios.post('http://localhost:8000/api/contact',data)
// .then((res)=>{
//   console.log(res.data)
// })

//     }


//     return(
//     <div className="contactContainer">
//     <div className="container">
//         <h1>Contact Us</h1>
//         <form onSubmit={onSubmitContact} encType="multipart/form-data">
//         <div className="form-field">
//             <label className="form-label">First Name</label>
//             <input type="text" className="form-control" placeholder="Enter Your First Name" />
//         </div>
//         <div className="form-field">
//             <label className="form-label">Last Name</label>
//             <input type="text" required className="form-control" placeholder="Enter Your Last Name" />
//         </div>
//         <div className="form-field">
//             <label className="form-label">Email</label>
//             <input type="Email" className="form-control" placeholder="Your InfoBeans email address" />
//         </div>
//         <div className="form-field">
//             <label for="exampleFormControlTextarea1" class="form-label">Description</label>
//             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//         <div className="form-field">
//             <label for="formFile" class="form-label">Attachments</label>
//             <input class="form-control" type="file" id="formFile" />
//         </div>
//         <div className="button">
//             <button type="submit" class="btn btn-primary btn-md btn-block mt-3">Submit</button>
//         </div>
//         </form>
//     </div>
//     </div>
//     )
// }

// export default Contact;


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Contact.css'

function Contact() {
const [file,setfile]=useState([])
// useEffect(()=>{},[])
const contact=(e)=>{

setfile(e.target[4].files[0])
console.log(e.target[4].files[0])
e.preventDefault()

const data =new FormData()
data.append("firstname",e.target[0].value)
data.append("lastname",e.target[1].value)
data.append("email",e.target[2].value)
data.append("description",e.target[3].value)
data.append("file",file)

console.log(data)
// axios.post("https:httpbin.org/anything", data).then(
//     (response) => {
//       console.log(response);
//     },
//     (error) => console.log(error)
//   );

  axios.post('http://localhost:8000/api/contact',data)
  .then((res)=>{
    console.log(res.data)
})
}
return (
  <div className="container" id="contact-container">
    <h3>Contact Us</h3>
    <form   className="form" encType="multipart/form-data" onSubmit={contact} >
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
        <input type="text" className="form-control" placeholder="email" />
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
        <input className="form-control" type="file" id="formFile" />
      </div>

      <div className="submitbutton">
        <button type="submit" id="submitbtn" class="btn btn-outline-danger">
          Submit
        </button>
      </div>
    </form>
  </div>
);
}

export default Contact