require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/azhagar-chips', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB Connected Successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
})
.catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.log('Trying to continue without database...');
});

// Simple test route
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'Azhagar Chips API is running!',
        timestamp: new Date().toISOString(),
        database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
});

// Import Product model
const Product = require('./models/Product');

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({ inStock: true });
        res.json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching products',
            error: error.message
        });
    }
});

// Get featured products
app.get('/api/products/featured', async (req, res) => {
    try {
        const products = await Product.find({ featured: true, inStock: true }).limit(4);
        res.json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching featured products',
            error: error.message
        });
    }
});

// Create order route
app.post('/api/orders', async (req, res) => {
    try {
        const Order = require('./models/Order');
        const order = new Order(req.body);
        await order.save();
        
        res.json({
            success: true,
            message: 'Order placed successfully',
            data: {
                orderId: order._id,
                orderNumber: order.orderNumber || `ORD${Date.now()}`,
                total: order.totalAmount
            }
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating order',
            error: error.message
        });
    }
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found'
    });
});

// Error handler
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    🚀 Server running on: http://localhost:${PORT}
    📚 API Endpoints:
       GET  http://localhost:${PORT}/api/test
       GET  http://localhost:${PORT}/api/products
       GET  http://localhost:${PORT}/api/products/featured
       POST http://localhost:${PORT}/api/orders
    🛒 Frontend: Open index.html in browser
    `);
    console.log('Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    mongoose.connection.close();
    process.exit(0);
});