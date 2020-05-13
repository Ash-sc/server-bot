'use strict';

const Controller = require('egg').Controller;

class ServerController extends Controller {
  async sshLogin() {
    const { ctx } = this;
    const { query: { content } } = ctx;
    await ctx.service.telegram.sendMessage(content);

    ctx.body = '';
  }
}

module.exports = ServerController;
