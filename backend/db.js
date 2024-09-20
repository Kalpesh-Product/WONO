const mongoose = require('mongoose');

// MongoDB connection URI
const uri = process.env.DB_URL; // Replace with your MongoDB URI and database name

// Create a connection to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get a reference to the connection
const db = mongoose.connection;

// Event listeners for connection
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB database!');
});

// Export the connection
module.exports = mongoose;
