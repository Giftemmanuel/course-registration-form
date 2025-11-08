import React, { useState } from 'react';
import './App.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last Name is required';

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Email is not valid';

    if (!age) newErrors.age = 'Age is required';
    else if (parseInt(age) < 18) newErrors.age = 'You must be 18 or older';

    if (!course) newErrors.course = 'Please select a course';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Reset form
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Course Registration</h2>

      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {errors.age && <p className="error">{errors.age}</p>}

      <label>Course Selection:</label>
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="">--Select a course--</option>
        <option value="react">React Basics</option>
        <option value="javascript">JavaScript Advanced</option>
        <option value="python">Python for Beginners</option>
      </select>
      {errors.course && <p className="error">{errors.course}</p>}

      <button type="submit">Register</button>

      {isSubmitted && (
        <p className="success">Registration successful! Thank you.</p>
      )}
    </form>
  );
}

export default RegistrationForm;
