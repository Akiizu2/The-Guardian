"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 3002;
app.use('/article', _routes.articleRoutes);
app.listen(port, () => {
  console.log(`Started with port ${port}`);
});