import React, { useState } from 'react';

function Contact(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Handle successful submission (e.g., show a success message)
        console.log('Contact form submitted successfully.');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Error submitting contact form.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <h2 className="con-head" style={{marginTop:'50px'}}>{props.title}</h2>
      <section style={{marginLeft:'100px', marginRight:'100px'}}>
        
        <div style={{ height: '30px' }}></div>
        <p style={{textAlign:'center'}}>
          If you have any questions or would like to get in touch with us, please fill out the contact form below:
        </p>

        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleInputChange}
          />

          <button type="submit" name="submit" style={{ width: '100%' }}>
            Submit
          </button>
        </form>
      </section>
      <br/>
      <div style={{textAlign:'center'}}>

        <h2>Our Office</h2>
        <h5>BB-023, Sector Omega 1</h5>
        <h5>Opp. Indigo Expo Mart Circle,</h5>
        <h5>near Pari Chowk, Block B</h5>
        <h5>Ansal Golf Link -1</h5>
        <h5>Greater Noida, U.P.-201308</h5>
        </div>
      <div style={{ width: '100%', height: '80px' }}></div>
    </>
  );
}

export default Contact;
