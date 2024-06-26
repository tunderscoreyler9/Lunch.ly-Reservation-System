/** Database setup for BizTime. */

const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Set up connection to database
const connectionString = process.env.DATABASE_URL;

// Create a new PostgreSQL client instance
const client = new Client({
  connectionString: connectionString,
});

// Connect to database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
}

connectToDatabase();

module.exports = client;