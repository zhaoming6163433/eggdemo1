'use strict';

const Controller = require('egg').Controller;

class LotteryController extends Controller {
  async index() {
    const msg1 = {};
    const list1 = [ '111' ];
    await this.ctx.render('lottery', {
      msg: msg1,
      list: list1,
    });

  }
}

module.exports = LotteryController;
