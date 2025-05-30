import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      setSubmissionStatus('Thank you for contacting us!');
    } catch (error) {
      console.error("There was an error submitting the contact form!", error);
      setSubmissionStatus('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cont">
      <div className="contact-page">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {submissionStatus && <p>{submissionStatus}</p>}
      </div>
    </div>
  );
};

export default ContactUs;


// import React, { useState } from 'react';
// import '../styles/ContactUs.css';

// const ContactUs = () => {
// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
// });
// const [isSubmitting, setIsSubmitting] = useState(false);
// const [submissionStatus, setSubmissionStatus] = useState('');

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//     ...formData,
//     [name]: value,
//     });
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmissionStatus('');

//     try {
    
//     await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     });
//     setSubmissionStatus('Thank you for contacting us!');
//     } catch (error) {
//     setSubmissionStatus('There was an error. Please try again.');
//     } finally {
//     setIsSubmitting(false);
//     }
// };

// return (
//     <div>

//     <div className="cont">
    
//     <div className="contact-page">
//         <h1>Contact Us</h1>
//         <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="name">Name:</label>
//             <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             />
//         </div>
//         <div>
//             <label htmlFor="email">Email:</label>
//             <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             />
//         </div>
//         <div>
//             <label htmlFor="message">Message:</label>
//             <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             />
//         </div>
//         <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//         </button>
//         </form>
//         {submissionStatus && <p>{submissionStatus}</p>}
//     </div>
    
    
//     </div>
    
//     </div>
// );
// };

// export default ContactUs;