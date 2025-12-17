
# 🛒 Azhagar Hot Chips & Sweets - Online Food Ordering Website

A full-stack e-commerce website for authentic Tamil Nadu snacks like Murukku, Sevu, Hot Chips, and traditional sweets with complete ordering and payment functionality.

## ✨ Features

### 🎨 Frontend Features
- **Modern Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Product Catalog** - Browse snacks by categories (Hot Chips, Murukku, Sevu, Sweets)
- **Shopping Cart** - Add/remove items, adjust quantities
- **Checkout Process** - Multi-step checkout with delivery details
- **Multiple Payment Options** - Card, UPI, Cash on Delivery
- **Order Confirmation** - Real-time order tracking with order ID
- **User-Friendly Interface** - Intuitive navigation and smooth animations

### ⚙️ Backend Features
- **RESTful API** - Built with Node.js & Express.js
- **Database** - MongoDB for product and order management
- **Authentication** - User session management
- **Order Processing** - Complete order lifecycle management
- **Product Management** - CRUD operations for products

## 📁 Project Structure

```

azhagar-chips/
├──frontend/                  # Frontend HTML/CSS/JS files
│├── index.html            # Main website file
│├── assets/
││   ├── css/
││   │   └── style.css     # Styles (extracted from HTML)
││   ├── js/
││   │   └── app.js        # JavaScript (extracted from HTML)
││   └── images/           # Product images
│└── README.md
├──backend/                   # Backend server files
│├── server.js             # Main server file
│├── package.json          # Dependencies
│├── .env                  # Environment variables
│├── config/
││   └── database.js       # MongoDB connection
│├── models/
││   ├── Product.js        # Product schema
││   └── Order.js          # Order schema
│├── routes/
││   ├── products.js       # Product routes
││   └── orders.js         # Order routes
│├── scripts/
││   └── seedData.js       # Database seeding script
│└── controllers/
└──README.md                 # This file

```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or Atlas)
- Web browser
- Code editor (VS Code recommended)

### Installation

#### Option 1: Frontend Only (HTML/CSS/JS)
1. Clone/download the project
2. Open `index.html` in browser
3. That's it! Frontend works immediately

#### Option 2: Full Stack (with Backend)

**Step 1: Setup Backend**
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/azhagar-chips" > .env
echo "PORT=3000" >> .env

# Start MongoDB service (Windows)
net start MongoDB

# Seed database with sample products
node scripts/seedData.js

