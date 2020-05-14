'use strict';

const Controller = require('egg').Controller;

class ServerController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.messageType = this.config.messageType;
  }

  async sshLogin() {
    const { ctx } = this;
    const { body: {
      username,
      date,
      ip,
    } } = ctx.request;
    const content = `用户"${username}"使用SSH登录。
登录时间：${date}。
登录IP：${ip}。`;
    try {
      await ctx.service[this.messageType].sendMessage(content);
      ctx.body = 'success';
    } catch (err) {
      ctx.body = err;
    }
  }
}

module.exports = ServerController;
