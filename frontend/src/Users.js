import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [user, setUser] = useState({
        document: '',
        last_name: '',
        name: '',
        roles_id: ''
    });
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Cargar roles desde la API al inicializar
        const fetchRoles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/roles');
                setRoles(response.data);
            } catch (error) {
                console.error('Failed to fetch roles:', error);
            }
        };
        fetchRoles();
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users', user);
            console.log('User created:', response.data);
        } catch (error) {
            console.error('Failed to create user:', error);
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="document"
                    value={user.document}
                    onChange={handleChange}
                    placeholder="Document"
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    value={user.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <select
                    name="roles_id"
                    value={user.roles_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                            {role.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
}

export default Users;
