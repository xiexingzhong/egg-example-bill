'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 获取query 参数
  // async index() {
  //   const { ctx } = this;
  //   const { id } = ctx.query;
  //   ctx.body = id;
  // }
  // async index() {
  //   const { ctx } = this;
  //   // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
  //   await ctx.render('index.html', {
  //     title: '我是尼克陈', // 将 title 传入 index.html
  //   });
  // }

  async index() {
    const { ctx } = this;
    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
    const result = await ctx.service.home.find();
    ctx.body = result;
  } 

}

module.exports = HomeController;
