'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createBlockStyleButton = require('../../utils/createBlockStyleButton');

var _createBlockStyleButton2 = _interopRequireDefault(_createBlockStyleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createBlockStyleButton2.default)({
  blockType: 'unstyled',
  customClass: 'textButton',
  children: _react2.default.createElement(
    'span',
    null,
    'PARAGRAPH'
  )
});