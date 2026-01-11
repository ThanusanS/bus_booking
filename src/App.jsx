import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import RouteCard from "./components/RouteCard";
import AmenityCard from "./components/AmenityCard";
import Header from "./components/Header";
import {
  FaWifi,
  FaPlug,
  FaSnowflake,
  FaSuitcase,
  FaChair,
  FaRestroom,
  FaShieldAlt,
  FaUndo,
  FaSmile,
  FaHeadset,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [bookingData, setBookingData] = useState(null);

  const sriLankaDistricts = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Vavuniya",
    "Mullaitivu",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Moneragala",
    "Ratnapura",
    "Kegalle",
  ];

  const popularRoutes = [
    { from: "Colombo", to: "Kandy", price: "$12.99", duration: "3h 30m" },
    { from: "Colombo", to: "Galle", price: "$8.50", duration: "2h 15m" },
    { from: "Kandy", to: "Nuwara Eliya", price: "$6.75", duration: "2h 45m" },
    { from: "Galle", to: "Matara", price: "$4.25", duration: "1h 15m" },
    { from: "Colombo", to: "Jaffna", price: "$24.99", duration: "8h 30m" },
    { from: "Kandy", to: "Badulla", price: "$9.99", duration: "4h 15m" },
  ];

  const amenities = [
    { icon: <FaWifi />, title: "Free WiFi", desc: "Stay connected on the go" },
    { icon: <FaPlug />, title: "Power Outlet", desc: "Charge your devices" },
    {
      icon: <FaSnowflake />,
      title: "Air Condition",
      desc: "Comfortable temperature",
    },
    { icon: <FaSuitcase />, title: "Luggage Space", desc: "Ample storage" },
    { icon: <FaChair />, title: "Adjustable Seats", desc: "Custom comfort" },
    { icon: <FaRestroom />, title: "Washroom", desc: "Clean facilities" },
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Safety Measures",
      desc: "Regular maintenance & safety compliance",
    },
    {
      icon: <FaUndo />,
      title: "Easy Refund",
      desc: "Hassle-free refund policy",
    },
    {
      icon: <FaSmile />,
      title: "Satisfied Customers",
      desc: "Exceptional service experience",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Round-the-clock assistance",
    },
  ];

  const handleBooking = (data) => {
    setBookingData(data);
    alert(
      `Booking Successful!\nFrom: ${data.from}\nTo: ${data.to}\nDate: ${data.date}\nTime: ${data.time}\nPassengers: ${data.passengers}`
    );
  };

  return (
    <div className="App">
      <Header />

      {/* Hero Section with Booking Form */}
      <section className="hero">
        <div className="hero-content">
          <h1>Book Smart, Travel Smarter</h1>
          <p>Discover comfortable and worry-free travel across Sri Lanka</p>
          <BookingForm
            districts={sriLankaDistricts}
            onBooking={handleBooking}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Service</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="routes-section">
        <div className="container">
          <h2>Popular Routes in Sri Lanka</h2>
          <div className="routes-grid">
            {popularRoutes.map((route, index) => (
              <RouteCard key={index} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="amenities-section">
        <div className="container">
          <h2>Our Amenities</h2>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} amenity={amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Your Comfortable Travel Partner</h2>
          <p className="about-text">
            At Sri Lanka Express, we make your travel experience comfortable and
            stress-free. With modern amenities and professional service, we
            ensure you can relax and enjoy your journey across beautiful Sri
            Lanka.
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026  Sri Lanka Express Bus Service. All rights reserved.</p>
        <p>24/7 Customer Support: +94 12 345 6789</p>
      </footer>
    </div>
  );
}

export default App;
