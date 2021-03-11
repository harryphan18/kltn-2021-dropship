const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  explorer: true,
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ["../../app/controllers/*.js"],
};

const specs = swaggerJsdoc(options);