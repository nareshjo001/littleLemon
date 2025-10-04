import React from 'react';
import logo from '../images/Logo .svg';

const Footer = ()=> {
  return (
    <footer>
        <section>
            {/* Company Info Section */}
            <div className='company-info'>
                <img src={logo} alt='Little Lemon Logo' />
                <p>
                  We are a family owned Mediterranean restaurant,
                  focused on traditional recipes served with a modern twist.
                </p>
            </div>

            {/* Important Links Section */}
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li className="links"><a href='/'>Home</a></li>
                    <li className="links"><a href='/'>About</a></li>
                    <li className="links"><a href='/'>Menu</a></li>
                    <li className="links"><a href='/'>Reservations</a></li>
                    <li className="links"><a href='/'>Order Online</a></li>
                    <li className="links"><a href='/'>Login</a></li>
                </ul>
            </div>

            {/* Contact Info Section */}
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br/> 123 Towncity, USA</li>
                    <li>Phone: <br/> ++ 0123 456 789</li>
                    <li>Email: <br/> little@lemon.com</li>
                </ul>
            </div>

            {/* Social Media Links Section */}
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li className="links"><a href='/'>Facebook</a></li>
                    <li className="links"><a href='/'>Instagram</a></li>
                    <li className="links"><a href='/'>Twitter</a></li>
                </ul>
            </div>
        </section>
    </footer>
  );
}

export default Footer;