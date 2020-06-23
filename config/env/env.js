const env = require('./env.json');
class EnvContainer {
  constructor() {
    this.extras = new Map();
    this.module = env.wideModule;
  }
  getEntry() {
    return env.entry;
  }
  getModule() {
    return this.module;
  }
  setModule(module = '') {
    this.module = path.join(module, env.wideModule); // "wideModule": "**/**"设置module。在运行时可以做配置如 传入setModule('src/pages/')
  }
  register(name, value) {
    this.extras.set(name, value);
  }
  getExtra(name) {
    return this.extras.get(name);
  }
}

exports = module.exports = new EnvContainer();