import './Contact.css'

function Contact(){
    return(
    <div className="contactContainer">
    <div className="container">
        <h1>Contact Us</h1>
        <form>
        <div className="form-field">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="Enter Your First Name" />
        </div>
        <div className="form-field">
            <label className="form-label">Last Name</label>
            <input type="text" required className="form-control" placeholder="Enter Your Last Name" />
        </div>
        <div className="form-field">
            <label className="form-label">Email</label>
            <input type="Email" className="form-control" placeholder="Your InfoBeans email address" />
        </div>
        <div className="form-field">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-field">
            <label for="formFile" class="form-label">Attachments</label>
            <input class="form-control" type="file" id="formFile" />
        </div>
        <div className="button">
            <button type="button" class="btn btn-primary btn-md btn-block mt-3">Submit</button>
        </div>
        </form>
    </div>
    </div>
    )
}

export default Contact;