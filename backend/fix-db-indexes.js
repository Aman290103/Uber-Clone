const mongoose = require('mongoose');
require('dotenv').config();

async function fixIndexes() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Drop the problematic index
    const result = await mongoose.connection.db.collection('users').dropIndex('fullname.email_1');
    console.log('Dropped index:', result);
    
    console.log('Done. You can now restart your application.');
    process.exit(0);
  } catch (error) {
    console.error('Error fixing indexes:', error);
    process.exit(1);
  }
}

fixIndexes();