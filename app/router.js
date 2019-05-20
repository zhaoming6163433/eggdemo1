'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/newslist', controller.news.index);
  router.get('/newslist/:id', controller.news.newslist);
  router.get('/lottery', controller.lottery.index);
};
