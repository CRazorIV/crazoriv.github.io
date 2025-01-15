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
            placeholder="First name" 
            className="form-input"
            required
          />
          
          <input 
            type="email" 
            name="email"
            placeholder="Example@mail.com" 
            className="form-input"
            required
          />
        </div>

        <textarea 
          name="message"
          placeholder="Send me a message about anything you'd like" 
          className="form-textarea"
          required
        />

        <Button type="submit">Send message</Button>
      </form>
    </section>
  );
};

export default Contact;