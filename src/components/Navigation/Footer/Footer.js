import React from 'react'
import './Footer.css'

const footer = () => { 
    return (
        <div className='footer-wrapper'>
            <div className='footer'>
                <div className='newsletter'>
                    <h3>Subscribe to our Newsletter for exclusive deals!</h3>
                    <input type='text' placeholder='E-mail Address' />
                    <button className='newsletter-btn' type='submit'>Submit</button>
                </div>
                <ul className='footer-list contact-footer'>
                    <h3>Contact Us</h3>
                    <li>
                        <p><i className="fas fa-phone">: </i> 425-906-4377</p>
                    </li>
                    <li>
                        <p><i className="fas fa-envelope">: </i> cs@pcplanet.xyz</p>
                    </li> 
                   
                    <li className='footer-list social-links'>
                        <p>Follow Us!</p>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                    </li>
                </ul>
                <ul className='footer-list location-footer'>
                    <h3>Visit Us</h3>
                    <li>
                       <p><i className="fas fa-building">: </i> 32-71 Stockert Hollow Rd <br />Seattle, WA 98119</p>
                    </li>
                </ul>
                <ul className='footer-list faq-footer'>
                    <h3>FAQ</h3>
                    <li><p>Shipping</p></li>
                    <li><p>Billing</p></li>
                    <li><p>Returns & Exchanges</p></li>
                    <li><p>Customer Service</p></li>
                </ul>
            </div>
        </div>
    )
}

export default footer