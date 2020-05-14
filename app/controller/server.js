'use strict';

const Controller = require('egg').Controller;

class ServerController extends Controller {
  async sshLogin() {
    const { ctx } = this;
    const { body: {
      username,
      date,
      ip,
    } } = ctx.request;
    const content = `用户"${username}"使用SSH登录。
登录时间：${date},
登录IP：${ip}`;
    await ctx.service.telegram.sendMessage(content);

    ctx.body = 'success';
  }
}

module.exports = ServerController;
