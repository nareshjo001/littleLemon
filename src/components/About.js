import React from 'react';
import chefs1 from '../images/chefs1.jpg';
import chefs2 from '../images/chefs2.jpg';

const About = ()=> {
    return (
        <section className='about-container'>
            {/* About Text Section */}
            <div className='about-texts'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Based in Chicago, Little Lemon is a family-owned Mediterranean restaurant
                    run by Italian brothers Mario and Adrian. The restaurant offers 12–15 seasonal dishes
                    inspired by Italian, Greek, and Turkish cuisine, blending traditional recipes with a modern twist.
                    Mario crafts the menu using family recipes and his experience as a chef in Italy,
                    while Adrian handles marketing and has expanded the menu to include a wider range
                    of Mediterranean flavors. With its rustic, relaxed atmosphere and moderate prices,
                    Little Lemon is a popular spot for meals any time of the day.
                </p>
            </div>

            {/* Chef Images Section */}
            <div className="owner-img">
                <img src={chefs1} alt='Chef Mario at Little Lemon'/>
                <img src={chefs2} alt='Chef Adrian at Little Lemon'/>
            </div>
        </section>
    )
}

export default About;