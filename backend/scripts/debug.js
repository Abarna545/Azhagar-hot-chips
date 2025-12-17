// backend/scripts/debug.js
require('dotenv').config();

console.log('=== Debugging MongoDB Connection ===');
console.log('Current directory:', __dirname);
console.log('.env file path:', require('path').join(__dirname, '../.env'));
console.log('MONGODB_URI from process.env:', process.env.MONGODB_URI);
console.log('PORT from process.env:', process.env.PORT);
console.log('NODE_ENV from process.env:', process.env.NODE_ENV);

// Test if dotenv is working
if (!process.env.MONGODB_URI) {
    console.log('\n❌ ERROR: MONGODB_URI is not defined in .env file');
    console.log('Make sure .env file exists in backend/ folder');
    console.log('And contains: MONGODB_URI=mongodb://localhost:27017/azhagar-chips');
} else {
    console.log('\n✅ .env file is loading correctly');
}