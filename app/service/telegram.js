'use strict';

const Service = require('egg').Service;
const Telegram = require('telegraf/telegram');
const HttpsProxyAgent = require('https-proxy-agent');

class TelegramService extends Service {
  constructor(ctx) {
    super(ctx);
    const {
      telegramToken: token,
      telegramChatId: chatId,
      httpsProxy,
    } = this.config;
    if (token) {
      this.bot = new Telegram(token, {
        agent: httpsProxy ? new HttpsProxyAgent(httpsProxy) : null,
        // agent: httpsAgent,
      });
      this.bot.options.maxSockets = 10000;
      this.chatId = chatId;
    }
  }

  async sendMessage(context) {
    this.bot && (await this.bot.sendMessage(this.chatId, context || '^_^'));
  }
}

module.exports = TelegramService;
