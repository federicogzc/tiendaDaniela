const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

// Rutas para operaciones CRUD en ventas
router.post('/', saleController.createSale);
router.get('/', saleController.getAllSales);
router.get('/:id', saleController.getSaleById);
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);
router.get('/daily/:date', saleController.getDailySales);
router.get('/monthly/:year/:month', saleController.getMonthlySales);

module.exports = router;
