// app/service/home.js
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async find() {
    const { app } = this;
    try {
      const result = await app.mysql.query('select * from list', ''); // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
      return { result };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
module.exports = HomeService;
