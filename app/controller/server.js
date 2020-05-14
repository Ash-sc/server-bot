'use strict';

const Controller = require('egg').Controller;

class ServerController extends Controller {
  async sshLogin() {
    const { ctx } = this;
    const { body: {
      username,
      date,
    } } = ctx.request;
    const content = `用户"${username}"使用SSH登录。
登录时间：${date}`;
    await ctx.service.telegram.sendMessage(content);

    ctx.body = 'success';
  }
}

module.exports = ServerController;
