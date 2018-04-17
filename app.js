'use strict';

const egg = require('egg');
const path = require('path');

const hasModel = !!egg.Model;
if (!hasModel) egg.Model = require('./lib/BaseModelClass');

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
    initializer(model, opt) {
      return new model(app);
    },
  };
  const modelBase = modelOptions.directory;
  app.loader.loadToApp(modelBase, 'model', modelOptions);
  app.logger.info('[egg:loader] Model loaded: %s', modelBase);
};
