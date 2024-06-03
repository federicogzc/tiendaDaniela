import React, { useState } from 'react';
import axios from 'axios';

function Products() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/products', product);
            console.log('Product created:', response.data);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}

export default Products;
