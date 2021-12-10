'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);// 首页 index (fn)
  router.get('/user', controller.user.user);// user模块 user (fn)
  router.post('/add_user', controller.user.addUser); // 新增用户
  router.post('/delete_user', controller.user.deleteUser); // 删除用户
};
