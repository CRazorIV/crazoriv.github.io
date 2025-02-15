import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Button from './Button';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init("Ac_7enb0vYYfSC6wG");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      };
      

      await emailjs.send(
        'service_0lapaf6',
        'template_ck4ahmm',
        templateParams
      );
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      toast.success('Message sent successfully!');
      
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
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
            value={formData.name}
            onChange={handleChange}
          />
          
          <input 
            type="email" 
            name="email"
            placeholder="Example@mail.com" 
            className="form-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea 
          name="message"
          placeholder="Send me a message about anything you'd like" 
          className="form-textarea"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <Button type="submit">Send message</Button>
      </form>
    </section>
  );
};

export default Contact;