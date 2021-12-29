/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456', // 初始化密码，没设置的可以不写
      // 数据库名
      database: 'data0123', // 我们新建的数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.view = {
    mapping: { '.html': 'ejs' }, // 左边写成.html后缀，会自动渲染.html文件//

  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639019948872_9256';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = { // csrf攻击防范  开启true 关闭false ,测试时暂时关闭，不然影响POST 请求（在没有token 鉴权的情况下）。
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
