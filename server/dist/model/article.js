"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticleRequest = void 0;

var yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getArticleRequest = yup.object().shape({
  q: yup.string().typeError('search must be strings.'),
  page: yup.number().positive().typeError('page must be an integer'),
  'page-size': yup.number().positive().typeError('page_size must be an integer'),
  'order-by': yup.string().oneOf(['newest', 'oldest'], `order-by must be 'newest' or 'oldest'`)
});
exports.getArticleRequest = getArticleRequest;