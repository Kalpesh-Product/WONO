import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="table-users" style={{ paddingTop: '2rem', paddingBottom: '8rem' }}>

    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>#</th>
          <th>Partner Type</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>LinkedIn Profile</th>
          <th>Country</th>
          <th>City</th>
          <th>Message</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.partnerstype}</td>
            <td>{user.name}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td><a href={user.link} target="_blank" rel="noopener noreferrer">{user.link}</a></td>
            <td>{user.country}</td>
            <td>{user.city}</td>
            <td>{user.message}</td>
            <td>{new Date(user.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default RegisteredUsers;
