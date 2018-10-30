"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector2 = exports.Color = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color() {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Color);

    this.set(r, g, b);
  }

  _createClass(Color, [{
    key: "copy",
    value: function copy(color) {
      this.set(color.r, color.g, color.b);
    }
  }, {
    key: "set",
    value: function set(r, g, b) {
      this.r = r;
      this.g = g;
      this.b = b;
    }
  }, {
    key: "toHex",
    value: function toHex() {
      var hex = this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
      return '#' + ('000000' + hex.toString(16)).slice(-6);
    }
  }]);

  return Color;
}();

exports.Color = Color;

var Vector2 =
/*#__PURE__*/
function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.set(x, y);
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Vector2;
}();

exports.Vector2 = Vector2;