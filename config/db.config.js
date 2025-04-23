// const { Sequelize } = require('sequelize');

// // Create a new Sequelize instance
// const sequelize = new Sequelize({
//   database: 'ticketingdb',
//   username: 'root',
//   password: '',
//   host: 'localhost',
//   dialect: 'mysql', // Change this to the appropriate dialect
//   dialectOptions: {
//     connectTimeout: 60000 // Set the timeout to 60 seconds
//   },
//   logging: console.log // If you want to log SQL queries
// });

// // Test the database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize({
  database: 'ticketing_netsuite',
  username: 'smct',
  password: 'smct',
  host: '172.17.0.1',
  dialect: 'mysql', // Change this to the appropriate dialect
  dialectOptions: {
    connectTimeout: 60000 // Set the timeout to 60 seconds
  },
  logging: console.log // If you want to log SQL queries
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
