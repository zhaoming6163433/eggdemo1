'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async echo() {
    console.log(111);
  }
}

module.exports = NewsService;
