var Color = function Color(r, g, b) {
    if ( r === void 0 ) r = 0;
    if ( g === void 0 ) g = 0;
    if ( b === void 0 ) b = 0;

    this.set(r, g, b);
};
Color.prototype.copy = function copy (color) {
    this.set(color.r, color.g, color.b);
};
Color.prototype.set = function set (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};
Color.prototype.toHex = function toHex () {
    var hex = this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
    return '#' + ('000000' + hex.toString(16)).slice(-6);
};
var Vector2 = function Vector2(x, y) {
    if ( x === void 0 ) x = 0;
    if ( y === void 0 ) y = 0;

    this.set(x, y);
};
Vector2.prototype.set = function set (x, y) {
    this.x = x;
    this.y = y;
};

var Shape = function Shape() {
    this.color = new Color();
    this.position = new Vector2();
    this.size = new Vector2(10, 10);
};
Shape.prototype.draw = function draw (context) {
    context.fillStyle = this.color.toHex();
    context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
};

var PURPLE = new Color(103 / 255, 58 / 255, 183 / 255);
var PINK = new Color(228 / 255, 41 / 255, 144 / 255);

window._moduleLoaded = true;
var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var shapes = [];
var rect = new Shape();
rect.color.copy(PURPLE);
rect.size.set(200, 60);
rect.position.set(20, 10);
shapes.push(rect);
var square = new Shape();
square.color.copy(PINK);
square.size.set(120, 120);
square.position.set(200, 100);
shapes.push(square);
shapes.forEach(function (shape) {
    shape.draw(context);
});
//# sourceMappingURL=module.js.map
