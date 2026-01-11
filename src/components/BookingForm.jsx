import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUsers, FaSearch } from "react-icons/fa";
import "../App.css";

const BookingForm = ({ districts, onBooking }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.date && formData.time) {
      onBooking(formData);
    } else {
      alert("Please fill in all required fields");
    }
  };

  // Get tomorrow's date for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="from">
              <FaSearch /> From
            </label>
            <select
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="to">
              <FaSearch /> To
            </label>
            <select
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">
              <FaCalendarAlt /> Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={minDate}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">
              <FaClock /> Time
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time</option>
              <option value="06:00">06:00 AM</option>
              <option value="08:30">08:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="16:30">04:30 PM</option>
              <option value="19:00">07:00 PM</option>
              <option value="22:00">10:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="passengers">
              <FaUsers /> Passengers
            </label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="book-btn">
          Search Buses
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
