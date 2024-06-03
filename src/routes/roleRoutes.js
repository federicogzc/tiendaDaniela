const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// Rutas para operaciones CRUD en roles
router.post('/', roleController.createRole);
router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;
