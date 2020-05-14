/* eslint valid-jsdoc: "off" */

'use strict';

const myConfig = require('./user.config.js');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  exports.security = {
    csrf: {
      enable: false,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589378030691_5335';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    messageType: 'dingTalk',
    ...myConfig,
  };

  return {
    ...config,
    ...userConfig,
  };
};
