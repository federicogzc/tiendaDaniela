const { Sale } = require('../models/index');

exports.createSale = async (req, res) => {
    try {
        const sale = await Sale.create(req.body);
        console.log("Created sale:", sale);
        res.status(201).send(sale);
    } catch (error) {
        console.error("Error creating sale:", error);
        res.status(400).send(error);
    }
};

exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.findAll();
        res.send(sales);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getSaleById = async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (!sale) {
            return res.status(404).send({ message: 'Sale not found!' });
        }
        res.send(sale);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateSale = async (req, res) => {
    try {
        const updated = await Sale.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedSale = await Sale.findByPk(req.params.id);
            res.send(updatedSale);
        } else {
            res.status(404).send({ message: 'Sale not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteSale = async (req, res) => {
    try {
        const result = await Sale.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(200).send({ message: 'Sale deleted successfully!' });
        } else {
            res.status(404).send({ message: 'Sale not found!' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
const isValidDate = (date) => {
    return !isNaN(Date.parse(date));
  }
exports.getDailySales = async (req, res) => {
    try {
        const date = req.params.date;// 'YYYY-MM-DD'
        if (!isValidDate(date)) {
            return res.status(400).send({ message: "Fecha inválida." });
        } 
        const startOfDay = new Date(date);
        const endOfDay = new Date(new Date(date).setDate(new Date(date).getDate() + 1));

        const totalSales = await Sale.sum('amount', {
            where: {
                sale_at: {
                    [Sequelize.Op.gte]: startOfDay,
                    [Sequelize.Op.lt]: endOfDay
                }
            }
        });

        res.status(200).send({ date: date, totalSales: totalSales });
    } catch (error) {
        console.error("Error getting daily sales:", error);
        res.status(500).send(error);
    }
};

exports.getMonthlySales = async (req, res) => {
    try {
        const year = parseInt(req.params.year);
        const month = parseInt(req.params.month) - 1;

        const startOfMonth = new Date(year, month, 1);
        const endOfMonth = new Date(year, month + 1, 1);

        const totalSales = await Sale.sum('amount', {
            where: {
                sale_at: {
                    [Sequelize.Op.gte]: startOfMonth,
                    [Sequelize.Op.lt]: endOfMonth
                }
            }
        });

        res.status(200).send({ year: year, month: req.params.month, totalSales: totalSales });
    } catch (error) {
        console.error("Error getting monthly sales:", error);
        res.status(500).send(error);
    }
};
