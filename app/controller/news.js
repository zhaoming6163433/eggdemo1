'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.ctx.query);
    ctx.body = 'newslist';
  }

  async newslist() {
    // koa获取动态路由传值
    const params = this.ctx.params;
    console.log(params);
    this.ctx.body = '哈哈哈';
  }
}

module.exports = NewsController;
