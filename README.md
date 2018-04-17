

## Usage Examples

```javascript

// [Project]/config/plugin.js
exports.model = {
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