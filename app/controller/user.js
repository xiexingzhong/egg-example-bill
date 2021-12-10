'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {    
  // 获取用户信息
  async user() {
    const { ctx } = this;
    const result = await ctx.service.user.user();
    ctx.body = result;
  }

  // post 请求方法
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    ctx.body = {
      title,
    };
  }

  // 添加用户
  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.user.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: result,
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      }
    }
  }
  // 删除

  async deleteUser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      const result = await ctx.service.user.deleteUser(id);
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }

}

module.exports = HomeController;
