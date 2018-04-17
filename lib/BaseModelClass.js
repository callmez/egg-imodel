'use strict';

/**
 * BaseModelClass is a base class that can be extended,
 * it's instantiated in context level,
 * {@link Helper}, {@link Service} is extending it.
 */
class BaseModelClass {

  /**
   * @constructor
   * @param {Application} app - app instance
   * @since 1.0.0
   */
  constructor(app) {
    /**
     * @member {Application} BaseContextClass#app
     * @since 1.0.0
     */
    this.app = app;
    /**
     * @member {Config} BaseContextClass#config
     * @since 1.0.0
     */
    this.config = app.config;
  }
}

module.exports = BaseModelClass;
