import React, { useState } from 'react';
import Axios from 'axios';
import '../styles/SellWithUs.css';
import Bg from '../Assets/SellWithUs.jpg';

const SellWithUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    city: '',
    designer: '',
    productDescription: '',
    outfitSize: '',
    margin: '',
    height: '',
    frontPictures: [],
    labelPicture: [],
    proofOfPurchase: '',
    proofOfPurchaseFile: [],
    productCondition: '',
    worn: '',
    packaging: '',
    originalPrice: '',
    purchaseYear: '',
    offerPrice: '',
    rentOption: ''
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = new FormData();
    
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await Axios.post('http://localhost:8080/api/sellwithus/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSubmitted(true);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="backkk" style={{
      background: `linear-gradient(
        rgba(0, 0, 0, 0.4), 
        rgba(0, 0, 0, 0.4)
      ), url(${Bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="sell-with-us-container">
        <h1>SELL WITH US</h1>
        <p>You can now cash in on your wardrobe by listing your designer wear on our website to sell, we charge a 20% commission on all sales.</p>
        {submitted ? (
          <div className="submission-message">
            <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
          </div>
        ) : (
          <form className="sell-with-us-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-full-name">
                <label>Full Name*</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-contact-number">
                <label>Contact Number*</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-email">
                <label>Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-city">
                <label>City*</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-designer">
                <label>Designer of the Outfit*</label>
                <input type="text" name="designer" value={formData.designer} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-description">
                <label>Product Description*</label>
                <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} required />
              </div>
            </div>
            <div className="sell-with-us-form-group sell-with-us-size">
              <label>Outfit Size*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="outfitSize" value="XS" onChange={handleChange} required /> XS</label>
                <label><input type="radio" name="outfitSize" value="S" onChange={handleChange} /> S</label>
                <label><input type="radio" name="outfitSize" value="M" onChange={handleChange} /> M</label>
                <label><input type="radio" name="outfitSize" value="L" onChange={handleChange} /> L</label>
                <label><input type="radio" name="outfitSize" value="XL" onChange={handleChange} /> XL</label>
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-margin">
                <label>Margin in the Outfit</label>
                <input type="text" name="margin" value={formData.margin} onChange={handleChange} />
              </div>
              <div className="sell-with-us-form-group sell-with-us-height">
                <label>Your Height*</label>
                <input type="text" name="height" value={formData.height} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-upload-front">
                <label>Upload Front Pictures of the Outfit*</label>
                <input type="file" name="frontPictures" className="sell-with-us-file-input" onChange={handleChange} multiple required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-upload-label">
                <label>Upload Label Picture Inside the Outfit*</label>
                <input type="file" name="labelPicture" className="sell-with-us-file-input" onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-proof">
                <label>Proof of Purchase*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="proofOfPurchase" value="Invoice" onChange={handleChange} required /> Invoice</label>
                  <label><input type="radio" name="proofOfPurchase" value="Email" onChange={handleChange} /> Email</label>
                </div>
                <input type="file" name="proofOfPurchaseFile" className="sell-with-us-file-input" onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-condition">
                <label>Product Condition (New)*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="productCondition" value="Yes" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="productCondition" value="No" onChange={handleChange} /> No</label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-times-worn">
                <label>Worn*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="worn" value="Yes" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="worn" value="No" onChange={handleChange} /> No</label>
                </div>
              </div>
              <div className="sell-with-us-form-group sell-with-us-packaging">
                <label>Packaging*</label>
                <div className="sell-with-us-radio-group">
                  <label><input type="radio" name="packaging" value="Yes" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="packaging" value="No" onChange={handleChange} /> No</label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="sell-with-us-form-group sell-with-us-original-price">
                <label>Original Purchase Price*</label>
                <input type="text" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required />
              </div>
              <div className="sell-with-us-form-group sell-with-us-purchase-year">
                <label>Purchase Year*</label>
                <input type="number" name="purchaseYear" min="1900" max={new Date().getFullYear()} value={formData.purchaseYear} onChange={handleChange} required />
              </div>
            </div>
            <div className="sell-with-us-form-group sell-with-us-offer-price">
              <label>Your Offer Price (in rupees)*</label>
              <input type="text" name="offerPrice" value={formData.offerPrice} onChange={handleChange} required />
            </div>

            <div className="sell-with-us-form-group sell-with-us-rent">
              <label>Are you open to putting your outfit up for rent?*</label>
              <div className="sell-with-us-radio-group">
                <label><input type="radio" name="rentOption" value="Yes" onChange={handleChange} required /> Yes</label>
                <label><input type="radio" name="rentOption" value="No" onChange={handleChange} /> No</label>
              </div>
            </div>
            <button type="submit" className="sell-with-us-submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellWithUs;



// import React, { useState } from 'react';
// import '../styles/SellWithUs.css';
// import Bg from '../Assets/SellWithUs.jpg';

// const SellWithUs = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     setSubmitted(true);
//   };

//   return (
//     <div className="backkk" style={{
//       background: `linear-gradient(
//         rgba(0, 0, 0, 0.4), 
//         rgba(0, 0, 0, 0.4)
//       ), url(${Bg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundAttachment: 'fixed'
//     }}>
//       <div className="sell-with-us-container">
//         <h1>SELL WITH US</h1>
//         <p>You can now cash in on your wardrobe by listing your designer wear on our website to sell, we charge a 20% commission on all sales.</p>
//         {submitted ? (
//           <div className="submission-message">
//             <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
//           </div>
//         ) : (
//           <form className="sell-with-us-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-full-name">
//                 <label>Full Name*</label>
//                 <input type="text" required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-contact-number">
//                 <label>Contact Number*</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-email">
//                 <label>Email*</label>
//                 <input type="email" required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-city">
//                 <label>City*</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-designer">
//                 <label>Designer of the Outfit*</label>
//                 <input type="text" required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-description">
//                 <label>Product Description*</label>
//                 <textarea required />
//               </div>
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-size">
//               <label>Outfit Size*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="size" value="XS" required /> XS</label>
//                 <label><input type="radio" name="size" value="S" /> S</label>
//                 <label><input type="radio" name="size" value="M" /> M</label>
//                 <label><input type="radio" name="size" value="L" /> L</label>
//                 <label><input type="radio" name="size" value="XL" /> XL</label>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-margin">
//                 <label>Margin in the Outfit</label>
//                 <input type="text" />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-height">
//                 <label>Your Height*</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-upload-front">
//                 <label>Upload Front Pictures of the Outfit*</label>
//                 <input type="file" className="sell-with-us-file-input" multiple required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-upload-label">
//                 <label>Upload Label Picture Inside the Outfit*</label>
//                 <input type="file" className="sell-with-us-file-input" required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-proof">
//                 <label>Proof of Purchase*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="proof" value="Invoice" required /> Invoice</label>
//                   <label><input type="radio" name="proof" value="Email" /> Email</label>
//                 </div>
//                 <input type="file" className="sell-with-us-file-input" required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-condition">
//                 <label>Product Condition (New)*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="times-worn" value="Yes" required /> Yes</label>
//                   <label><input type="radio" name="times-worn" value="No" /> No</label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-times-worn">
//                 <label>Worn*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="times-worn" value="Yes" required /> Yes</label>
//                   <label><input type="radio" name="times-worn" value="No" /> No</label>
//                 </div>
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-packaging">
//                 <label>Packaging*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="packaging" value="Yes" required /> Yes</label>
//                   <label><input type="radio" name="packaging" value="No" /> No</label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-original-price">
//                 <label>Original Purchase Price*</label>
//                 <input type="text" required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-purchase-year">
//                 <label>Purchase Year*</label>
//                 <input type="number" min="1900" max={new Date().getFullYear()} required />
//               </div>
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-offer-price">
//               <label>Your Offer Price (in rupees)*</label>
//               <input type="text" required />
//             </div>

//             <div className="sell-with-us-form-group sell-with-us-rent">
//               <label>Are you open to putting your outfit up for rent?*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="rent" value="Yes" required /> Yes</label>
//                 <label><input type="radio" name="rent" value="No" /> No</label>
//               </div>
//             </div>
//             <button type="submit" className="sell-with-us-submit-button">Submit</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SellWithUs;


// import React, { useState } from 'react';
// import axios from 'axios'; // To handle HTTP requests
// import '../styles/SellWithUs.css';
// import Bg from '../Assets/SellWithUs.jpg';

// const SellWithUs = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     contactNumber: '',
//     email: '',
//     city: '',
//     designer: '',
//     description: '',
//     size: '',
//     margin: '',
//     height: '',
//     frontPictures: [],
//     labelPicture: null,
//     proof: [],
//     condition: '',
//     timesWorn: '',
//     packaging: '',
//     originalPrice: '',
//     purchaseYear: '',
//     offerPrice: '',
//     concierge: '',
//     rent: '',
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
    
//     if (type === 'checkbox') {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: prevData[name].includes(value)
//           ? prevData[name].filter(item => item !== value)
//           : [...prevData[name], value]
//       }));
//     } else if (type === 'radio') {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleFileChange = (event) => {
//     const { name, files } = event.target;

//     if (name === 'frontPictures') {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: files
//       }));
//     } else if (name === 'labelPicture') {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: files[0]
//       }));
//     } else if (name === 'proof') {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: files
//       }));
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = new FormData();
//     for (const key in formData) {
//       if (Array.isArray(formData[key])) {
//         for (let i = 0; i < formData[key].length; i++) {
//           data.append(key, formData[key][i]);
//         }
//       } else if (formData[key] instanceof FileList) {
//         for (let i = 0; i < formData[key].length; i++) {
//           data.append(key, formData[key][i]);
//         }
//       } else {
//         data.append(key, formData[key]);
//       }
//     }

//     axios.post('http://localhost:8080/api/sellwithus/submit', data, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//     .then(response => {
//       console.log(response.data);
//       setSubmitted(true);
//     })
//     .catch(error => {
//       console.error('There was an error submitting the form!', error);
//     });
//   };

//   return (
//     <div className="backkk" style={{
//       background: `linear-gradient(
//         rgba(0, 0, 0, 0.4), 
//         rgba(0, 0, 0, 0.4)
//       ), url(${Bg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundAttachment: 'fixed'
//     }}>
//       <div className="sell-with-us-container">
//         <h1>SELL WITH US</h1>
//         <p>You can now cash in on your wardrobe by listing your designer wear on our website to sell; we charge a 20% commission on all sales.</p>
//         {submitted ? (
//           <div className="submission-message">
//             <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
//           </div>
//         ) : (
//           <form className="sell-with-us-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-full-name">
//                 <label>Full Name*</label>
//                 <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-contact-number">
//                 <label>Contact Number*</label>
//                 <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-email">
//                 <label>Email*</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-city">
//                 <label>City*</label>
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-designer">
//                 <label>Designer of the Outfit*</label>
//                 <input type="text" name="designer" value={formData.designer} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-description">
//                 <label>Product Description*</label>
//                 <input type="text" name="description" value={formData.description} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-size">
//               <label>Outfit Size*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="size" value="XS" onChange={handleChange} required /> XS</label>
//                 <label><input type="radio" name="size" value="S" onChange={handleChange} /> S</label>
//                 <label><input type="radio" name="size" value="M" onChange={handleChange} /> M</label>
//                 <label><input type="radio" name="size" value="L" onChange={handleChange} /> L</label>
//                 <label><input type="radio" name="size" value="XL" onChange={handleChange} /> XL</label>
//                 <label><input type="radio" name="size" value="XXL-XXXL" onChange={handleChange} /> XXL-XXXL</label>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-margin">
//                 <label>Margin in the outfit</label>
//                 <input type="text" name="margin" value={formData.margin} onChange={handleChange} />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-height">
//                 <label>Your Height*</label>
//                 <input type="text" name="height" value={formData.height} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-upload-front">
//                 <label>Upload Front Pictures of the Outfit*</label>
//                 <input type="file" name="frontPictures" className="sell-with-us-file-input" onChange={handleFileChange} multiple required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-upload-label">
//                 <label>Upload Label Picture Inside the Outfit*</label>
//                 <input type="file" name="labelPicture" className="sell-with-us-file-input" onChange={handleFileChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-proof">
//                 <label>Proof of Purchase*</label>
//                 <div className="sell-with-us-checkbox-group">
//                   <label><input type="checkbox" name="proof" value="Invoice" onChange={handleChange} /> Invoice/Bill</label>
//                   <label><input type="checkbox" name="proof" value="Email" onChange={handleChange} /> Email</label>
//                   <label><input type="checkbox" name="proof" value="Transaction" onChange={handleChange} /> Transaction</label>
//                   <label><input type="checkbox" name="proof" value="Other" onChange={handleChange} /> Other</label>
//                 </div>
//                 <input type="file" name="proof" className="sell-with-us-file-input" onChange={handleFileChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-condition">
//                 <label>Product Condition*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="condition" value="New with tags" onChange={handleChange} required /> New with tags</label>
//                   <label><input type="radio" name="condition" value="New without tags" onChange={handleChange} /> New without tags</label>
//                   <label><input type="radio" name="condition" value="Gently Used" onChange={handleChange} /> Gently Used</label>
//                   <label><input type="radio" name="condition" value="Heavily Used" onChange={handleChange} /> Heavily Used</label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-times-worn">
//                 <label>Times Worn*</label>
//                 <input type="text" name="timesWorn" value={formData.timesWorn} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-packaging">
//                 <label>Packaging*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="packaging" value="Original" onChange={handleChange} required /> Original</label>
//                   <label><input type="radio" name="packaging" value="Replacement" onChange={handleChange} /> Replacement</label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-original-price">
//                 <label>Original Price (INR)*</label>
//                 <input type="text" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-purchase-year">
//                 <label>Year of Purchase*</label>
//                 <input type="text" name="purchaseYear" value={formData.purchaseYear} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-offer-price">
//                 <label>Offer Price (INR)*</label>
//                 <input type="text" name="offerPrice" value={formData.offerPrice} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-concierge">
//                 <label>Concierge Service Required*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="concierge" value="Yes" onChange={handleChange} required /> Yes</label>
//                   <label><input type="radio" name="concierge" value="No" onChange={handleChange} /> No</label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-rent">
//                 <label>Rent</label>
//                 <input type="text" name="rent" value={formData.rent} onChange={handleChange} />
//               </div>
//             </div>
//             <button type="submit" className="sell-with-us-submit-button">Submit</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SellWithUs;




// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/SellWithUs.css';
// import Bg from '../Assets/SellWithUs.jpg';

// const SellWithUs = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     contactNumber: '',
//     email: '',
//     city: '',
//     designer: '',
//     description: '',
//     size: '',
//     margin: '',
//     height: '',
//     frontPictures: [],
//     labelPicture: null,
//     proof: [],
//     condition: '',
//     timesWorn: '',
//     packaging: '',
//     originalPrice: '',
//     purchaseYear: '',
//     offerPrice: '',
//     concierge: '',
//     rent: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       if (name === 'frontPictures') {
//         setFormData((prevState) => ({
//           ...prevState,
//           [name]: Array.from(files)
//         }));
//       } else {
//         setFormData((prevState) => ({
//           ...prevState,
//           [name]: files[0]
//         }));
//       }
//     } else if (type === 'checkbox') {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: prevState[name].includes(value)
//           ? prevState[name].filter(item => item !== value)
//           : [...prevState[name], value]
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach(key => {
//         if (Array.isArray(formData[key])) {
//           formData[key].forEach(value => formDataToSend.append(key, value));
//         } else if (formData[key] instanceof FileList) {
//           Array.from(formData[key]).forEach(file => formDataToSend.append(key, file));
//         } else if (formData[key] instanceof File) {
//           formDataToSend.append(key, formData[key]);
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       });

//       await axios.post('http://localhost:8080/api/SellWithUs/create', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error submitting the form', error);
//       alert('Error submitting the form');
//     }
//   };

//   return (
//     <div className="backkk" style={{
//       background: `linear-gradient(
//         rgba(0, 0, 0, 0.4), 
//         rgba(0, 0, 0, 0.4)
//       ), url(${Bg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundAttachment: 'fixed'
//     }}>
//       <div className="sell-with-us-container">
//         <h1>SELL WITH US</h1>
//         <p>You can now cash in on your wardrobe by listing your designer wear on our website to sell, we charge a 20% commission on all sales.</p>
//         {submitted ? (
//           <div className="submission-message">
//             <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
//           </div>
//         ) : (
//           <form className="sell-with-us-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-full-name">
//                 <label>Full Name*</label>
//                 <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-contact-number">
//                 <label>Contact Number*</label>
//                 <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-email">
//                 <label>Email*</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-city">
//                 <label>City*</label>
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-designer">
//                 <label>Designer of the Outfit*</label>
//                 <input type="text" name="designer" value={formData.designer} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-description">
//                 <label>Product Description*</label>
//                 <input type="text" name="description" value={formData.description} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-size">
//               <label>Outfit Size*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="size" value="XS" checked={formData.size === 'XS'} onChange={handleChange} required /> XS</label>
//                 <label><input type="radio" name="size" value="S" checked={formData.size === 'S'} onChange={handleChange} /> S</label>
//                 <label><input type="radio" name="size" value="M" checked={formData.size === 'M'} onChange={handleChange} /> M</label>
//                 <label><input type="radio" name="size" value="L" checked={formData.size === 'L'} onChange={handleChange} /> L</label>
//                 <label><input type="radio" name="size" value="XL" checked={formData.size === 'XL'} onChange={handleChange} /> XL</label>
//                 <label><input type="radio" name="size" value="XXL-XXXL" checked={formData.size === 'XXL-XXXL'} onChange={handleChange} /> XXL-XXXL</label>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-margin">
//                 <label>Margin in the outfit</label>
//                 <input type="text" name="margin" value={formData.margin} onChange={handleChange} />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-height">
//                 <label>Your Height*</label>
//                 <input type="text" name="height" value={formData.height} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-upload-front">
//                 <label>Upload Front Pictures of the Outfit*</label>
//                 <input type="file" name="frontPictures" className="sell-with-us-file-input" onChange={handleChange} multiple required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-upload-label">
//                 <label>Upload Label Picture Inside the Outfit*</label>
//                 <input type="file" name="labelPicture" className="sell-with-us-file-input" onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-proof">
//                 <label>Proof of Purchase*</label>
//                 <div className="sell-with-us-checkbox-group">
//                   <label><input type="checkbox" name="proof" value="Invoice" checked={formData.proof.includes('Invoice')} onChange={handleChange} /> Invoice/Bill</label>
//                   <label><input type="checkbox" name="proof" value="Email" checked={formData.proof.includes('Email')} onChange={handleChange} /> Email</label>
//                   <label><input type="checkbox" name="proof" value="Transaction" checked={formData.proof.includes('Transaction')} onChange={handleChange} /> Transaction</label>
//                   <label><input type="checkbox" name="proof" value="Other" checked={formData.proof.includes('Other')} onChange={handleChange} /> Other</label>
//                 </div>
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-condition">
//                 <label>Product Condition*</label>
//                 <div className="sell-with-us-radio-group">
//                   <label><input type="radio" name="condition" value="New with tags" checked={formData.condition === 'New with tags'} onChange={handleChange} required /> New with tags</label>
//                   <label><input type="radio" name="condition" value="New without tags" checked={formData.condition === 'New without tags'} onChange={handleChange} /> New without tags</label>
//                   <label><input type="radio" name="condition" value="Used" checked={formData.condition === 'Used'} onChange={handleChange} /> Used</label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-times-worn">
//                 <label>Times Worn</label>
//                 <input type="text" name="timesWorn" value={formData.timesWorn} onChange={handleChange} />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-packaging">
//                 <label>Packaging*</label>
//                 <input type="text" name="packaging" value={formData.packaging} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-original-price">
//                 <label>Original Price*</label>
//                 <input type="text" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-purchase-year">
//                 <label>Purchase Year*</label>
//                 <input type="text" name="purchaseYear" value={formData.purchaseYear} onChange={handleChange} required />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="sell-with-us-form-group sell-with-us-offer-price">
//                 <label>Offer Price*</label>
//                 <input type="text" name="offerPrice" value={formData.offerPrice} onChange={handleChange} required />
//               </div>
//               <div className="sell-with-us-form-group sell-with-us-concierge">
//                 <label>Concierge Option*</label>
//                 <select name="concierge" value={formData.concierge} onChange={handleChange} required>
//                   <option value="">Select an option</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-rent">
//               <label>Rent Option*</label>
//               <select name="rent" value={formData.rent} onChange={handleChange} required>
//                 <option value="">Select an option</option>
//                 <option value="Rent">Rent</option>
//                 <option value="Sell">Sell</option>
//               </select>
//             </div>
//             <button type="submit" className="sell-with-us-submit-button">Submit</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SellWithUs;



// import React, { useState } from 'react';
// import '../styles/SellWithUs.css';
// import Bg from '../Assets/SellWithUs.jpg';

// const SellWithUs = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     setSubmitted(true);
//   };

//   return (
//     <div className="backkk" style={{
//       background: `linear-gradient(
//         rgba(0, 0, 0, 0.4), 
//         rgba(0, 0, 0, 0.4)
//       ), url(${Bg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundAttachment: 'fixed'
//     }}>
//     <div className="sell-with-us-container">
//       <h1>SELL WITH US</h1>
//       <p>You can now cash in on your wardrobe by listing your designer wear on our website to sell, we charge a 20% commission on all sales.</p>
//       {submitted ? (
//         <div className="submission-message">
//           <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
//         </div>
//       ) : (
//         <form className="sell-with-us-form" onSubmit={handleSubmit}>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-full-name">
//               <label>Full Name*</label>
//               <input type="text" required />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-contact-number">
//               <label>Contact Number*</label>
//               <input type="text" required />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-email">
//               <label>Email*</label>
//               <input type="email" required />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-city">
//               <label>City*</label>
//               <input type="text" required />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-designer">
//               <label>Designer of the Outfit*</label>
//               <input type="text" required />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-description">
//               <label>Product Description*</label>
//               <input type="text" required />
//             </div>
//           </div>
//           <div className="sell-with-us-form-group sell-with-us-size">
//             <label>Outfit Size*</label>
//             <div className="sell-with-us-radio-group">
//               <label><input type="radio" name="size" value="XS" required /> XS</label>
//               <label><input type="radio" name="size" value="S" /> S</label>
//               <label><input type="radio" name="size" value="M" /> M</label>
//               <label><input type="radio" name="size" value="L" /> L</label>
//               <label><input type="radio" name="size" value="XL" /> XL</label>
//               <label><input type="radio" name="size" value="XXL-XXXL" /> XXL-XXXL</label>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-margin">
//               <label>Margin in the outfit</label>
//               <input type="text" />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-height">
//               <label>Your Height*</label>
//               <input type="text" required />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-upload-front">
//               <label>Upload Front Pictures of the Outfit*</label>
//               <input type="file" className="sell-with-us-file-input" multiple required />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-upload-label">
//               <label>Upload Label Picture Inside the Outfit*</label>
//               <input type="file" className="sell-with-us-file-input" required />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-proof">
//               <label>Proof of Purchase*</label>
//               <div className="sell-with-us-checkbox-group">
//                 <label><input type="checkbox" name="proof" value="Invoice" /> Invoice/Bill</label>
//                 <label><input type="checkbox" name="proof" value="Email" /> Email</label>
//                 <label><input type="checkbox" name="proof" value="Transaction" /> Transaction</label>
//                 <label><input type="checkbox" name="proof" value="Other" /> Other</label>
//               </div>
//               <input type="file" className="sell-with-us-file-input" required />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-condition">
//               <label>Product Condition*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="condition" value="New with tags" required /> New with tags</label>
//                 <label><input type="radio" name="condition" value="New without tags" /> New without tags</label>
//                 <label><input type="radio" name="condition" value="Very good" /> Very good condition</label>
//                 <label><input type="radio" name="condition" value="Good" /> Good condition</label>
//                 <label><input type="radio" name="condition" value="Fair" /> Fair condition</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-times-worn">
//               <label>Number of Times Worn*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="times-worn" value="1-2" required /> 1-2</label>
//                 <label><input type="radio" name="times-worn" value="2-5" /> 2-5</label>
//                 <label><input type="radio" name="times-worn" value="Above 5" /> Above 5</label>
//               </div>
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-packaging">
//               <label>Packaging*</label>
//               <div className="sell-with-us-radio-group">
//                 <label><input type="radio" name="packaging" value="Dust Bag" required /> Dust Bag</label>
//                 <label><input type="radio" name="packaging" value="Box" /> Box</label>
//                 <label><input type="radio" name="packaging" value="Not available" /> Not available</label>
//               </div>
//               <input type="file" className="sell-with-us-file-input" required />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="sell-with-us-form-group sell-with-us-original-price">
//               <label>Original Purchase Price*</label>
//               <input type="text" required />
//             </div>
//             <div className="sell-with-us-form-group sell-with-us-purchase-year">
//               <label>Purchase Year*</label>
//               <input type="text" required />
//             </div>
//           </div>
//           <div className="sell-with-us-form-group sell-with-us-offer-price">
//             <label>Your Offer Price (in rupees)*</label>
//             <input type="text" required />
//           </div>
//           <div className="sell-with-us-form-group sell-with-us-concierge">
//             <label>Would you like to sign up for our Concierge Service?*</label>
//             <div className="sell-with-us-radio-group">
//               <label><input type="radio" name="concierge" value="Yes" required /> Yes</label>
//               <label><input type="radio" name="concierge" value="No" /> No</label>
//             </div>
//           </div>
//           <div className="sell-with-us-form-group sell-with-us-rent">
//             <label>Are you open to putting your outfit up for rent?*</label>
//             <div className="sell-with-us-radio-group">
//               <label><input type="radio" name="rent" value="Yes" required /> Yes</label>
//               <label><input type="radio" name="rent" value="No" /> No</label>
//             </div>
//           </div>
//           <button type="submit" className="sell-with-us-submit-button">Submit</button>
//         </form>
//       )}
//     </div>
//     </div>
//   );
// };

// export default SellWithUs;