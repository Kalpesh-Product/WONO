// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/bodyLogin.css'; // Ensure this file is correctly imported

// const NewPassword = () => {
//     const navigate = useNavigate();
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [formData, setFormData] = useState({
//         password : ''
//     })

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Basic password validation
//         if (newPassword.length < 6) {
//             setError('Password must be at least 6 characters long');
//             return;
//         }

//         if (newPassword !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         // Handle form submission
//         // Replace with your backend request logic
//         console.log('New Password:', newPassword);
//         setSuccessMessage('Password updated successfully');
//         setError('');

//         // Optionally redirect after successful submission
//         navigate('/login');
//     };

//     return (
//         <div className="login-left-container">
//             <h2 className="text-center mb-4">Reset Your Password</h2>
//             <form className='loginForm' onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <input
//                         type="password"
//                         className="form-control"
//                         placeholder="New Password"
//                         aria-label="new-password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Confirm New Password"
//                         aria-label="confirm-password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 {error && <div className="text-danger">{error}</div>}
//                 {successMessage && <div className="text-success">{successMessage}</div>}
//                 <div className="mb-3">
//                     <button type="submit" className="login-page-button w-100">
//                         Update Password
//                     </button>
//                 </div>
//                 <div className="text-center mt-3">
//                     <span>Remember your password? <a href="/login" className="text-primary">Login</a></span>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default NewPassword;