# Start backend server
npm run dev
```

Step 2: Setup Frontend

1. Open index.html in browser
2. Or use Live Server extension in VS Code
3. Website automatically connects to backend API

Access Points

· Frontend: index.html or hosted URL
· Backend API: http://localhost:3000
· API Documentation: http://localhost:3000/api/test
· MongoDB: mongodb://localhost:27017/azhagar-chips

🔧 API Endpoints

Products

· GET /api/products - Get all products
· GET /api/products/featured - Get featured products
· GET /api/products/:id - Get single product

Orders

· POST /api/orders - Create new order
· GET /api/orders/:id - Get order by ID

Test

· GET /api/test - Test API connection

🛍️ Product Categories

1. Hot Chips - Spicy traditional chips
2. Murukku - Crispy rice flour snacks
3. Sevu - Chickpea flour noodles
4. Sweets - Traditional Tamil sweets

💳 Payment Methods

1. Credit/Debit Card - Secure card payments
2. UPI - Google Pay, PhonePe, etc.
3. Cash on Delivery - Pay when you receive

🎯 User Flow

1. Browse Products → View categories and products
2. Add to Cart → Select items and quantities
3. Checkout → Enter delivery details
4. Payment → Choose payment method
5. Confirmation → Get order ID and tracking

📦 Database Schema

Product

```javascript
{
  name: String,          // Product name
  price: Number,         // Price in ₹
  category: String,      // Category
  image: String,         // Image URL
  description: String,   // Product description
  featured: Boolean,     // Featured product
  inStock: Boolean       // Availability
}
```

Order

```javascript
{
  customerName: String,  // Customer name
  phone: String,         // Contact number
  email: String,         // Email address
  address: String,       // Delivery address
  items: Array,          // Order items
  totalAmount: Number,   // Order total
  paymentMethod: String, // Payment type
  status: String,        // Order status
  orderNumber: String    // Unique order ID
}
```

🚀 Deployment

Frontend Deployment

· Netlify: Drag & drop index.html
· GitHub Pages: Push to GitHub repo
· Vercel: Import from GitHub

Backend Deployment

· Render.com: Free Node.js hosting
· Heroku: Platform as a Service
· AWS/Google Cloud: For production

Database Deployment

· MongoDB Atlas: Free cloud database
· Railway.app: Database hosting
· Self-hosted: Local MongoDB

🧪 Testing

Test Products

The database is seeded with 8 sample products:

1. Kara Sev (₹120)
2. Murukku (₹150)
3. Omapodi (₹110)
4. Mysore Pak (₹200)
5. Thattai (₹130)
6. Mixture (₹180)
7. Ribbon Pakoda (₹140)
8. Badusha (₹220)

Test Order

Use test credentials:

· Name: Test Customer
· Phone: 9876543210
· Email: test@example.com
· Address: Test Address, Madurai

🔍 Troubleshooting

Common Issues

1. Port 3000 already in use
   ```bash
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```
2. MongoDB connection failed
   ```bash
   net start MongoDB
   # Or use Atlas: mongodb+srv://...
   ```
3. Products not loading
   · Check backend is running
   · Check MongoDB connection
   · Check CORS settings
4. Payment not working
   · Use mock payment for testing
   · Check order API endpoint

Debug Commands

```bash
# Check MongoDB
mongosh --eval "use azhagar-chips; db.products.count()"

# Test API
curl http://localhost:3000/api/products

# Check server logs
npm run dev
```

📱 Responsive Design

The website is optimized for:

· 📱 Mobile (320px and up)
· 💻 Tablet (768px and up)
· 🖥️ Desktop (1024px and up)

🎨 Color Scheme

Color Use Hex Code
Primary Buttons, Highlights #d32f2f
Secondary Accents, Tags #ff9800
Light Backgrounds #f5f5f5
Dark Text, Headers #333333
Success Success messages #4caf50

🔒 Security Features

· Input Validation - All form inputs validated
· XSS Protection - HTML escaping in outputs
· CORS Configuration - Restricted origins
· No Sensitive Data - No real payment processing in demo

📈 Future Enhancements

1. User Authentication - Login/Registration
2. Admin Dashboard - Manage products/orders
3. Payment Gateway - Razorpay/Stripe integration
4. Email Notifications - Order confirmations
5. Inventory Management - Stock tracking
6. Review System - Customer ratings
7. Discount Coupons - Promotional offers
8. Order Tracking - Real-time delivery tracking

🤝 Contributing

1. Fork the repository
2. Create feature branch (git checkout -b feature/AmazingFeature)
3. Commit changes (git commit -m 'Add AmazingFeature')
4. Push to branch (git push origin feature/AmazingFeature)
5. Open Pull Request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

👥 Team

· Developer: [Your Name]
· Designer: [Your Name]
· Tester: [Your Name]

📞 Contact & Support

For support, questions, or feedback:

· Email: ramakrishnan1976alagar@gmail.com
· Phone: +91 9488212500
· Address: 31,ganesh complex,cutcherry road,mayiladuthurai, Tamil Nadu 609001

🙏 Acknowledgments

· Images from Unsplash & Pexels
· Icons from Font Awesome
· Fonts from Google Fonts
· Inspiration from traditional Tamil snack shops

---

<div align="center">
  <h3>Made with ❤️ for Tamil Nadu Food Lovers</h3>
  <p>Bringing authentic Tamil snacks to your doorstep since 2023</p>

https://img.shields.io/badge/Website-Live-brightgreen
https://img.shields.io/badge/API-Docs-blue
https://img.shields.io/badge/Database-MongoDB-green
https://img.shields.io/badge/Backend-Node.js-success

</div>
```





