import React from "react";
import "./AboutUs.css"; // Import custom CSS for styling

function AboutUs()
{
    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="hero-section text-center py-5 text-white">
                <div className="container">
                    <h1 className="display-4 mb-4">Welcome to Our Food Delivery Service</h1>
                    <p className="lead mb-4">
                        Delivering delicious food directly to your doorstep.
                    </p>
                    <a href="#about-us" className="btn btn-primary">Learn More</a>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="about-us-section py-5">
                <div className="container">
                    <h1 className="text-center display-4 mb-4">About Us</h1>
                    <p className="lead text-justify mb-5">
                        We are committed to offering the best food delivery service. Our mission is to provide fast, reliable, and quality food to our customers. We believe in convenience, flavor, and satisfaction. Join us in enjoying great meals, delivered right to your door.
                    </p>

                    {/* Mission Section */}
                    <div className="mission-section mb-5">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to deliver high-quality, fresh meals right to your doorstep quickly and efficiently. We strive to make every meal enjoyable and convenient for our customers.
                        </p>
                    </div>

                    {/* Values Section */}
                    <div className="values-section mb-5">
                        <h2>Our Values</h2>
                        <ul>
                            <li><strong>Quality:</strong> We use only the freshest ingredients.</li>
                            <li><strong>Customer-Centric:</strong> Our focus is on customer satisfaction.</li>
                            <li><strong>Integrity:</strong> We deliver what we promise, every time.</li>
                        </ul>
                    </div>

                    {/* Vision Section */}
                    <div className="vision-section mb-5">
                        <h2>Our Vision</h2>
                        <p>
                            To become the leading food delivery service, known for its reliability and top-notch customer service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default AboutUs;
