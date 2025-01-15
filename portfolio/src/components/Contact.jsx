import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        'YOUR_USER_ID'     // Replace with your EmailJS user ID
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact me</h2>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First name" 
            className="form-input"
            required
          />
          
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Example@mail.com" 
            className="form-input"
            required
          />
        </div>

        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Here you can send me a message anything you like" 
          className="form-textarea"
          required
        />

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </Button>

        {status === 'success' && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="error-message">Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;