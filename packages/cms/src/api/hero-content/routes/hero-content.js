'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/hero-content',
      handler: 'hero-content.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET', 
      path: '/hero-content/:id',
      handler: 'hero-content.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};