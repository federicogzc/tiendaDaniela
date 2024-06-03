const { Role } = require('../models/index');

exports.createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        console.log("Created role:", role);
        res.status(201).send(role);
    } catch (error) {
        console.error("Error creating role:", error);
        res.status(400).send(error);
    }
};

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (!role) {
            return res.status(404).send({ message: 'Role not found!' });
        }
        res.send(role);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateRole = async (req, res) => {
    try {
        const updated = await Role.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedRole = await Role.findByPk(req.params.id);
            res.send(updatedRole);
        } else {
            res.status(404).send({ message: 'Role not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteRole = async (req, res) => {
    try {
        const result = await Role.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(200).send({ message: 'Role deleted successfully!' });
        } else {
            res.status(404).send({ message: 'Role not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
