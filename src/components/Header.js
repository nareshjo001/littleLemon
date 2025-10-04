import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header = ()=> {
    return (
        <header className='header'>
            <section>
                {/* Banner Text Section */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>

                    {/* Reservation Button */}
                    <Link to="/booking">
                        <button aria-label='Reserve a table'>Reserve Table</button>
                    </Link>
                </div>

                {/* Banner Image Section */}
                <div className="banner-img">
                    <img src={bannerImg} alt='Restaurant banner'/>
                </div>
            </section>
        </header>
    )
}

export default Header;