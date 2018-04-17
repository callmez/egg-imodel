'use strict';

const egg = require('egg');
const path = require('path');

const hasModel = !!egg.Model;
if (!hasModel) egg.Model = require('egg/lib/core/base_context_class');

module.exports = app => {
  if (hasModel) {
    app.logger.warn('The Model interface of egg is already builtin. egg-imodel is no longer used up. please upgrage you project.');
    return;
  }

  // load models to app
  const modelOptions = {
    caseStyle: 'lower',
    call: true,
    directory: path.join(app.config.baseDir, 'app/model'),
  };
  const modelBase = modelOptions.directory;
  app.loader.loadToApp(modelBase, 'model');
};
