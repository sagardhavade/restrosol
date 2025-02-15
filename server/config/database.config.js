// module.exports = {
//   url: "mongodb://localhost:27017/restrosol",
// };

// require('dotenv').config(); // Load .env file


// module.exports = {
//   mongoURI: 'mongodb+srv://dsagar0808:kLJKFzategguOzR3@cluster0.azf6t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  
//   dbName: 'nandini',
//   port: 4000 || 3000,
//   nodeEnv: 'development' || 'development',
// };
const env = require('dotenv').config({ path: '../env' });  // Load environment variables

module.exports = {
  mongoURI: 'mongodb+srv://trioconnect:Nr2QxJj8YXS7HSqc@cluster0.apf1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',  
  dbName: 'restrosol',
  port: 4000,
  nodeEnv: 'developement',
};