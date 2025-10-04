import React from 'react';
import reviewer1 from '../images/reviewer1.png';
import reviewer2 from '../images/reviewer2.png';
import reviewer3 from '../images/reviewer4.png';

const Testimonials = ()=> {
    return (
        <section className="testimonials-parent" aria-label="Customer testimonials">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials">
                {/* Testimonial 1 */}
                <article
                className="testimonial"
                aria-label="Review by John Doe, rating 5 out of 5"
                >
                <img
                    className="reviewer-img"
                    src={reviewer1}
                    alt="Photo of John Doe"
                />
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    massa massa, semper sed enim at, faucibus mattis lorem. Donec
                    vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit,
                    ac iaculis libero lacus non diam.
                    </p>
                </div>
                </article>

                {/* Testimonial 2 */}
                <article
                className="testimonial"
                aria-label="Review by Jane Smith, rating 5 out of 5"
                >
                <img
                    className="reviewer-img"
                    src={reviewer2}
                    alt="Photo of Jane Smith"
                />
                <div className="name-rating">
                    <p className="reviewer-name">Jane Smith</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    massa massa, semper sed enim at, faucibus mattis lorem. Donec
                    vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit,
                    ac iaculis libero lacus non diam.
                    </p>
                </div>
                </article>

                {/* Testimonial 3 */}
                <article
                className="testimonial"
                aria-label="Review by Michael Lee, rating 5 out of 5"
                >
                <img
                    className="reviewer-img"
                    src={reviewer3}
                    alt="Photo of Michael Lee"
                />
                <div className="name-rating">
                    <p className="reviewer-name">Michael Lee</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    massa massa, semper sed enim at, faucibus mattis lorem. Donec
                    vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit,
                    ac iaculis libero lacus non diam.
                    </p>
                </div>
                </article>
            </div>
            </section>
    )
}

export default Testimonials;