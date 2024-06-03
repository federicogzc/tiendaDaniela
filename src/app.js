const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const saleRoutes = require('./routes/saleRoutes');
const roleRoutes = require('./routes/roleRoutes');
const productRoutes = require('./routes/productRoutes');

// Usar rutas
app.use('/users', userRoutes);
app.use('/sales', saleRoutes);
app.use('/roles', roleRoutes);
app.use('/products', productRoutes);

module.exports = app;
