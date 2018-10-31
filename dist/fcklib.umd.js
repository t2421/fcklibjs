(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.fcklib = {})));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var MathUtil =
  /*#__PURE__*/
  function () {
    function MathUtil() {
      _classCallCheck(this, MathUtil);

      throw new Error('do not Instantiation!!!!');
    }

    _createClass(MathUtil, null, [{
      key: "toRadian",
      value: function toRadian(degree) {
        return degree * Math.PI / 180;
      }
    }, {
      key: "toDegree",
      value: function toDegree(radian) {
        return radian * 180 / Math.PI;
      }
    }, {
      key: "map",
      value: function map(value) {
        var inLow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
        var inHigh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;
        var outLow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.0;
        var outHigh = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;
        var clip = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
        var outValue = (value - inLow) / (inHigh - inLow) * (outHigh - outLow) + outLow;
        if (!clip) return outValue;
        if (outValue < outLow) return outLow;
        if (outValue > outHigh) return outHigh;
        return outValue;
      }
    }]);

    return MathUtil;
  }();

  //@see https://evanw.github.io/lightgl.js/docs/static html
  var Vector =
  /*#__PURE__*/
  function () {
    function Vector() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Vector);

      this.x = x;
      this.y = y;
      this.z = z;
    }

    _createClass(Vector, [{
      key: "negative",
      value: function negative() {
        return new Vector(-this.x, -this.y, -this.z);
      }
    }, {
      key: "add",
      value: function add(v) {
        if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);else return new Vector(this.x + v, this.y + v, this.z + v);
      }
    }, {
      key: "subtract",
      value: function subtract(v) {
        if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);else return new Vector(this.x - v, this.y - v, this.z - v);
      }
    }, {
      key: "multiply",
      value: function multiply(v) {
        if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);else return new Vector(this.x * v, this.y * v, this.z * v);
      }
    }, {
      key: "divide",
      value: function divide(v) {
        if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);else return new Vector(this.x / v, this.y / v, this.z / v);
      }
    }, {
      key: "equals",
      value: function equals(v) {
        return this.x == v.x && this.y == v.y && this.z == v.z;
      }
    }, {
      key: "dot",
      value: function dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      }
    }, {
      key: "cross",
      value: function cross(v) {
        return new Vector(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.dot(this));
      }
    }, {
      key: "unit",
      value: function unit() {
        return this.divide(this.length());
      }
    }, {
      key: "min",
      value: function min() {
        return Math.min(Math.min(this.x, this.y), this.z);
      }
    }, {
      key: "max",
      value: function max() {
        return Math.max(Math.max(this.x, this.y), this.z);
      }
    }, {
      key: "toAngles",
      value: function toAngles() {
        return {
          theta: Math.atan2(this.z, this.x),
          phi: Math.asin(this.y / this.length())
        };
      }
    }, {
      key: "angleTo",
      value: function angleTo(a) {
        return Math.acos(this.dot(a) / (this.length() * a.length()));
      }
    }, {
      key: "toArray",
      value: function toArray(n) {
        return [this.x, this.y, this.z].slice(0, n || 3);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vector(this.x, this.y, this.z);
      }
    }, {
      key: "init",
      value: function init(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }
    }], [{
      key: "negative",
      value: function negative(a, b) {
        b.x = -a.x;
        b.y = -a.y;
        b.z = -a.z;
        return b;
      }
    }, {
      key: "add",
      value: function add(a, b, c) {
        if (b instanceof Vector) {
          c.x = a.x + b.x;
          c.y = a.y + b.y;
          c.z = a.z + b.z;
        } else {
          c.x = a.x + b;
          c.y = a.y + b;
          c.z = a.z + b;
        }

        return c;
      }
    }, {
      key: "subtract",
      value: function subtract(a, b, c) {
        if (b instanceof Vector) {
          c.x = a.x - b.x;
          c.y = a.y - b.y;
          c.z = a.z - b.z;
        } else {
          c.x = a.x - b;
          c.y = a.y - b;
          c.z = a.z - b;
        }

        return c;
      }
    }, {
      key: "multiply",
      value: function multiply(a, b, c) {
        if (b instanceof Vector) {
          c.x = a.x * b.x;
          c.y = a.y * b.y;
          c.z = a.z * b.z;
        } else {
          c.x = a.x * b;
          c.y = a.y * b;
          c.z = a.z * b;
        }

        return c;
      }
    }, {
      key: "divide",
      value: function divide(a, b, c) {
        if (b instanceof Vector) {
          c.x = a.x / b.x;
          c.y = a.y / b.y;
          c.z = a.z / b.z;
        } else {
          c.x = a.x / b;
          c.y = a.y / b;
          c.z = a.z / b;
        }

        return c;
      }
    }, {
      key: "cross",
      value: function cross(a, b, c) {
        c.x = a.y * b.z - a.z * b.y;
        c.y = a.z * b.x - a.x * b.z;
        c.z = a.x * b.y - a.y * b.x;
        return c;
      }
    }, {
      key: "unit",
      value: function unit(a, b) {
        var length = a.length();
        b.x = a.x / length;
        b.y = a.y / length;
        b.z = a.z / length;
        return b;
      }
    }, {
      key: "fromAngles",
      value: function fromAngles(theta, phi) {
        return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
      }
    }, {
      key: "randomDirection",
      value: function randomDirection() {
        return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
      }
    }, {
      key: "min",
      value: function min(a, b) {
        return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
      }
    }, {
      key: "max",
      value: function max(a, b) {
        return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
      }
    }, {
      key: "lerp",
      value: function lerp(a, b, fraction) {
        return b.subtract(a).multiply(fraction).add(a);
      }
    }, {
      key: "fromArray",
      value: function fromArray(a) {
        return new Vector(a[0], a[1], a[2]);
      }
    }, {
      key: "angleBetween",
      value: function angleBetween(a, b) {
        return a.angleTo(b);
      }
    }]);

    return Vector;
  }();

  var Matrix =
  /*#__PURE__*/
  function () {
    function Matrix() {
      _classCallCheck(this, Matrix);

      var m = Array.prototype.concat.apply([], arguments);

      if (m.length != 16 && m.length != 0) {
        throw new Error("引数には16の数字を入れるか、何も入れないで");
      }

      if (!m.length) {
        m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }

      this.m = m;
    }

    _createClass(Matrix, [{
      key: "inverse",
      value: function inverse() {
        return Matrix.inverse(this, new Matrix());
      }
    }, {
      key: "transpose",
      value: function transpose() {
        return Matrix.transpose(this, new Matrix());
      }
    }, {
      key: "multiply",
      value: function multiply(matrix) {
        return Matrix.multiply(this, matrix, new Matrix());
      }
    }, {
      key: "transformPoint",
      value: function transformPoint(v) {
        var m = this.m;
        return new Vector(m[0] * v.x + m[1] * v.y + m[2] * v.z + m[3], m[4] * v.x + m[5] * v.y + m[6] * v.z + m[7], m[8] * v.x + m[9] * v.y + m[10] * v.z + m[11]).divide(m[12] * v.x + m[13] * v.y + m[14] * v.z + m[15]);
      }
    }, {
      key: "transformVector",
      value: function transformVector(v) {
        var m = this.m;
        return new Vector(m[0] * v.x + m[1] * v.y + m[2] * v.z, m[4] * v.x + m[5] * v.y + m[6] * v.z, m[8] * v.x + m[9] * v.y + m[10] * v.z);
      }
    }], [{
      key: "inverse",
      value: function inverse(matrix, result) {
        result = result || new Matrix();
        var m = matrix.m,
            r = result.m;
        r[0] = m[5] * m[10] * m[15] - m[5] * m[14] * m[11] - m[6] * m[9] * m[15] + m[6] * m[13] * m[11] + m[7] * m[9] * m[14] - m[7] * m[13] * m[10];
        r[1] = -m[1] * m[10] * m[15] + m[1] * m[14] * m[11] + m[2] * m[9] * m[15] - m[2] * m[13] * m[11] - m[3] * m[9] * m[14] + m[3] * m[13] * m[10];
        r[2] = m[1] * m[6] * m[15] - m[1] * m[14] * m[7] - m[2] * m[5] * m[15] + m[2] * m[13] * m[7] + m[3] * m[5] * m[14] - m[3] * m[13] * m[6];
        r[3] = -m[1] * m[6] * m[11] + m[1] * m[10] * m[7] + m[2] * m[5] * m[11] - m[2] * m[9] * m[7] - m[3] * m[5] * m[10] + m[3] * m[9] * m[6];
        r[4] = -m[4] * m[10] * m[15] + m[4] * m[14] * m[11] + m[6] * m[8] * m[15] - m[6] * m[12] * m[11] - m[7] * m[8] * m[14] + m[7] * m[12] * m[10];
        r[5] = m[0] * m[10] * m[15] - m[0] * m[14] * m[11] - m[2] * m[8] * m[15] + m[2] * m[12] * m[11] + m[3] * m[8] * m[14] - m[3] * m[12] * m[10];
        r[6] = -m[0] * m[6] * m[15] + m[0] * m[14] * m[7] + m[2] * m[4] * m[15] - m[2] * m[12] * m[7] - m[3] * m[4] * m[14] + m[3] * m[12] * m[6];
        r[7] = m[0] * m[6] * m[11] - m[0] * m[10] * m[7] - m[2] * m[4] * m[11] + m[2] * m[8] * m[7] + m[3] * m[4] * m[10] - m[3] * m[8] * m[6];
        r[8] = m[4] * m[9] * m[15] - m[4] * m[13] * m[11] - m[5] * m[8] * m[15] + m[5] * m[12] * m[11] + m[7] * m[8] * m[13] - m[7] * m[12] * m[9];
        r[9] = -m[0] * m[9] * m[15] + m[0] * m[13] * m[11] + m[1] * m[8] * m[15] - m[1] * m[12] * m[11] - m[3] * m[8] * m[13] + m[3] * m[12] * m[9];
        r[10] = m[0] * m[5] * m[15] - m[0] * m[13] * m[7] - m[1] * m[4] * m[15] + m[1] * m[12] * m[7] + m[3] * m[4] * m[13] - m[3] * m[12] * m[5];
        r[11] = -m[0] * m[5] * m[11] + m[0] * m[9] * m[7] + m[1] * m[4] * m[11] - m[1] * m[8] * m[7] - m[3] * m[4] * m[9] + m[3] * m[8] * m[5];
        r[12] = -m[4] * m[9] * m[14] + m[4] * m[13] * m[10] + m[5] * m[8] * m[14] - m[5] * m[12] * m[10] - m[6] * m[8] * m[13] + m[6] * m[12] * m[9];
        r[13] = m[0] * m[9] * m[14] - m[0] * m[13] * m[10] - m[1] * m[8] * m[14] + m[1] * m[12] * m[10] + m[2] * m[8] * m[13] - m[2] * m[12] * m[9];
        r[14] = -m[0] * m[5] * m[14] + m[0] * m[13] * m[6] + m[1] * m[4] * m[14] - m[1] * m[12] * m[6] - m[2] * m[4] * m[13] + m[2] * m[12] * m[5];
        r[15] = m[0] * m[5] * m[10] - m[0] * m[9] * m[6] - m[1] * m[4] * m[10] + m[1] * m[8] * m[6] + m[2] * m[4] * m[9] - m[2] * m[8] * m[5];
        var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

        for (var i = 0; i < 16; i++) {
          r[i] /= det;
        }

        return result;
      }
    }, {
      key: "transpose",
      value: function transpose(matrix, result) {
        result = result || new Matrix();
        var m = matrix.m,
            r = result.m;
        r[0] = m[0];
        r[1] = m[4];
        r[2] = m[8];
        r[3] = m[12];
        r[4] = m[1];
        r[5] = m[5];
        r[6] = m[9];
        r[7] = m[13];
        r[8] = m[2];
        r[9] = m[6];
        r[10] = m[10];
        r[11] = m[14];
        r[12] = m[3];
        r[13] = m[7];
        r[14] = m[11];
        r[15] = m[15];
        return result;
      }
    }, {
      key: "multiply",
      value: function multiply(left, right, result) {
        result = result || new Matrix();
        var a = left.m,
            b = right.m,
            r = result.m;
        r[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
        r[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
        r[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
        r[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
        r[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
        r[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
        r[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
        r[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
        r[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
        r[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
        r[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
        r[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
        r[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
        r[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
        r[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
        r[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
        return result;
      }
    }, {
      key: "identity",
      value: function identity(result) {
        result = result || new Matrix();
        var m = result.m;
        m[0] = m[5] = m[10] = m[15] = 1;
        m[1] = m[2] = m[3] = m[4] = m[6] = m[7] = m[8] = m[9] = m[11] = m[12] = m[13] = m[14] = 0;
        return result;
      }
    }, {
      key: "scale",
      value: function scale(x, y, z, result) {
        result = result || new Matrix();
        var m = result.m;
        m[0] = x;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = y;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = z;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return result;
      }
    }, {
      key: "translate",
      value: function translate(x, y, z, result) {
        result = result || new Matrix();
        var m = result.m;
        m[0] = 1;
        m[1] = 0;
        m[2] = 0;
        m[3] = x;
        m[4] = 0;
        m[5] = 1;
        m[6] = 0;
        m[7] = y;
        m[8] = 0;
        m[9] = 0;
        m[10] = 1;
        m[11] = z;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return result;
      }
    }, {
      key: "rotate",
      value: function rotate(a, x, y, z, result) {
        if (!a || !x && !y && !z) {
          return Matrix.identity(result);
        }

        result = result || new Matrix();
        var m = result.m;
        var d = Math.sqrt(x * x + y * y + z * z);
        a *= Math.PI / 180;
        x /= d;
        y /= d;
        z /= d;
        var c = Math.cos(a),
            s = Math.sin(a),
            t = 1 - c;
        m[0] = x * x * t + c;
        m[1] = x * y * t - z * s;
        m[2] = x * z * t + y * s;
        m[3] = 0;
        m[4] = y * x * t + z * s;
        m[5] = y * y * t + c;
        m[6] = y * z * t - x * s;
        m[7] = 0;
        m[8] = z * x * t - y * s;
        m[9] = z * y * t + x * s;
        m[10] = z * z * t + c;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return result;
      }
    }]);

    return Matrix;
  }();

  var FACEBOOK = 'http://www.facebook.com/sharer.php';
  var TWITTER = 'http://twitter.com/share';
  var LINKEDIN = 'http://www.linkedin.com/shareArticle';
  var GOOGLE = 'https://plus.google.com/share';
  var LINE = 'http://line.me/R/msg/text/';
  var PINTEREST = 'http://pinterest.com/pin/create/button/';
  var HATEBU = 'http://b.hatena.ne.jp/entry/';
  var WINDOW_NAME = "ShareWindow";
  var WINDOW_OPTIONS = 'width=554, height=470, menubar=no, toolbar=no, scrollbars=yes';

  var Share =
  /*#__PURE__*/
  function () {
    function Share() {
      _classCallCheck(this, Share);

      this.url = window.location.href;
    }

    _createClass(Share, [{
      key: "facebook",
      value: function facebook(options) {
        var params = options || {};
        var url = params.url || this.url;
        var shareUrl = "".concat(FACEBOOK, "?u=").concat(url);
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }, {
      key: "twitter",
      value: function twitter(options) {
        var params = options || {};
        var url = params.url || this.url;
        var text = params.text || "tititititit";
        var hashtags = params.hashtags || "";
        var shareUrl = "".concat(TWITTER, "?url=").concat(url, "&text=").concat(text, "&hashtags=").concat(hashtags);
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }, {
      key: "google",
      value: function google(options) {
        var params = options || {};
        var url = params.url || this.url;
        var shareUrl = "".concat(GOOGLE, "?url=").concat(url);
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }, {
      key: "linkedin",
      value: function linkedin(options) {
        var params = options || {};
        var url = params.url || this.url;
        var title = params.title || "tititititit";
        var summary = params.summary || "";
        var source = params.source || "";
        var shareUrl = "".concat(LINKEDIN, "?mini=true&url=").concat(url, "&title=").concat(title, "&summary=").concat(summary, "&source=").concat(source);
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }, {
      key: "line",
      value: function line(options) {
        var params = options || {};
        var url = params.url || this.url;
        var title = params.title || "tititititit";
        var shareUrl = "".concat(LINE, "?").concat(encodeURI(title)).concat(encodeURI(url));
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }, {
      key: "pinterest",
      value: function pinterest(options) {
        var params = options || {};
        var url = params.url || this.url;
        var media = params.media || "tititititit";
        var description = params.description || "tititititit";
        var shareUrl = "".concat(PINTEREST, "?url=").concat(url, "&media=").concat(media, "&description=").concat(description);
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }, {
      key: "hatebu",
      value: function hatebu(options) {
        var params = options || {};
        var url = params.url || this.url;
        var shareUrl = "".concat(HATEBU, "?").concat(url);
        window.open(encodeURI(decodeURI(shareUrl)), WINDOW_NAME, WINDOW_OPTIONS);
        return false;
      }
    }]);

    return Share;
  }();

  var ModalLoader =
  /*#__PURE__*/
  function () {
    function ModalLoader(options) {
      _classCallCheck(this, ModalLoader);

      this.options = options;
    }

    _createClass(ModalLoader, [{
      key: "getContents",
      value: function getContents(target, callback) {
        this._load();
      }
    }, {
      key: "_load",
      value: function _load() {
        console.log("load");
      }
    }, {
      key: "_loadComplete",
      value: function _loadComplete() {
        console.log("loadComplete");
      }
    }]);

    return ModalLoader;
  }();

  var ModalLoaderDom =
  /*#__PURE__*/
  function (_ModalLoader) {
    _inherits(ModalLoaderDom, _ModalLoader);

    function ModalLoaderDom() {
      var _this;

      _classCallCheck(this, ModalLoaderDom);

      console.log("loader");
      return _possibleConstructorReturn(_this);
    }

    _createClass(ModalLoaderDom, [{
      key: "getContents",
      value: function getContents(target, callback) {
        _get(_getPrototypeOf(ModalLoaderDom.prototype), "getContents", this).call(this, target, callback);

        var contents = $(target).html();
        callback(contents);
      }
    }]);

    return ModalLoaderDom;
  }(ModalLoader);

  var ModalLoaderAjax =
  /*#__PURE__*/
  function (_ModalLoader) {
    _inherits(ModalLoaderAjax, _ModalLoader);

    function ModalLoaderAjax(options) {
      var _this;

      _classCallCheck(this, ModalLoaderAjax);

      _this.options = options;
      return _possibleConstructorReturn(_this);
    }

    _createClass(ModalLoaderAjax, [{
      key: "getContents",
      value: function getContents(target, callback) {
        var _this2 = this;

        _get(_getPrototypeOf(ModalLoaderAjax.prototype), "getContents", this).call(this, target, callback);

        $.ajax({
          url: target,
          type: 'GET',
          dataType: 'html'
        }).done(function (data) {
          var contents = $('<div></div>').append(data).find(_this2.options.container).html();
          callback(contents);

          _this2._loadComplete();
        }).fail(function () {}).always(function () {});
      }
    }]);

    return ModalLoaderAjax;
  }(ModalLoader);

  var ModalLoaderImage =
  /*#__PURE__*/
  function (_ModalLoader) {
    _inherits(ModalLoaderImage, _ModalLoader);

    function ModalLoaderImage(options) {
      var _this;

      _classCallCheck(this, ModalLoaderImage);

      _this.options = options;
      return _possibleConstructorReturn(_this);
    }

    _createClass(ModalLoaderImage, [{
      key: "getContents",
      value: function getContents(target, callback) {
        var _this2 = this;

        _get(_getPrototypeOf(ModalLoaderImage.prototype), "getContents", this).call(this, target, callback);

        var image = new Image();

        image.onload = function () {
          callback(image);

          _this2._loadComplete();
        };

        image.onerror = function () {
          console.log("noimage");
          callback(undefined);

          _this2._loadComplete();
        };

        image.src = target;
      }
    }]);

    return ModalLoaderImage;
  }(ModalLoader);

  var ModalLoaderYoutube =
  /*#__PURE__*/
  function (_ModalLoader) {
    _inherits(ModalLoaderYoutube, _ModalLoader);

    function ModalLoaderYoutube(options) {
      var _this;

      _classCallCheck(this, ModalLoaderYoutube);

      _this.options = options;
      return _possibleConstructorReturn(_this);
    }

    _createClass(ModalLoaderYoutube, [{
      key: "getContents",
      value: function getContents(target, callback) {
        _get(_getPrototypeOf(ModalLoaderYoutube.prototype), "getContents", this).call(this, target, callback);

        var contents = "\n\t\t<div class=\"modal-youtube-container\">\n\t\t<iframe width=\"560\" height=\"315\" src=\"".concat(target, "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t</div>\n\t\t");
        console.log(contents);
        callback(contents);
      }
    }]);

    return ModalLoaderYoutube;
  }(ModalLoader);

  var ModalView =
  /*#__PURE__*/
  function () {
    function ModalView() {
      _classCallCheck(this, ModalView);

      this.w = $(window);
    }

    _createClass(ModalView, [{
      key: "set",
      value: function set(contents) {
        this.body = $('.modal__body');
        this.body.find(".modal__contents").html(contents);
      }
    }, {
      key: "resize",
      value: function resize(w, h) {
        this.isOverflowHeight();
      }
    }, {
      key: "isOverflowHeight",
      value: function isOverflowHeight() {
        if (this.body.outerHeight() > $(window).height()) {
          $('html').addClass('is-modal-overflow-window');
          return true;
        } else {
          $('html').removeClass('is-modal-overflow-window');
          return false;
        }
      }
    }]);

    return ModalView;
  }();

  var modalTrigger = '.modal-open';

  var ModalController =
  /*#__PURE__*/
  function () {
    function ModalController(options) {
      var _this = this;

      _classCallCheck(this, ModalController);

      var defaults = {
        pagerTarget: '.modal__body',
        close: '<a class="modal-close">CLOSE</a>',
        closeInsert: false
      };
      this.settings = $.extend({}, defaults, options);
      this.w = $(window);
      this.container = ModalController.htmlString;
      this.modal = new ModalView();
      this.group = {};
      this.currentGroupIndex = 0;
      this.currentGroup = undefined;
      this.initGroup();
      $(document).on('click', '.modal-pager', function (e) {
        if ($(e.currentTarget).data('paging') == "next") {
          if (_this.isNext()) {
            _this.currentGroupIndex++;
          } else {
            _this.currentGroupIndex = 0;
          }
        } else if ($(e.currentTarget).data('paging') == "prev") {
          if (_this.isPrev()) {
            _this.currentGroupIndex--;
          } else {
            _this.currentGroupIndex = _this.group[_this.currentGroup].length - 1;
          }
        } else {
          _this.currentGroupIndex = Number($(e.currentTarget).data('paging'));
        }

        _this.updatePager();

        var obj = _this.group[_this.currentGroup][_this.currentGroupIndex];
        var target = obj.data("target");
        var type = obj.data("modaltype");

        _this.show(type, target);

        return false;
      });
      $(document).on('click', modalTrigger, function (e) {
        var target = $(e.currentTarget).data("target");
        var type = $(e.currentTarget).data("modaltype");
        var group2 = $(e.currentTarget).data("group");
        var paging2 = $(e.currentTarget).data("paging");
        _this.currentGroup = group2;

        if (_this.group[group2]) {
          for (var i = 0; i < _this.group[group2].length; i++) {
            if ($(e.currentTarget).is(_this.group[group2][i])) {
              _this.currentGroupIndex = i;
            }
          }
        }

        _this.show(type, target);

        _this.updatePager();

        return false;
      });
    }

    _createClass(ModalController, [{
      key: "setSetting",
      value: function setSetting(options) {
        this.settings = $.extend({}, this.settings, options);
      }
    }, {
      key: "isNext",
      value: function isNext() {
        return this.group[this.currentGroup].length > this.currentGroupIndex + 1;
      }
    }, {
      key: "isPrev",
      value: function isPrev() {
        return this.currentGroupIndex - 1 >= 0;
      }
    }, {
      key: "init",
      value: function init(modalLoader) {
        this.modalLoader = modalLoader;
      }
    }, {
      key: "createPager",
      value: function createPager() {
        if (!this.currentGroup) return;
        var html = "";
        html += '<a href="#" class="modal-pager modal-pager-prev" data-paging="prev">PREV</a>';

        for (var i = 0; i < this.group[this.currentGroup].length; i++) {
          html += '<a href="#" class="modal-pager" data-paging="' + i + '">' + i + '</a>';
        }

        html += '<a href="#" class="modal-pager modal-pager-next" data-paging="next">NEXT</a>';
        $(this.settings.pagerTarget).append(html);
      }
    }, {
      key: "updatePager",
      value: function updatePager() {
        if (!this.currentGroup) return;
        $('.modal-pager').removeClass('is-current');
        $('.modal-pager[data-paging=' + this.currentGroupIndex + ']').addClass('is-current');
      }
    }, {
      key: "initGroup",
      value: function initGroup() {
        var _this2 = this;

        $(modalTrigger).each(function (index, el) {
          //modal内の次へ戻るの場合は処理をスキップ
          if ($(el).parents(".modal-contents").length > 0) return;
          var groupName = $(el).data("group");

          if (groupName) {
            if (!_this2.group[groupName]) {
              _this2.group[groupName] = [];
            }

            _this2.group[groupName].push($(el));
          }
        });

        for (var index in this.group) {}
      }
    }, {
      key: "show",
      value: function show(type, target) {
        var _this3 = this;

        this.modalLoader = this._getModalLoader(type);
        this.init(this.modalLoader);
        $('body').addClass('is-modal-show');
        $(document).trigger("modalShowReady");

        if ($('.modal-window').length > 0) {
          this.change(target);
          return;
        }

        $('body').append(this._getContainer(type));
        this.modalLoader.getContents(target, this.modalLoadHandler.bind(this));
        this.w.on("resize.fck:modal", function (e) {
          _this3.modal.resize(_this3.w.width(), _this3.w.height());
        });

        if (this.settings.closeInsert) {
          $('.modal__body').append(this.settings.close);
        }

        $('.modal-window').on('click', function (e) {
          if (e.currentTarget === e.target) {
            _this3.hide();
          }
        });
        $('.modal-close').on('click', function (e) {
          _this3.hide();

          return false;
        });
        $('.modal-window').css("opacity", 0).animate({
          opacity: 1
        }, 500, function () {
          $(document).trigger("modalShowComplete");
        });
        this.createPager();
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            _this3.hide();
          }
        });
      }
    }, {
      key: "_getModalLoader",
      value: function _getModalLoader(type) {
        if (type == "ajax") {
          return new ModalLoaderAjax({
            container: "#target-modal"
          });
        }

        if (type == "dom") {
          return new ModalLoaderDom();
        }

        if (type == "youtube") {
          return new ModalLoaderYoutube();
        }

        if (type == "image") {
          return new ModalLoaderImage();
        }

        throw new Error("\u6307\u5B9A\u3055\u308C\u305Ftype:".concat(type, "\u306ELoader\u306F\u3042\u308A\u307E\u305B\u3093\u3002"));
      }
    }, {
      key: "modalLoadHandler",
      value: function modalLoadHandler(contents) {
        this.modal.set(contents);
        $(document).trigger("modalDomReady");
        this.modal.resize(this.w.width(), this.w.height());
      }
    }, {
      key: "change",
      value: function change(target) {
        this.modalLoader.getContents(target, this.modalLoadHandler.bind(this));
        $(".modal-window").scrollTop(0);
        $('.modal__body').css("opacity", 0).animate({
          opacity: 1
        }, 500, function () {
          $(document).trigger("modalShowComplete");
        });
        $(document).trigger("modalChange");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this4 = this;

        $(document).trigger("modalHideReady");
        this.w.off("resize.fck:modal");
        $('.modal-window').animate({
          opacity: 0
        }, 300, function () {
          $(document).trigger("modalHideComplete");
          $(_this4.settings.pagerTarget).html("");
          $('.modal-window').remove();
        });
        $('.is-modal-show').removeClass('is-modal-show');
        this.currentGroupIndex = 0;
        this.currentGroup = undefined;
      }
    }, {
      key: "_getContainer",
      value: function _getContainer(type) {
        var option = "";

        if (type) {
          option = "modal-type-" + type;
        }

        var html = "\n\t\t<div class=\"modal-window ".concat(option, "\">\n\t\t\t<div class=\"modal__body\">\n\t\t\t\t<div class=\"modal__contents\"></div>\n\t\t\t</div>\n\t\t</div>");
        return html;
      }
    }]);

    return ModalController;
  }();

  ModalController.htmlString = ModalController.AJAX = "ajax";
  ModalController.DOM = "dom";
  ModalController.STRING = "string";

  exports.MathUtil = MathUtil;
  exports.Matrix = Matrix;
  exports.Util = Share;
  exports.ModalController = ModalController;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
