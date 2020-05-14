'use strict';

const Service = require('egg').Service;
const rp = require('request-promise');

class DingTalkService extends Service {
  constructor(ctx) {
    super(ctx);
    const {
      dingTalk: {
        access_token,
        msgPrefix,
      },
    } = this.config;
    this.access_token = access_token;
    this.msgPrefix = msgPrefix;
  }

  async sendMessage(content) {
    content = this.msgPrefix + content;
    const options = {
      method: 'POST',
      uri: 'https://oapi.dingtalk.com/robot/send',
      qs: {
        access_token: this.access_token,
      },
      body: {
        msgtype: 'text',
        text: {
          content,
        },
      },
      json: true,
    };
    await rp(options);
  }
}

module.exports = DingTalkService;
