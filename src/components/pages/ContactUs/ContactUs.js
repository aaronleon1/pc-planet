import React, {useEffect} from 'react';
import './ContactUs.css'


function ContactUs () {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
    return (
        <div className='form-container' >
            <div className="form-heading" style={{background: '#fff'}}>
                <h1 style={{fontWeight: '400'}}>Questions or concerns?</h1>
                <h2 style={{fontWeight: '400', paddingTop: '16px'}}>Drop a message here and we will get back to you in two business days.</h2>
            </div>
            <div className="form-body" direction="column" style={{background: '#fff'}}>
                <form>
                    <input className='top-inputs' type='text' placeholder='Subject' style={{fontSize: '20px', margin: '8px 0', padding: '16px', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid black'}}/>
                    <input className='top-inputs' type='email' placeholder='Email Address'  style={{fontSize: '20px', margin: '8px 0', padding: '16px', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid black'}}/>
                    <textarea className='bottom-input' type='text' placeholder='Message'  style={{fontSize: '20px', fontFamily: 'Open Sans', fontWeight: '500', width: '100%', margin: '8px 0', paddingLeft: '16px', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid black'}}/>
                    <center>
                    <input type='submit' placeholder='submit' className='form-submit'/>
                    </center>
                    
                </form>
            </div>
        </div>
    )
}

export default ContactUs