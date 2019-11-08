"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _article = require("../services/article");

var _model = require("../model");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

async function getArticle(req, res) {
  const {
    search,
    page,
    page_size
  } = req.query;

  try {
    const params = await _model.article.getArticleRequest.validate(_objectSpread({}, search ? {
      q: encodeURIComponent(search)
    } : {}, {}, page ? {
      page
    } : {}, {}, page_size ? {
      'page-size': page_size
    } : {}));
    const data = await (0, _article.getArticles)(params);
    res.status(200).send({
      data,
      code: 200
    });
  } catch (error) {
    res.status(400).send({
      code: 400,
      message: error.message
    });
  }
}

var _default = {
  getArticle
};
exports.default = _default;