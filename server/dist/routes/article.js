"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const articleRouter = _express.default.Router();

articleRouter.get('/', _middleware.articleMiddleware.getArticle);
articleRouter.get('/:id([a-zA-Z\-\\0-9]+)', _middleware.articleMiddleware.getContentByArticleID);
var _default = articleRouter;
exports.default = _default;