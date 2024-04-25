import  { useState } from 'react';
import './App.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    address: '',
    pincode:'',
    nationality:'',
    gender: '',
    dob: '',
    mobile: '',
    email: '',
    religion:'',
    bloodgroup:'',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullname, address, pincode, nationality, religion, dob, mobile, email, gender, bloodgroup, course } = formData;
    const output = `Full Name: ${fullname}\nAddress: ${address}\nPincode: ${pincode}\nNationality: ${nationality}\nReligion: ${religion}\nDOM ${dob}\nMobile: ${mobile}\nEmail: ${email}nGender: ${gender}\nBlood Group: ${bloodgroup}\Course: ${course}`;  
    alert(output);
    console.log(output);
  };

  const handleCancel = () => {
    setFormData({
      fullname: '',
      address: '',
      pincode:'',
      nationality:'',
      gender: '',
      dob: '',
      mobile: '',
      email: '',
      religion:'',
      bloodgroup: '',
      course: '',
    });
  };

  return (
    <div className="registration-form">

      <h1>K.V.M HIGHER SECONDARY SCHOOL</h1>
      <h2>Admission Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullname"
              placeholder='Enter you Full Name'
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder='Enter your Address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              placeholder='Enter your Pincode'
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              placeholder='Enter your Nationality'
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="" disabled selected>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Blood Group:</label>
            <select name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} required>
              <option value="" disabled selected>Select</option>
              <option value="a+">A+</option>
              <option value="b+">B+</option>
              <option value="o+">O+</option>
              <option value="ab+">AB+</option>
              <option value="other">Other</option>
              
  
            </select>
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder='Enter your Number'
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
          <label>Religion:</label>
            <select name="religion" value={formData.religion} onChange={handleChange} required>
              <option value="" disabled selected>Select</option>
              <option value="hindu">Hindu</option>
              <option value="christian">Christian</option>
              <option value="muslim">Muslim</option>
            </select>
            
          </div>
       
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="" disabled selected>Select your Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
        </div>
        <div className="buttons">
          <button type="submit">Register</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;