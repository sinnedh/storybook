'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  wrapper: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: '#333',
    outline: 'none',
    border: 'solid 1px #666',
    padding: '5px 15px',
    background: 'white',
    margin: '5px 0'
  }
};

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Preview).call(this));
  }

  _createClass(Preview, [{
    key: 'renderButton',
    value: function renderButton(n) {
      return _react2.default.createElement(
        'button',
        {
          onClick: (0, _.action)('action-' + n),
          style: styles.button },
        'send action ',
        n
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.wrapper },
        this.renderButton(1),
        this.renderButton(2),
        this.renderButton(3)
      );
    }
  }]);

  return Preview;
}(_react2.default.Component);

exports.default = Preview;