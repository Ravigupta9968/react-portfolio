import {  FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import React, { useState } from 'react';


function Profile() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a mock submission)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="profile" className="section">
      <h2>Contact</h2>
      <p>
      If you have any questions or would like to get in touch, please feel free to ask me. 
      </p>
      <p>Reach out for opportunities or collaboration!</p>
      <div className="contact-info">
        <p><FaMailBulk/><span>&nbsp;&nbsp;&nbsp;</span><a href="https://ravigupta7062@gmail.com">ravigupta7062@gmail.com</a></p>   {/* add your Email id  */}
        <p><FaPhoneAlt/> +91 9968495093</p>  {/* add your Phone number */}
      </div>
       <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit" className="btn3">Send</button>
      </form>   {/* also add the connection with your email id */}
    </section>
  );
}

export default Profile;