import React, {useEffect} from 'react';
import './ContactUs.css'


function ContactUs () {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
    return (
        <div className='contact-wrapper'>
            <form className="contact">
					<p>
						<label>Name</label>
						<input type="text" placeholder="Name" name="name" />
					</p>
					<p>
						<label>Company (if applicable)</label>
						<input type="text" placeholder="Company" name="company" />
					</p>
					<p>
						<label>E-mail Address</label>
						<input type="email" placeholder="E-mail Address" name="email" />
					</p>
					<p>
						<label>Subject</label>
						<input type="text" placeholder="Subject" name="subject" />
					</p>
					<p class ="full">
						<label>Message</label>
						<textarea placeholder="Message" name ="message"  rows="5"></textarea>
					</p>
					<p class ="full"> 
						<button className="submit">Submit</button>
					</p>
					
				</form>
        </div>
    )
}

export default ContactUs