const { User } = require('../models/index');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("Created user:", user);
        res.status(201).send(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).send(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found!' });
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updated = await User.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.send(updatedUser);
        } else {
            res.status(404).send({ message: 'User not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await User.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(200).send({ message: 'User deleted successfully!' });
        } else {
            res.status(404).send({ message: 'User not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
