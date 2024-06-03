import React, { useState } from 'react';
import axios from 'axios';

function Sales() {
    const [sale, setSale] = useState({
        product_id: '',
        qty: '',
        sale_at: '',
        users_id: ''
    });

    const handleChange = (e) => {
        setSale({ ...sale, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/sales', sale);
            console.log('Sale created:', response.data);
        } catch (error) {
            console.error('Failed to create sale:', error);
        }
    };

    return (
        <div>
            <h2>Create Sale</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="product_id"
                    value={sale.product_id}
                    onChange={handleChange}
                    placeholder="Product ID"
                    required
                />
                <input
                    type="number"
                    name="qty"
                    value={sale.qty}
                    onChange={handleChange}
                    placeholder="Quantity"
                    required
                />
                <input
                    type="date"
                    name="sale_at"
                    value={sale.sale_at}
                    onChange={handleChange}
                    placeholder="Sale Date"
                    required
                />
                <input
                    type="text"
                    name="users_id"
                    value={sale.users_id}
                    onChange={handleChange}
                    placeholder="User ID"
                    required
                />
                <button type="submit">Create Sale</button>
            </form>
        </div>
    );
}

export default Sales;
