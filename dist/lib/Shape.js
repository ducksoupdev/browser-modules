"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _math = require("./math.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shape =
/*#__PURE__*/
function () {
  function Shape() {
    _classCallCheck(this, Shape);

    this.color = new _math.Color();
    this.position = new _math.Vector2();
    this.size = new _math.Vector2(10, 10);
  }

  _createClass(Shape, [{
    key: "draw",
    value: function draw(context) {
      context.fillStyle = this.color.toHex();
      context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
  }]);

  return Shape;
}();

exports.default = Shape;