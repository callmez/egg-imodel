

## Usage Examples

```javascript

// [Project]/config/plugin.js
exports.imodel = {
  enable: true,
  package: 'egg-imodel',
};

// [Project]/app/model/user.js  // example
// user base Model interface 
const Model = require('egg').Model;

class User extends Model {
  ...
}

module.exports = User;

```