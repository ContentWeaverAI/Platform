'use strict';

module.exports = {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::hero-content.hero-content');
    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::hero-content.hero-content', id);
    return entity;
  }
};