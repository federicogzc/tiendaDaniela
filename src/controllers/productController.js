const { Product } = require('../models/index');

exports.createProduct = async (req, res) => {
    console.log("Received body: ", req.body);
    try {
        const product = await Product.create(req.body);
        console.log("Created product:", product);
        res.status(201).send(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(400).send({ error: 'Error creating product', message: error.message });

    }
};



exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found!' });
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Product updated successfully!' });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const result = await Product.destroy({
            where: { id: req.params.id }
        });
        if (!result) return res.status(404).send({ message: 'Product not found!' });
        res.send({ message: 'Product deleted successfully!' });
    } catch (error) {
        res.status(500).send(error);
    }
};
