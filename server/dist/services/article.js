"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContent = getContent;
exports.getArticles = getArticles;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const API_KEY = '120597d7-d6f4-4926-87ac-af558fc9d4f8';

async function getContent(id) {
  try {
    const response = await (0, _axios.default)({
      url: `https://content.guardianapis.com/${id}`,
      method: 'GET',
      params: {
        'api-key': API_KEY,
        'show-fields': 'body'
      }
    });
    const {
      content
    } = response.data.response;
    return _objectSpread({}, content);
  } catch (error) {
    throw {
      code: 400,
      statusText: error.response.statusText
    };
  }
}

async function getArticles(params) {
  try {
    const response = await (0, _axios.default)({
      url: 'https://content.guardianapis.com/search',
      method: 'GET',
      params: _objectSpread({
        'api-key': API_KEY
      }, params)
    });
    const {
      pageSize,
      currentPage,
      pages,
      results
    } = response.data.response;
    return {
      pageSize,
      currentPage,
      pages,
      items: results
    };
  } catch (error) {
    throw {
      code: 400,
      statusText: error.response.statusText
    };
  }
}