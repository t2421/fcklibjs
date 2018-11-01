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
    function ModalLoader() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalLoaderDom).call(this));
      console.log("loader");
      return _this;
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
      _classCallCheck(this, ModalLoaderAjax);

      return _possibleConstructorReturn(this, _getPrototypeOf(ModalLoaderAjax).call(this, options));
    }

    _createClass(ModalLoaderAjax, [{
      key: "getContents",
      value: function getContents(target, callback) {
        var _this = this;

        _get(_getPrototypeOf(ModalLoaderAjax.prototype), "getContents", this).call(this, target, callback);

        $.ajax({
          url: target,
          type: 'GET',
          dataType: 'html'
        }).done(function (data) {
          var contents = $('<div></div>').append(data).find(_this.options.container).html();
          console.log(contents);
          callback(contents);

          _this._loadComplete();
        }).fail(function () {}).always(function () {});
      }
    }]);

    return ModalLoaderAjax;
  }(ModalLoader);

  var ModalLoaderImage =
  /*#__PURE__*/
  function (_ModalLoader) {
    _inherits(ModalLoaderImage, _ModalLoader);

    function ModalLoaderImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, ModalLoaderImage);

      return _possibleConstructorReturn(this, _getPrototypeOf(ModalLoaderImage).call(this, options));
    }

    _createClass(ModalLoaderImage, [{
      key: "getContents",
      value: function getContents(target, callback) {
        var _this = this;

        _get(_getPrototypeOf(ModalLoaderImage.prototype), "getContents", this).call(this, target, callback);

        var image = new Image();

        image.onload = function () {
          callback(image);

          _this._loadComplete();
        };

        image.onerror = function () {
          console.log("noimage");
          callback(undefined);

          _this._loadComplete();
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

    function ModalLoaderYoutube() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, ModalLoaderYoutube);

      return _possibleConstructorReturn(this, _getPrototypeOf(ModalLoaderYoutube).call(this, options));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmNrbGliLnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21hdGgvTWF0aFV0aWwuanMiLCIuLi9zcmMvbWF0aC9WZWN0b3IuanMiLCIuLi9zcmMvbWF0aC9NYXRyaXguanMiLCIuLi9zcmMvdXRpbC9TaGFyZS5qcyIsIi4uL3NyYy92aWV3L21vZGFsL01vZGFsTG9hZGVyLmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxMb2FkZXJEb20uanMiLCIuLi9zcmMvdmlldy9tb2RhbC9Nb2RhbExvYWRlckFqYXguanMiLCIuLi9zcmMvdmlldy9tb2RhbC9Nb2RhbExvYWRlckltYWdlLmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxMb2FkZXJZb3V0dWJlLmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxWaWV3LmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1hdGhVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZG8gbm90IEluc3RhbnRpYXRpb24hISEhJyk7XHJcbiAgfVxyXG4gIHN0YXRpYyB0b1JhZGlhbihkZWdyZWUpIHtcclxuICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gIH1cclxuICBzdGF0aWMgdG9EZWdyZWUocmFkaWFuKXtcclxuICBcdHJldHVybiByYWRpYW4gKiAxODAvTWF0aC5QSTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtYXAodmFsdWUsaW5Mb3c9MC4wLGluSGlnaD0xLjAsb3V0TG93PTAuMCxvdXRIaWdoPTEuMCxjbGlwPXRydWUpe1xyXG4gIFx0Y29uc3Qgb3V0VmFsdWUgPSAodmFsdWUgLSBpbkxvdykgLyAoaW5IaWdoIC0gaW5Mb3cpICogKG91dEhpZ2ggLSBvdXRMb3cpICsgb3V0TG93O1xyXG4gICAgaWYgKCFjbGlwKVxyXG4gICAgXHRyZXR1cm4gb3V0VmFsdWU7XHJcbiAgICBpZiAob3V0VmFsdWUgPCBvdXRMb3cpXHJcbiAgICBcdHJldHVybiBvdXRMb3c7XHJcbiAgICBpZiAob3V0VmFsdWUgPiBvdXRIaWdoKVxyXG4gICAgXHRyZXR1cm4gb3V0SGlnaDtcclxuXHRyZXR1cm4gb3V0VmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRoVXRpbDsgIiwiLy9Ac2VlIGh0dHBzOi8vZXZhbncuZ2l0aHViLmlvL2xpZ2h0Z2wuanMvZG9jcy9zdGF0aWMgaHRtbFxyXG5jbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZWdhdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcclxuICAgIH1cclxuICAgIGFkZCh2KSB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCArIHYueCwgdGhpcy55ICsgdi55LCB0aGlzLnogKyB2LnopO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54ICsgdiwgdGhpcy55ICsgdiwgdGhpcy56ICsgdik7XHJcbiAgICB9XHJcbiAgICBzdWJ0cmFjdCh2KSB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAtIHYueCwgdGhpcy55IC0gdi55LCB0aGlzLnogLSB2LnopO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54IC0gdiwgdGhpcy55IC0gdiwgdGhpcy56IC0gdik7XHJcbiAgICB9XHJcbiAgICBtdWx0aXBseSh2KSB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAqIHYueCwgdGhpcy55ICogdi55LCB0aGlzLnogKiB2LnopO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54ICogdiwgdGhpcy55ICogdiwgdGhpcy56ICogdik7XHJcbiAgICB9XHJcbiAgICBkaXZpZGUodikge1xyXG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgVmVjdG9yKSByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnggLyB2LngsIHRoaXMueSAvIHYueSwgdGhpcy56IC8gdi56KTtcclxuICAgICAgICBlbHNlIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAvIHYsIHRoaXMueSAvIHYsIHRoaXMueiAvIHYpO1xyXG4gICAgfVxyXG4gICAgZXF1YWxzKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ID09IHYueCAmJiB0aGlzLnkgPT0gdi55ICYmIHRoaXMueiA9PSB2Lno7XHJcbiAgICB9XHJcbiAgICBkb3Qodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9XHJcbiAgICBjcm9zcyh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXHJcbiAgICAgICAgICAgIHRoaXMueSAqIHYueiAtIHRoaXMueiAqIHYueSxcclxuICAgICAgICAgICAgdGhpcy56ICogdi54IC0gdGhpcy54ICogdi56LFxyXG4gICAgICAgICAgICB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2LnhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kb3QodGhpcykpO1xyXG4gICAgfVxyXG4gICAgdW5pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUodGhpcy5sZW5ndGgoKSk7XHJcbiAgICB9XHJcbiAgICBtaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWluKHRoaXMueCwgdGhpcy55KSwgdGhpcy56KTtcclxuICAgIH1cclxuICAgIG1heCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5tYXgodGhpcy54LCB0aGlzLnkpLCB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgdG9BbmdsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGhldGE6IE1hdGguYXRhbjIodGhpcy56LCB0aGlzLngpLFxyXG4gICAgICAgICAgICBwaGk6IE1hdGguYXNpbih0aGlzLnkgLyB0aGlzLmxlbmd0aCgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuZ2xlVG8oYSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFjb3ModGhpcy5kb3QoYSkgLyAodGhpcy5sZW5ndGgoKSAqIGEubGVuZ3RoKCkpKTtcclxuICAgIH1cclxuICAgIHRvQXJyYXkobikge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel0uc2xpY2UoMCwgbiB8fCAzKTtcclxuICAgIH1cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgaW5pdCh4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBuZWdhdGl2ZShhLCBiKSB7XHJcbiAgICAgICAgYi54ID0gLWEueDtcclxuICAgICAgICBiLnkgPSAtYS55O1xyXG4gICAgICAgIGIueiA9IC1hLno7XHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIFZlY3RvcikgeyBjLnggPSBhLnggKyBiLng7XHJcbiAgICAgICAgICAgIGMueSA9IGEueSArIGIueTtcclxuICAgICAgICAgICAgYy56ID0gYS56ICsgYi56OyB9IGVsc2UgeyBjLnggPSBhLnggKyBiO1xyXG4gICAgICAgICAgICBjLnkgPSBhLnkgKyBiO1xyXG4gICAgICAgICAgICBjLnogPSBhLnogKyBiOyB9XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc3VidHJhY3QoYSwgYiwgYykge1xyXG4gICAgICAgIGlmIChiIGluc3RhbmNlb2YgVmVjdG9yKSB7IGMueCA9IGEueCAtIGIueDtcclxuICAgICAgICAgICAgYy55ID0gYS55IC0gYi55O1xyXG4gICAgICAgICAgICBjLnogPSBhLnogLSBiLno7IH0gZWxzZSB7IGMueCA9IGEueCAtIGI7XHJcbiAgICAgICAgICAgIGMueSA9IGEueSAtIGI7XHJcbiAgICAgICAgICAgIGMueiA9IGEueiAtIGI7IH1cclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIHN0YXRpYyBtdWx0aXBseShhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGIgaW5zdGFuY2VvZiBWZWN0b3IpIHsgYy54ID0gYS54ICogYi54O1xyXG4gICAgICAgICAgICBjLnkgPSBhLnkgKiBiLnk7XHJcbiAgICAgICAgICAgIGMueiA9IGEueiAqIGIuejsgfSBlbHNlIHsgYy54ID0gYS54ICogYjtcclxuICAgICAgICAgICAgYy55ID0gYS55ICogYjtcclxuICAgICAgICAgICAgYy56ID0gYS56ICogYjsgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpdmlkZShhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGIgaW5zdGFuY2VvZiBWZWN0b3IpIHsgYy54ID0gYS54IC8gYi54O1xyXG4gICAgICAgICAgICBjLnkgPSBhLnkgLyBiLnk7XHJcbiAgICAgICAgICAgIGMueiA9IGEueiAvIGIuejsgfSBlbHNlIHsgYy54ID0gYS54IC8gYjtcclxuICAgICAgICAgICAgYy55ID0gYS55IC8gYjtcclxuICAgICAgICAgICAgYy56ID0gYS56IC8gYjsgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyb3NzKGEsIGIsIGMpIHtcclxuICAgICAgICBjLnggPSBhLnkgKiBiLnogLSBhLnogKiBiLnk7XHJcbiAgICAgICAgYy55ID0gYS56ICogYi54IC0gYS54ICogYi56O1xyXG4gICAgICAgIGMueiA9IGEueCAqIGIueSAtIGEueSAqIGIueDtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIHN0YXRpYyB1bml0KGEsIGIpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gYS5sZW5ndGgoKTtcclxuICAgICAgICBiLnggPSBhLnggLyBsZW5ndGg7XHJcbiAgICAgICAgYi55ID0gYS55IC8gbGVuZ3RoO1xyXG4gICAgICAgIGIueiA9IGEueiAvIGxlbmd0aDtcclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmcm9tQW5nbGVzKHRoZXRhLCBwaGkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyh0aGV0YSkgKiBNYXRoLmNvcyhwaGkpLCBNYXRoLnNpbihwaGkpLCBNYXRoLnNpbih0aGV0YSkgKiBNYXRoLmNvcyhwaGkpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5kb21EaXJlY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gVmVjdG9yLmZyb21BbmdsZXMoTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyLCBNYXRoLmFzaW4oTWF0aC5yYW5kb20oKSAqIDIgLSAxKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWluKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLm1pbihhLngsIGIueCksIE1hdGgubWluKGEueSwgYi55KSwgTWF0aC5taW4oYS56LCBiLnopKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBtYXgoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGgubWF4KGEueCwgYi54KSwgTWF0aC5tYXgoYS55LCBiLnkpLCBNYXRoLm1heChhLnosIGIueikpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGxlcnAoYSwgYiwgZnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gYi5zdWJ0cmFjdChhKS5tdWx0aXBseShmcmFjdGlvbikuYWRkKGEpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZyb21BcnJheShhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYVswXSwgYVsxXSwgYVsyXSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYW5nbGVCZXR3ZWVuKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5hbmdsZVRvKGIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcclxuXHJcblxyXG4iLCIvL0BzZWUgaHR0cHM6Ly9ldmFudy5naXRodWIuaW8vbGlnaHRnbC5qcy9kb2NzL21hdHJpeC5odG1sXHJcblxyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJztcclxuY2xhc3MgTWF0cml4IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBtID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcclxuICAgIGlmKG0ubGVuZ3RoICE9IDE2ICYmIG0ubGVuZ3RoICE9IDApe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLlvJXmlbDjgavjga8xNuOBruaVsOWtl+OCkuWFpeOCjOOCi+OBi+OAgeS9leOCguWFpeOCjOOBquOBhOOBp1wiKTtcclxuICAgIH1cclxuICAgIGlmICghbS5sZW5ndGgpIHtcclxuICAgICAgbSA9IFtcclxuICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLm0gPSBtO1xyXG4gIH1cclxuICBcclxuICBpbnZlcnNlKCl7XHJcbiAgICByZXR1cm4gTWF0cml4LmludmVyc2UodGhpcywgbmV3IE1hdHJpeCgpKTtcclxuICB9XHJcblxyXG4gIHRyYW5zcG9zZSgpe1xyXG4gICAgcmV0dXJuIE1hdHJpeC50cmFuc3Bvc2UodGhpcywgbmV3IE1hdHJpeCgpKTtcclxuICB9XHJcblxyXG4gIG11bHRpcGx5KG1hdHJpeCl7XHJcbiAgICByZXR1cm4gTWF0cml4Lm11bHRpcGx5KHRoaXMsIG1hdHJpeCwgbmV3IE1hdHJpeCgpKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVBvaW50KHYpe1xyXG4gICAgdmFyIG0gPSB0aGlzLm07XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcihcclxuICAgICAgbVswXSAqIHYueCArIG1bMV0gKiB2LnkgKyBtWzJdICogdi56ICsgbVszXSxcclxuICAgICAgbVs0XSAqIHYueCArIG1bNV0gKiB2LnkgKyBtWzZdICogdi56ICsgbVs3XSxcclxuICAgICAgbVs4XSAqIHYueCArIG1bOV0gKiB2LnkgKyBtWzEwXSAqIHYueiArIG1bMTFdXHJcbiAgICApLmRpdmlkZShtWzEyXSAqIHYueCArIG1bMTNdICogdi55ICsgbVsxNF0gKiB2LnogKyBtWzE1XSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1WZWN0b3Iodil7XHJcbiAgICB2YXIgbSA9IHRoaXMubTtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yKFxyXG4gICAgICBtWzBdICogdi54ICsgbVsxXSAqIHYueSArIG1bMl0gKiB2LnosXHJcbiAgICAgIG1bNF0gKiB2LnggKyBtWzVdICogdi55ICsgbVs2XSAqIHYueixcclxuICAgICAgbVs4XSAqIHYueCArIG1bOV0gKiB2LnkgKyBtWzEwXSAqIHYuelxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbnZlcnNlKG1hdHJpeCxyZXN1bHQpe1xyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IG5ldyBNYXRyaXgoKTtcclxuICAgIHZhciBtID0gbWF0cml4Lm0sIHIgPSByZXN1bHQubTtcclxuICAgIHJbMF0gPSBtWzVdKm1bMTBdKm1bMTVdIC0gbVs1XSptWzE0XSptWzExXSAtIG1bNl0qbVs5XSptWzE1XSArIG1bNl0qbVsxM10qbVsxMV0gKyBtWzddKm1bOV0qbVsxNF0gLSBtWzddKm1bMTNdKm1bMTBdO1xyXG4gICAgclsxXSA9IC1tWzFdKm1bMTBdKm1bMTVdICsgbVsxXSptWzE0XSptWzExXSArIG1bMl0qbVs5XSptWzE1XSAtIG1bMl0qbVsxM10qbVsxMV0gLSBtWzNdKm1bOV0qbVsxNF0gKyBtWzNdKm1bMTNdKm1bMTBdO1xyXG4gICAgclsyXSA9IG1bMV0qbVs2XSptWzE1XSAtIG1bMV0qbVsxNF0qbVs3XSAtIG1bMl0qbVs1XSptWzE1XSArIG1bMl0qbVsxM10qbVs3XSArIG1bM10qbVs1XSptWzE0XSAtIG1bM10qbVsxM10qbVs2XTtcclxuICAgIHJbM10gPSAtbVsxXSptWzZdKm1bMTFdICsgbVsxXSptWzEwXSptWzddICsgbVsyXSptWzVdKm1bMTFdIC0gbVsyXSptWzldKm1bN10gLSBtWzNdKm1bNV0qbVsxMF0gKyBtWzNdKm1bOV0qbVs2XTtcclxuXHJcbiAgICByWzRdID0gLW1bNF0qbVsxMF0qbVsxNV0gKyBtWzRdKm1bMTRdKm1bMTFdICsgbVs2XSptWzhdKm1bMTVdIC0gbVs2XSptWzEyXSptWzExXSAtIG1bN10qbVs4XSptWzE0XSArIG1bN10qbVsxMl0qbVsxMF07XHJcbiAgICByWzVdID0gbVswXSptWzEwXSptWzE1XSAtIG1bMF0qbVsxNF0qbVsxMV0gLSBtWzJdKm1bOF0qbVsxNV0gKyBtWzJdKm1bMTJdKm1bMTFdICsgbVszXSptWzhdKm1bMTRdIC0gbVszXSptWzEyXSptWzEwXTtcclxuICAgIHJbNl0gPSAtbVswXSptWzZdKm1bMTVdICsgbVswXSptWzE0XSptWzddICsgbVsyXSptWzRdKm1bMTVdIC0gbVsyXSptWzEyXSptWzddIC0gbVszXSptWzRdKm1bMTRdICsgbVszXSptWzEyXSptWzZdO1xyXG4gICAgcls3XSA9IG1bMF0qbVs2XSptWzExXSAtIG1bMF0qbVsxMF0qbVs3XSAtIG1bMl0qbVs0XSptWzExXSArIG1bMl0qbVs4XSptWzddICsgbVszXSptWzRdKm1bMTBdIC0gbVszXSptWzhdKm1bNl07XHJcblxyXG4gICAgcls4XSA9IG1bNF0qbVs5XSptWzE1XSAtIG1bNF0qbVsxM10qbVsxMV0gLSBtWzVdKm1bOF0qbVsxNV0gKyBtWzVdKm1bMTJdKm1bMTFdICsgbVs3XSptWzhdKm1bMTNdIC0gbVs3XSptWzEyXSptWzldO1xyXG4gICAgcls5XSA9IC1tWzBdKm1bOV0qbVsxNV0gKyBtWzBdKm1bMTNdKm1bMTFdICsgbVsxXSptWzhdKm1bMTVdIC0gbVsxXSptWzEyXSptWzExXSAtIG1bM10qbVs4XSptWzEzXSArIG1bM10qbVsxMl0qbVs5XTtcclxuICAgIHJbMTBdID0gbVswXSptWzVdKm1bMTVdIC0gbVswXSptWzEzXSptWzddIC0gbVsxXSptWzRdKm1bMTVdICsgbVsxXSptWzEyXSptWzddICsgbVszXSptWzRdKm1bMTNdIC0gbVszXSptWzEyXSptWzVdO1xyXG4gICAgclsxMV0gPSAtbVswXSptWzVdKm1bMTFdICsgbVswXSptWzldKm1bN10gKyBtWzFdKm1bNF0qbVsxMV0gLSBtWzFdKm1bOF0qbVs3XSAtIG1bM10qbVs0XSptWzldICsgbVszXSptWzhdKm1bNV07XHJcblxyXG4gICAgclsxMl0gPSAtbVs0XSptWzldKm1bMTRdICsgbVs0XSptWzEzXSptWzEwXSArIG1bNV0qbVs4XSptWzE0XSAtIG1bNV0qbVsxMl0qbVsxMF0gLSBtWzZdKm1bOF0qbVsxM10gKyBtWzZdKm1bMTJdKm1bOV07XHJcbiAgICByWzEzXSA9IG1bMF0qbVs5XSptWzE0XSAtIG1bMF0qbVsxM10qbVsxMF0gLSBtWzFdKm1bOF0qbVsxNF0gKyBtWzFdKm1bMTJdKm1bMTBdICsgbVsyXSptWzhdKm1bMTNdIC0gbVsyXSptWzEyXSptWzldO1xyXG4gICAgclsxNF0gPSAtbVswXSptWzVdKm1bMTRdICsgbVswXSptWzEzXSptWzZdICsgbVsxXSptWzRdKm1bMTRdIC0gbVsxXSptWzEyXSptWzZdIC0gbVsyXSptWzRdKm1bMTNdICsgbVsyXSptWzEyXSptWzVdO1xyXG4gICAgclsxNV0gPSBtWzBdKm1bNV0qbVsxMF0gLSBtWzBdKm1bOV0qbVs2XSAtIG1bMV0qbVs0XSptWzEwXSArIG1bMV0qbVs4XSptWzZdICsgbVsyXSptWzRdKm1bOV0gLSBtWzJdKm1bOF0qbVs1XTtcclxuXHJcbiAgICB2YXIgZGV0ID0gbVswXSpyWzBdICsgbVsxXSpyWzRdICsgbVsyXSpyWzhdICsgbVszXSpyWzEyXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykgcltpXSAvPSBkZXQ7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRyYW5zcG9zZShtYXRyaXgscmVzdWx0KXtcclxuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBuZXcgTWF0cml4KCk7XHJcbiAgICB2YXIgbSA9IG1hdHJpeC5tLCByID0gcmVzdWx0Lm07XHJcbiAgICByWzBdID0gbVswXTsgclsxXSA9IG1bNF07IHJbMl0gPSBtWzhdOyByWzNdID0gbVsxMl07XHJcbiAgICByWzRdID0gbVsxXTsgcls1XSA9IG1bNV07IHJbNl0gPSBtWzldOyByWzddID0gbVsxM107XHJcbiAgICByWzhdID0gbVsyXTsgcls5XSA9IG1bNl07IHJbMTBdID0gbVsxMF07IHJbMTFdID0gbVsxNF07XHJcbiAgICByWzEyXSA9IG1bM107IHJbMTNdID0gbVs3XTsgclsxNF0gPSBtWzExXTsgclsxNV0gPSBtWzE1XTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbXVsdGlwbHkobGVmdCwgcmlnaHQsIHJlc3VsdCkge1xyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IG5ldyBNYXRyaXgoKTtcclxuICAgIHZhciBhID0gbGVmdC5tLCBiID0gcmlnaHQubSwgciA9IHJlc3VsdC5tO1xyXG5cclxuICAgIHJbMF0gPSBhWzBdICogYlswXSArIGFbMV0gKiBiWzRdICsgYVsyXSAqIGJbOF0gKyBhWzNdICogYlsxMl07XHJcbiAgICByWzFdID0gYVswXSAqIGJbMV0gKyBhWzFdICogYls1XSArIGFbMl0gKiBiWzldICsgYVszXSAqIGJbMTNdO1xyXG4gICAgclsyXSA9IGFbMF0gKiBiWzJdICsgYVsxXSAqIGJbNl0gKyBhWzJdICogYlsxMF0gKyBhWzNdICogYlsxNF07XHJcbiAgICByWzNdID0gYVswXSAqIGJbM10gKyBhWzFdICogYls3XSArIGFbMl0gKiBiWzExXSArIGFbM10gKiBiWzE1XTtcclxuXHJcbiAgICByWzRdID0gYVs0XSAqIGJbMF0gKyBhWzVdICogYls0XSArIGFbNl0gKiBiWzhdICsgYVs3XSAqIGJbMTJdO1xyXG4gICAgcls1XSA9IGFbNF0gKiBiWzFdICsgYVs1XSAqIGJbNV0gKyBhWzZdICogYls5XSArIGFbN10gKiBiWzEzXTtcclxuICAgIHJbNl0gPSBhWzRdICogYlsyXSArIGFbNV0gKiBiWzZdICsgYVs2XSAqIGJbMTBdICsgYVs3XSAqIGJbMTRdO1xyXG4gICAgcls3XSA9IGFbNF0gKiBiWzNdICsgYVs1XSAqIGJbN10gKyBhWzZdICogYlsxMV0gKyBhWzddICogYlsxNV07XHJcblxyXG4gICAgcls4XSA9IGFbOF0gKiBiWzBdICsgYVs5XSAqIGJbNF0gKyBhWzEwXSAqIGJbOF0gKyBhWzExXSAqIGJbMTJdO1xyXG4gICAgcls5XSA9IGFbOF0gKiBiWzFdICsgYVs5XSAqIGJbNV0gKyBhWzEwXSAqIGJbOV0gKyBhWzExXSAqIGJbMTNdO1xyXG4gICAgclsxMF0gPSBhWzhdICogYlsyXSArIGFbOV0gKiBiWzZdICsgYVsxMF0gKiBiWzEwXSArIGFbMTFdICogYlsxNF07XHJcbiAgICByWzExXSA9IGFbOF0gKiBiWzNdICsgYVs5XSAqIGJbN10gKyBhWzEwXSAqIGJbMTFdICsgYVsxMV0gKiBiWzE1XTtcclxuXHJcbiAgICByWzEyXSA9IGFbMTJdICogYlswXSArIGFbMTNdICogYls0XSArIGFbMTRdICogYls4XSArIGFbMTVdICogYlsxMl07XHJcbiAgICByWzEzXSA9IGFbMTJdICogYlsxXSArIGFbMTNdICogYls1XSArIGFbMTRdICogYls5XSArIGFbMTVdICogYlsxM107XHJcbiAgICByWzE0XSA9IGFbMTJdICogYlsyXSArIGFbMTNdICogYls2XSArIGFbMTRdICogYlsxMF0gKyBhWzE1XSAqIGJbMTRdO1xyXG4gICAgclsxNV0gPSBhWzEyXSAqIGJbM10gKyBhWzEzXSAqIGJbN10gKyBhWzE0XSAqIGJbMTFdICsgYVsxNV0gKiBiWzE1XTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpZGVudGl0eShyZXN1bHQpIHtcclxuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBuZXcgTWF0cml4KCk7XHJcbiAgICB2YXIgbSA9IHJlc3VsdC5tO1xyXG4gICAgbVswXSA9IG1bNV0gPSBtWzEwXSA9IG1bMTVdID0gMTtcclxuICAgIG1bMV0gPSBtWzJdID0gbVszXSA9IG1bNF0gPSBtWzZdID0gbVs3XSA9IG1bOF0gPSBtWzldID0gbVsxMV0gPSBtWzEyXSA9IG1bMTNdID0gbVsxNF0gPSAwO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgc2NhbGUoeCwgeSwgeiwgcmVzdWx0KSB7XHJcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgbmV3IE1hdHJpeCgpO1xyXG4gICAgdmFyIG0gPSByZXN1bHQubTtcclxuXHJcbiAgICBtWzBdID0geDtcclxuICAgIG1bMV0gPSAwO1xyXG4gICAgbVsyXSA9IDA7XHJcbiAgICBtWzNdID0gMDtcclxuXHJcbiAgICBtWzRdID0gMDtcclxuICAgIG1bNV0gPSB5O1xyXG4gICAgbVs2XSA9IDA7XHJcbiAgICBtWzddID0gMDtcclxuXHJcbiAgICBtWzhdID0gMDtcclxuICAgIG1bOV0gPSAwO1xyXG4gICAgbVsxMF0gPSB6O1xyXG4gICAgbVsxMV0gPSAwO1xyXG5cclxuICAgIG1bMTJdID0gMDtcclxuICAgIG1bMTNdID0gMDtcclxuICAgIG1bMTRdID0gMDtcclxuICAgIG1bMTVdID0gMTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyB0cmFuc2xhdGUoeCwgeSwgeiwgcmVzdWx0KSB7XHJcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgbmV3IE1hdHJpeCgpO1xyXG4gICAgdmFyIG0gPSByZXN1bHQubTtcclxuXHJcbiAgICBtWzBdID0gMTtcclxuICAgIG1bMV0gPSAwO1xyXG4gICAgbVsyXSA9IDA7XHJcbiAgICBtWzNdID0geDtcclxuXHJcbiAgICBtWzRdID0gMDtcclxuICAgIG1bNV0gPSAxO1xyXG4gICAgbVs2XSA9IDA7XHJcbiAgICBtWzddID0geTtcclxuXHJcbiAgICBtWzhdID0gMDtcclxuICAgIG1bOV0gPSAwO1xyXG4gICAgbVsxMF0gPSAxO1xyXG4gICAgbVsxMV0gPSB6O1xyXG5cclxuICAgIG1bMTJdID0gMDtcclxuICAgIG1bMTNdID0gMDtcclxuICAgIG1bMTRdID0gMDtcclxuICAgIG1bMTVdID0gMTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyByb3RhdGUoYSwgeCwgeSwgeiwgcmVzdWx0KSB7XHJcbiAgICBpZiAoIWEgfHwgKCF4ICYmICF5ICYmICF6KSkge1xyXG4gICAgICByZXR1cm4gTWF0cml4LmlkZW50aXR5KHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IG5ldyBNYXRyaXgoKTtcclxuICAgIHZhciBtID0gcmVzdWx0Lm07XHJcblxyXG4gICAgdmFyIGQgPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcclxuICAgIGEgKj0gTWF0aC5QSSAvIDE4MDsgeCAvPSBkOyB5IC89IGQ7IHogLz0gZDtcclxuICAgIHZhciBjID0gTWF0aC5jb3MoYSksIHMgPSBNYXRoLnNpbihhKSwgdCA9IDEgLSBjO1xyXG5cclxuICAgIG1bMF0gPSB4ICogeCAqIHQgKyBjO1xyXG4gICAgbVsxXSA9IHggKiB5ICogdCAtIHogKiBzO1xyXG4gICAgbVsyXSA9IHggKiB6ICogdCArIHkgKiBzO1xyXG4gICAgbVszXSA9IDA7XHJcblxyXG4gICAgbVs0XSA9IHkgKiB4ICogdCArIHogKiBzO1xyXG4gICAgbVs1XSA9IHkgKiB5ICogdCArIGM7XHJcbiAgICBtWzZdID0geSAqIHogKiB0IC0geCAqIHM7XHJcbiAgICBtWzddID0gMDtcclxuXHJcbiAgICBtWzhdID0geiAqIHggKiB0IC0geSAqIHM7XHJcbiAgICBtWzldID0geiAqIHkgKiB0ICsgeCAqIHM7XHJcbiAgICBtWzEwXSA9IHogKiB6ICogdCArIGM7XHJcbiAgICBtWzExXSA9IDA7XHJcblxyXG4gICAgbVsxMl0gPSAwO1xyXG4gICAgbVsxM10gPSAwO1xyXG4gICAgbVsxNF0gPSAwO1xyXG4gICAgbVsxNV0gPSAxO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDsgICAgIiwiXHJcblxyXG5jb25zdCBGQUNFQk9PSyA9ICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwJztcclxuY29uc3QgVFdJVFRFUiA9ICdodHRwOi8vdHdpdHRlci5jb20vc2hhcmUnO1xyXG5jb25zdCBMSU5LRURJTiA9ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGUnO1xyXG5jb25zdCBHT09HTEUgPSAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmUnO1xyXG5jb25zdCBMSU5FID0gJ2h0dHA6Ly9saW5lLm1lL1IvbXNnL3RleHQvJztcclxuY29uc3QgUElOVEVSRVNUID0gJ2h0dHA6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLyc7XHJcbmNvbnN0IEhBVEVCVSA9ICdodHRwOi8vYi5oYXRlbmEubmUuanAvZW50cnkvJztcclxuXHJcbmNvbnN0IFdJTkRPV19OQU1FID0gXCJTaGFyZVdpbmRvd1wiO1xyXG5jb25zdCBXSU5ET1dfT1BUSU9OUyA9ICd3aWR0aD01NTQsIGhlaWdodD00NzAsIG1lbnViYXI9bm8sIHRvb2xiYXI9bm8sIHNjcm9sbGJhcnM9eWVzJztcclxuXHJcblxyXG5jbGFzcyBTaGFyZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxuICBcclxuICBmYWNlYm9vayhvcHRpb25zKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBjb25zdCB1cmwgPSBwYXJhbXMudXJsIHx8IHRoaXMudXJsO1xyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtGQUNFQk9PS30/dT0ke3VybH1gO1xyXG4gICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGRlY29kZVVSSShzaGFyZVVybCkpLFdJTkRPV19OQU1FLFdJTkRPV19PUFRJT05TKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHR3aXR0ZXIob3B0aW9ucyl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgY29uc3QgdXJsID0gcGFyYW1zLnVybCB8fCB0aGlzLnVybDtcclxuICAgIGNvbnN0IHRleHQgPSBwYXJhbXMudGV4dCB8fCBcInRpdGl0aXRpdGl0XCI7XHJcbiAgICBjb25zdCBoYXNodGFncyA9IHBhcmFtcy5oYXNodGFncyB8fCBcIlwiO1xyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtUV0lUVEVSfT91cmw9JHt1cmx9JnRleHQ9JHt0ZXh0fSZoYXNodGFncz0ke2hhc2h0YWdzfWA7XHJcbiAgICB3aW5kb3cub3BlbihlbmNvZGVVUkkoZGVjb2RlVVJJKHNoYXJlVXJsKSksV0lORE9XX05BTUUsV0lORE9XX09QVElPTlMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ29vZ2xlKG9wdGlvbnMpe1xyXG4gICAgY29uc3QgcGFyYW1zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHVybCA9IHBhcmFtcy51cmwgfHwgdGhpcy51cmw7XHJcbiAgICBjb25zdCBzaGFyZVVybCA9IGAke0dPT0dMRX0/dXJsPSR7dXJsfWA7XHJcbiAgICB3aW5kb3cub3BlbihlbmNvZGVVUkkoZGVjb2RlVVJJKHNoYXJlVXJsKSksV0lORE9XX05BTUUsV0lORE9XX09QVElPTlMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbGlua2VkaW4ob3B0aW9ucyl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgY29uc3QgdXJsID0gcGFyYW1zLnVybCB8fCB0aGlzLnVybDtcclxuICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLnRpdGxlIHx8IFwidGl0aXRpdGl0aXRcIjtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBwYXJhbXMuc3VtbWFyeSB8fCBcIlwiO1xyXG4gICAgY29uc3Qgc291cmNlID0gcGFyYW1zLnNvdXJjZSB8fCBcIlwiO1xyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtMSU5LRURJTn0/bWluaT10cnVlJnVybD0ke3VybH0mdGl0bGU9JHt0aXRsZX0mc3VtbWFyeT0ke3N1bW1hcnl9JnNvdXJjZT0ke3NvdXJjZX1gO1xyXG4gICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGRlY29kZVVSSShzaGFyZVVybCkpLFdJTkRPV19OQU1FLFdJTkRPV19PUFRJT05TKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxpbmUob3B0aW9ucyl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgY29uc3QgdXJsID0gcGFyYW1zLnVybCB8fCB0aGlzLnVybDtcclxuICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLnRpdGxlIHx8IFwidGl0aXRpdGl0aXRcIjtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtMSU5FfT8ke2VuY29kZVVSSSh0aXRsZSl9JHtlbmNvZGVVUkkodXJsKX1gO1xyXG4gICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGRlY29kZVVSSShzaGFyZVVybCkpLFdJTkRPV19OQU1FLFdJTkRPV19PUFRJT05TKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBpbnRlcmVzdChvcHRpb25zKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBjb25zdCB1cmwgPSBwYXJhbXMudXJsIHx8IHRoaXMudXJsO1xyXG4gICAgY29uc3QgbWVkaWEgPSBwYXJhbXMubWVkaWEgfHwgXCJ0aXRpdGl0aXRpdFwiO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwYXJhbXMuZGVzY3JpcHRpb24gfHwgXCJ0aXRpdGl0aXRpdFwiO1xyXG4gICAgXHJcbiAgICBjb25zdCBzaGFyZVVybCA9IGAke1BJTlRFUkVTVH0/dXJsPSR7dXJsfSZtZWRpYT0ke21lZGlhfSZkZXNjcmlwdGlvbj0ke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICB3aW5kb3cub3BlbihlbmNvZGVVUkkoZGVjb2RlVVJJKHNoYXJlVXJsKSksV0lORE9XX05BTUUsV0lORE9XX09QVElPTlMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGF0ZWJ1KG9wdGlvbnMpe1xyXG4gICAgY29uc3QgcGFyYW1zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHVybCA9IHBhcmFtcy51cmwgfHwgdGhpcy51cmw7XHJcbiAgICBjb25zdCBzaGFyZVVybCA9IGAke0hBVEVCVX0/JHt1cmx9YDtcclxuICAgIHdpbmRvdy5vcGVuKGVuY29kZVVSSShkZWNvZGVVUkkoc2hhcmVVcmwpKSxXSU5ET1dfTkFNRSxXSU5ET1dfT1BUSU9OUyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmU7IFxyXG4iLCJjbGFzcyBNb2RhbExvYWRlcntcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPW51bGwpe1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHR9XHJcblx0Z2V0Q29udGVudHModGFyZ2V0LGNhbGxiYWNrKXtcclxuXHRcdHRoaXMuX2xvYWQoKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkKCl7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRcIilcclxuXHR9XHJcblxyXG5cdF9sb2FkQ29tcGxldGUoKXtcclxuXHRcdGNvbnNvbGUubG9nKFwibG9hZENvbXBsZXRlXCIpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGFsTG9hZGVyfSIsImltcG9ydCB7TW9kYWxMb2FkZXJ9IGZyb20gXCIuL01vZGFsTG9hZGVyLmpzXCJcclxuY2xhc3MgTW9kYWxMb2FkZXJEb20gZXh0ZW5kcyBNb2RhbExvYWRlciB7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRlclwiKVxyXG5cdH1cclxuXHRnZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spe1x0XHJcblx0XHRzdXBlci5nZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spO1x0XHJcblx0XHRjb25zdCBjb250ZW50cyA9ICQodGFyZ2V0KS5odG1sKCk7XHJcblx0XHRjYWxsYmFjayhjb250ZW50cyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGFsTG9hZGVyRG9tfSIsImltcG9ydCB7TW9kYWxMb2FkZXJ9IGZyb20gXCIuL01vZGFsTG9hZGVyLmpzXCJcclxuY2xhc3MgTW9kYWxMb2FkZXJBamF4IGV4dGVuZHMgTW9kYWxMb2FkZXIge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cdFx0c3VwZXIob3B0aW9ucyk7XHJcblx0fVxyXG5cdGdldENvbnRlbnRzKHRhcmdldCxjYWxsYmFjayl7XHJcblx0XHRzdXBlci5nZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spO1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiB0YXJnZXQsXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRkYXRhVHlwZTogJ2h0bWwnXHJcblx0XHR9KVxyXG5cdFx0LmRvbmUoKGRhdGEpPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgY29udGVudHMgPSAkKCc8ZGl2PjwvZGl2PicpLmFwcGVuZChkYXRhKS5maW5kKHRoaXMub3B0aW9ucy5jb250YWluZXIpLmh0bWwoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY29udGVudHMpXHJcblx0XHRcdGNhbGxiYWNrKGNvbnRlbnRzKTtcclxuXHRcdFx0dGhpcy5fbG9hZENvbXBsZXRlKCk7XHJcblx0XHR9KVxyXG5cdFx0LmZhaWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSkgXHJcblx0XHQuYWx3YXlzKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGFsTG9hZGVyQWpheH0iLCJpbXBvcnQge01vZGFsTG9hZGVyfSBmcm9tIFwiLi9Nb2RhbExvYWRlci5qc1wiXHJcbmNsYXNzIE1vZGFsTG9hZGVySW1hZ2UgZXh0ZW5kcyBNb2RhbExvYWRlciB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz1udWxsKXtcclxuXHRcdHN1cGVyKG9wdGlvbnMpO1xyXG5cdH1cclxuXHRnZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spe1xyXG5cdFx0c3VwZXIuZ2V0Q29udGVudHModGFyZ2V0LGNhbGxiYWNrKTtcclxuXHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0aW1hZ2Uub25sb2FkID0gKCk9PntcclxuXHRcdFx0Y2FsbGJhY2soaW1hZ2UpO1xyXG5cdFx0XHR0aGlzLl9sb2FkQ29tcGxldGUoKTtcclxuXHRcdH1cclxuXHRcdGltYWdlLm9uZXJyb3IgPSAoKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIm5vaW1hZ2VcIilcclxuXHRcdFx0Y2FsbGJhY2sodW5kZWZpbmVkKTtcclxuXHRcdFx0dGhpcy5fbG9hZENvbXBsZXRlKCk7XHJcblx0XHR9XHJcblx0XHRpbWFnZS5zcmMgPSB0YXJnZXQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RhbExvYWRlckltYWdlfSIsImltcG9ydCB7TW9kYWxMb2FkZXJ9IGZyb20gXCIuL01vZGFsTG9hZGVyLmpzXCJcclxuY2xhc3MgTW9kYWxMb2FkZXJZb3V0dWJlIGV4dGVuZHMgTW9kYWxMb2FkZXIge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM9bnVsbCl7XHJcblx0XHRzdXBlcihvcHRpb25zKTtcclxuXHR9XHJcblx0Z2V0Q29udGVudHModGFyZ2V0LGNhbGxiYWNrKXtcclxuXHRcdHN1cGVyLmdldENvbnRlbnRzKHRhcmdldCxjYWxsYmFjayk7XHJcblx0XHRjb25zdCBjb250ZW50cyA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC15b3V0dWJlLWNvbnRhaW5lclwiPlxyXG5cdFx0PGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIiR7dGFyZ2V0fVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0YDtcclxuXHRcdGNvbnNvbGUubG9nKGNvbnRlbnRzKVxyXG5cdFx0Y2FsbGJhY2soY29udGVudHMpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RhbExvYWRlcllvdXR1YmV9IiwiY2xhc3MgTW9kYWxWaWV3e1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHR0aGlzLncgPSAkKHdpbmRvdyk7XHJcblx0fVxyXG5cclxuXHRzZXQoY29udGVudHMpe1xyXG5cdFx0dGhpcy5ib2R5ID0gJCgnLm1vZGFsX19ib2R5Jyk7XHJcblx0XHR0aGlzLmJvZHkuZmluZChcIi5tb2RhbF9fY29udGVudHNcIikuaHRtbChjb250ZW50cyk7XHJcblx0fVxyXG5cdHJlc2l6ZSh3LGgpe1xyXG5cdFx0dGhpcy5pc092ZXJmbG93SGVpZ2h0KClcclxuXHR9XHJcblxyXG5cdGlzT3ZlcmZsb3dIZWlnaHQoKXtcclxuXHRcdGlmKHRoaXMuYm9keS5vdXRlckhlaWdodCgpID4gJCh3aW5kb3cpLmhlaWdodCgpKXtcclxuXHRcdFx0JCgnaHRtbCcpLmFkZENsYXNzKCdpcy1tb2RhbC1vdmVyZmxvdy13aW5kb3cnKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdpcy1tb2RhbC1vdmVyZmxvdy13aW5kb3cnKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RhbFZpZXd9IiwiaW1wb3J0IHtNb2RhbExvYWRlckRvbX0gZnJvbSAnLi9Nb2RhbExvYWRlckRvbS5qcyc7XHJcbmltcG9ydCB7TW9kYWxMb2FkZXJBamF4fSBmcm9tICcuL01vZGFsTG9hZGVyQWpheC5qcyc7XHJcbmltcG9ydCB7TW9kYWxMb2FkZXJJbWFnZX0gZnJvbSAnLi9Nb2RhbExvYWRlckltYWdlLmpzJztcclxuXHJcbmltcG9ydCB7TW9kYWxMb2FkZXJZb3V0dWJlfSBmcm9tICcuL01vZGFsTG9hZGVyWW91dHViZS5qcyc7XHJcbmltcG9ydCB7TW9kYWxWaWV3fSBmcm9tICcuL01vZGFsVmlldy5qcyc7XHJcbnZhciBtb2RhbFRyaWdnZXIgPSAnLm1vZGFsLW9wZW4nO1xyXG5cclxuXHJcbmNsYXNzIE1vZGFsQ29udHJvbGxlcntcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuXHRcdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdFx0cGFnZXJUYXJnZXQ6Jy5tb2RhbF9fYm9keScsXHJcblx0XHRcdGNsb3NlOic8YSBjbGFzcz1cIm1vZGFsLWNsb3NlXCI+Q0xPU0U8L2E+JyxcclxuXHRcdFx0Y2xvc2VJbnNlcnQ6ZmFsc2VcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLncgPSAkKHdpbmRvdyk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IE1vZGFsQ29udHJvbGxlci5odG1sU3RyaW5nO1xyXG5cdFx0dGhpcy5tb2RhbCA9IG5ldyBNb2RhbFZpZXcoKTtcclxuXHRcdHRoaXMuZ3JvdXAgPSB7fTtcclxuXHRcdHRoaXMuY3VycmVudEdyb3VwSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jdXJyZW50R3JvdXAgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmluaXRHcm91cCgpO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5tb2RhbC1wYWdlcicsKGUpPT57XHJcblxyXG5cdFx0XHRpZigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgncGFnaW5nJykgPT0gXCJuZXh0XCIpe1xyXG5cdFx0XHRcdGlmKHRoaXMuaXNOZXh0KCkpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleCsrO1x0XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRHcm91cEluZGV4PTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9ZWxzZSBpZigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgncGFnaW5nJykgPT0gXCJwcmV2XCIpe1xyXG5cdFx0XHRcdGlmKHRoaXMuaXNQcmV2KCkpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleC0tO1x0XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRHcm91cEluZGV4PXRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50R3JvdXBdLmxlbmd0aC0xO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleCA9IE51bWJlcigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgncGFnaW5nJykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlUGFnZXIoKTtcclxuXHRcdFx0dmFyIG9iaiA9IHRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50R3JvdXBdW3RoaXMuY3VycmVudEdyb3VwSW5kZXhdO1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gb2JqLmRhdGEoXCJ0YXJnZXRcIik7XHJcblx0XHRcdGxldCB0eXBlID0gb2JqLmRhdGEoXCJtb2RhbHR5cGVcIik7XHJcblx0XHRcdHRoaXMuc2hvdyh0eXBlLHRhcmdldCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsbW9kYWxUcmlnZ2VyLChlKT0+e1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJ0YXJnZXRcIik7XHJcblx0XHRcdGxldCB0eXBlID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJtb2RhbHR5cGVcIik7XHJcblx0XHRcdGxldCBncm91cDIgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YShcImdyb3VwXCIpO1xyXG5cdFx0XHRsZXQgcGFnaW5nMiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKFwicGFnaW5nXCIpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDI7XHJcblxyXG5cdFx0XHRpZih0aGlzLmdyb3VwW2dyb3VwMl0pe1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ncm91cFtncm91cDJdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZigkKGUuY3VycmVudFRhcmdldCkuaXModGhpcy5ncm91cFtncm91cDJdW2ldKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEdyb3VwSW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2hvdyh0eXBlLHRhcmdldCk7XHJcblx0XHRcdHRoaXMudXBkYXRlUGFnZXIoKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSlcclxuXHJcblx0XHJcblx0fVxyXG5cclxuXHRzZXRTZXR0aW5nKG9wdGlvbnMpe1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLnNldHRpbmdzLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdGlzTmV4dCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50R3JvdXBdLmxlbmd0aCA+IHRoaXMuY3VycmVudEdyb3VwSW5kZXgrMTtcclxuXHR9XHJcblxyXG5cdGlzUHJldigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEdyb3VwSW5kZXgtMSA+PSAwO1xyXG5cdH1cclxuXHJcblx0aW5pdChtb2RhbExvYWRlcil7XHJcblx0XHR0aGlzLm1vZGFsTG9hZGVyID0gbW9kYWxMb2FkZXI7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYWdlcigpe1xyXG5cdFx0aWYoIXRoaXMuY3VycmVudEdyb3VwKSByZXR1cm47XHJcblxyXG5cdFx0dmFyIGh0bWwgPSBcIlwiO1xyXG5cdFx0aHRtbCArPSAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLXBhZ2VyIG1vZGFsLXBhZ2VyLXByZXZcIiBkYXRhLXBhZ2luZz1cInByZXZcIj5QUkVWPC9hPic7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdyb3VwW3RoaXMuY3VycmVudEdyb3VwXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRodG1sICs9ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtcGFnZXJcIiBkYXRhLXBhZ2luZz1cIicraSsnXCI+JytpKyc8L2E+JztcclxuXHRcdH1cclxuXHRcdGh0bWwgKz0gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1wYWdlciBtb2RhbC1wYWdlci1uZXh0XCIgZGF0YS1wYWdpbmc9XCJuZXh0XCI+TkVYVDwvYT4nO1xyXG5cdFx0JCh0aGlzLnNldHRpbmdzLnBhZ2VyVGFyZ2V0KS5hcHBlbmQoaHRtbCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYWdlcigpe1xyXG5cdFx0aWYoIXRoaXMuY3VycmVudEdyb3VwKSByZXR1cm47XHJcblx0XHQkKCcubW9kYWwtcGFnZXInKS5yZW1vdmVDbGFzcygnaXMtY3VycmVudCcpO1xyXG5cdFx0JCgnLm1vZGFsLXBhZ2VyW2RhdGEtcGFnaW5nPScrdGhpcy5jdXJyZW50R3JvdXBJbmRleCsnXScpLmFkZENsYXNzKCdpcy1jdXJyZW50Jyk7XHJcblx0fVxyXG5cclxuXHRpbml0R3JvdXAoKXtcclxuXHRcdFxyXG5cdFx0JChtb2RhbFRyaWdnZXIpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9tb2RhbOWGheOBruasoeOBuOaIu+OCi+OBruWgtOWQiOOBr+WHpueQhuOCkuOCueOCreODg+ODl1xyXG5cdFx0XHRpZigkKGVsKS5wYXJlbnRzKFwiLm1vZGFsLWNvbnRlbnRzXCIpLmxlbmd0aCA+IDApIHJldHVybjtcclxuXHRcdFx0dmFyIGdyb3VwTmFtZSA9ICQoZWwpLmRhdGEoXCJncm91cFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKGdyb3VwTmFtZSl7XHJcblx0XHRcdFx0aWYoIXRoaXMuZ3JvdXBbZ3JvdXBOYW1lXSl7XHJcblx0XHRcdFx0XHR0aGlzLmdyb3VwW2dyb3VwTmFtZV0gPSBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5ncm91cFtncm91cE5hbWVdLnB1c2goJChlbCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9yKGNvbnN0IGluZGV4IGluIHRoaXMuZ3JvdXApe1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFxyXG5cclxuXHR9XHJcblxyXG5cdHNob3codHlwZSx0YXJnZXQpe1xyXG5cdFx0dGhpcy5tb2RhbExvYWRlciA9IHRoaXMuX2dldE1vZGFsTG9hZGVyKHR5cGUpO1xyXG5cdFx0dGhpcy5pbml0KHRoaXMubW9kYWxMb2FkZXIpO1xyXG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpcy1tb2RhbC1zaG93Jyk7XHJcblx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKFwibW9kYWxTaG93UmVhZHlcIik7XHJcblx0XHRpZigkKCcubW9kYWwtd2luZG93JykubGVuZ3RoID4gMCl7XHJcblx0XHRcdHRoaXMuY2hhbmdlKHRhcmdldCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdCQoJ2JvZHknKS5hcHBlbmQodGhpcy5fZ2V0Q29udGFpbmVyKHR5cGUpKTtcclxuXHRcdHRoaXMubW9kYWxMb2FkZXIuZ2V0Q29udGVudHModGFyZ2V0LHRoaXMubW9kYWxMb2FkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHR0aGlzLncub24oXCJyZXNpemUuZmNrOm1vZGFsXCIsKGUpPT57XHJcblx0XHRcdHRoaXMubW9kYWwucmVzaXplKHRoaXMudy53aWR0aCgpLHRoaXMudy5oZWlnaHQoKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZih0aGlzLnNldHRpbmdzLmNsb3NlSW5zZXJ0KXtcclxuXHRcdFx0JCgnLm1vZGFsX19ib2R5JykuYXBwZW5kKHRoaXMuc2V0dGluZ3MuY2xvc2UpO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHJcblx0XHQkKCcubW9kYWwtd2luZG93Jykub24oJ2NsaWNrJywoZSk9PntcclxuXHRcdFx0IGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcblx0ICAgICAgICB9XHJcblx0XHR9KTtcclxuXHRcdCQoJy5tb2RhbC1jbG9zZScpLm9uKCdjbGljaycsKGUpPT57XHJcblx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KVxyXG5cclxuXHRcdCQoJy5tb2RhbC13aW5kb3cnKS5jc3MoXCJvcGFjaXR5XCIsMCkuYW5pbWF0ZSh7XHJcblx0XHRcdG9wYWNpdHk6MVxyXG5cdFx0fSw1MDAsKCk9PntcclxuXHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcihcIm1vZGFsU2hvd0NvbXBsZXRlXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVQYWdlcigpO1xyXG5cdFx0XHJcblx0XHQkKGRvY3VtZW50KS5rZXl1cCggKGUpPT4ge1xyXG5cdFx0ICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7XHJcblx0XHQgICAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuXHRcdCAgICB9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9nZXRNb2RhbExvYWRlcih0eXBlKXtcclxuXHRcdGlmKHR5cGUgPT0gXCJhamF4XCIpe1xyXG5cdFx0XHRyZXR1cm4gbmV3IE1vZGFsTG9hZGVyQWpheCh7Y29udGFpbmVyOlwiI3RhcmdldC1tb2RhbFwifSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodHlwZSA9PSBcImRvbVwiKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBNb2RhbExvYWRlckRvbSgpO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0aWYodHlwZSA9PSBcInlvdXR1YmVcIil7XHJcblx0XHRcdHJldHVybiBuZXcgTW9kYWxMb2FkZXJZb3V0dWJlKCk7XHJcblx0XHR9XHRcclxuXHJcblx0XHRpZih0eXBlID09IFwiaW1hZ2VcIil7XHJcblx0XHRcdHJldHVybiBuZXcgTW9kYWxMb2FkZXJJbWFnZSgpO1xyXG5cdFx0fVx0XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoYOaMh+WumuOBleOCjOOBn3R5cGU6JHt0eXBlfeOBrkxvYWRlcuOBr+OBguOCiuOBvuOBm+OCk+OAgmApO1xyXG5cdH1cclxuXHJcblx0bW9kYWxMb2FkSGFuZGxlcihjb250ZW50cyl7XHJcblx0XHRcclxuXHRcdHRoaXMubW9kYWwuc2V0KGNvbnRlbnRzKTtcclxuXHRcdCQoZG9jdW1lbnQpLnRyaWdnZXIoXCJtb2RhbERvbVJlYWR5XCIpO1xyXG5cclxuXHRcdHRoaXMubW9kYWwucmVzaXplKHRoaXMudy53aWR0aCgpLHRoaXMudy5oZWlnaHQoKSk7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGNoYW5nZSh0YXJnZXQpe1xyXG5cdFx0dGhpcy5tb2RhbExvYWRlci5nZXRDb250ZW50cyh0YXJnZXQsdGhpcy5tb2RhbExvYWRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG5cdFx0JChcIi5tb2RhbC13aW5kb3dcIikuc2Nyb2xsVG9wKDApO1xyXG5cdFx0JCgnLm1vZGFsX19ib2R5JykuY3NzKFwib3BhY2l0eVwiLDApLmFuaW1hdGUoe1xyXG5cdFx0XHRvcGFjaXR5OjFcclxuXHRcdH0sNTAwLCgpPT57XHJcblx0XHRcdCQoZG9jdW1lbnQpLnRyaWdnZXIoXCJtb2RhbFNob3dDb21wbGV0ZVwiKTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkudHJpZ2dlcihcIm1vZGFsQ2hhbmdlXCIpO1xyXG5cdH1cclxuXHJcblx0aGlkZSgpe1xyXG5cdFx0JChkb2N1bWVudCkudHJpZ2dlcihcIm1vZGFsSGlkZVJlYWR5XCIpO1xyXG5cdFx0dGhpcy53Lm9mZihcInJlc2l6ZS5mY2s6bW9kYWxcIik7XHJcblx0XHQkKCcubW9kYWwtd2luZG93JykuYW5pbWF0ZSh7XHJcblx0XHRcdG9wYWNpdHk6MFxyXG5cdFx0fSwzMDAsKCk9PntcclxuXHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcihcIm1vZGFsSGlkZUNvbXBsZXRlXCIpO1xyXG5cdFx0XHQkKHRoaXMuc2V0dGluZ3MucGFnZXJUYXJnZXQpLmh0bWwoXCJcIik7XHJcblx0XHRcdCQoJy5tb2RhbC13aW5kb3cnKS5yZW1vdmUoKTtcclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdCQoJy5pcy1tb2RhbC1zaG93JykucmVtb3ZlQ2xhc3MoJ2lzLW1vZGFsLXNob3cnKTtcclxuXHRcdHRoaXMuY3VycmVudEdyb3VwSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jdXJyZW50R3JvdXAgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRfZ2V0Q29udGFpbmVyKHR5cGUpe1xyXG5cdFx0dmFyIG9wdGlvbiA9IFwiXCI7XHJcblx0XHRpZih0eXBlKXtcclxuXHRcdFx0b3B0aW9uID0gXCJtb2RhbC10eXBlLVwiK3R5cGU7XHJcblx0XHR9XHJcblx0XHR2YXIgaHRtbCA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3cgJHtvcHRpb259XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbF9fYm9keVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGVudHNcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBodG1sO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbk1vZGFsQ29udHJvbGxlci5odG1sU3RyaW5nID0gXHJcblxyXG5Nb2RhbENvbnRyb2xsZXIuQUpBWCA9IFwiYWpheFwiO1xyXG5Nb2RhbENvbnRyb2xsZXIuRE9NID0gXCJkb21cIjtcclxuTW9kYWxDb250cm9sbGVyLlNUUklORyA9IFwic3RyaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRyb2xsZXIiXSwibmFtZXMiOlsiTWF0aFV0aWwiLCJFcnJvciIsImRlZ3JlZSIsIk1hdGgiLCJQSSIsInJhZGlhbiIsInZhbHVlIiwiaW5Mb3ciLCJpbkhpZ2giLCJvdXRMb3ciLCJvdXRIaWdoIiwiY2xpcCIsIm91dFZhbHVlIiwiVmVjdG9yIiwieCIsInkiLCJ6IiwidiIsInNxcnQiLCJkb3QiLCJkaXZpZGUiLCJsZW5ndGgiLCJtaW4iLCJtYXgiLCJ0aGV0YSIsImF0YW4yIiwicGhpIiwiYXNpbiIsImEiLCJhY29zIiwibiIsInNsaWNlIiwiYiIsImMiLCJjb3MiLCJzaW4iLCJmcm9tQW5nbGVzIiwicmFuZG9tIiwiZnJhY3Rpb24iLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiYWRkIiwiYW5nbGVUbyIsIk1hdHJpeCIsIm0iLCJBcnJheSIsInByb3RvdHlwZSIsImNvbmNhdCIsImFwcGx5IiwiYXJndW1lbnRzIiwiaW52ZXJzZSIsInRyYW5zcG9zZSIsIm1hdHJpeCIsInJlc3VsdCIsInIiLCJkZXQiLCJpIiwibGVmdCIsInJpZ2h0IiwiaWRlbnRpdHkiLCJkIiwicyIsInQiLCJGQUNFQk9PSyIsIlRXSVRURVIiLCJMSU5LRURJTiIsIkdPT0dMRSIsIkxJTkUiLCJQSU5URVJFU1QiLCJIQVRFQlUiLCJXSU5ET1dfTkFNRSIsIldJTkRPV19PUFRJT05TIiwiU2hhcmUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvcHRpb25zIiwicGFyYW1zIiwic2hhcmVVcmwiLCJvcGVuIiwiZW5jb2RlVVJJIiwiZGVjb2RlVVJJIiwidGV4dCIsImhhc2h0YWdzIiwidGl0bGUiLCJzdW1tYXJ5Iiwic291cmNlIiwibWVkaWEiLCJkZXNjcmlwdGlvbiIsIk1vZGFsTG9hZGVyIiwidGFyZ2V0IiwiY2FsbGJhY2siLCJfbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJNb2RhbExvYWRlckRvbSIsImNvbnRlbnRzIiwiJCIsImh0bWwiLCJNb2RhbExvYWRlckFqYXgiLCJhamF4IiwidHlwZSIsImRhdGFUeXBlIiwiZG9uZSIsImRhdGEiLCJhcHBlbmQiLCJmaW5kIiwiY29udGFpbmVyIiwiX2xvYWRDb21wbGV0ZSIsImZhaWwiLCJhbHdheXMiLCJNb2RhbExvYWRlckltYWdlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJ1bmRlZmluZWQiLCJzcmMiLCJNb2RhbExvYWRlcllvdXR1YmUiLCJNb2RhbFZpZXciLCJ3IiwiYm9keSIsImgiLCJpc092ZXJmbG93SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibW9kYWxUcmlnZ2VyIiwiTW9kYWxDb250cm9sbGVyIiwiZGVmYXVsdHMiLCJwYWdlclRhcmdldCIsImNsb3NlIiwiY2xvc2VJbnNlcnQiLCJzZXR0aW5ncyIsImV4dGVuZCIsImh0bWxTdHJpbmciLCJtb2RhbCIsImdyb3VwIiwiY3VycmVudEdyb3VwSW5kZXgiLCJjdXJyZW50R3JvdXAiLCJpbml0R3JvdXAiLCJkb2N1bWVudCIsIm9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJpc05leHQiLCJpc1ByZXYiLCJOdW1iZXIiLCJ1cGRhdGVQYWdlciIsIm9iaiIsInNob3ciLCJncm91cDIiLCJwYWdpbmcyIiwiaXMiLCJtb2RhbExvYWRlciIsImVhY2giLCJpbmRleCIsImVsIiwicGFyZW50cyIsImdyb3VwTmFtZSIsInB1c2giLCJfZ2V0TW9kYWxMb2FkZXIiLCJpbml0IiwidHJpZ2dlciIsImNoYW5nZSIsIl9nZXRDb250YWluZXIiLCJnZXRDb250ZW50cyIsIm1vZGFsTG9hZEhhbmRsZXIiLCJiaW5kIiwicmVzaXplIiwid2lkdGgiLCJoaWRlIiwiY3NzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJjcmVhdGVQYWdlciIsImtleXVwIiwia2V5Q29kZSIsInNldCIsInNjcm9sbFRvcCIsIm9mZiIsInJlbW92ZSIsIm9wdGlvbiIsIkFKQVgiLCJET00iLCJTVFJJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFNQTs7O0VBQ0osc0JBQWM7RUFBQTs7RUFDWixVQUFNLElBQUlDLEtBQUosQ0FBVSwwQkFBVixDQUFOO0VBQ0Q7Ozs7K0JBQ2VDLFFBQVE7RUFDdEIsYUFBT0EsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEVBQWQsR0FBbUIsR0FBMUI7RUFDRDs7OytCQUNlQyxRQUFPO0VBQ3RCLGFBQU9BLE1BQU0sR0FBRyxHQUFULEdB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LENBQUMsQ0FBQyxDQUFELENBQUYsR0FBTUEsQ0FBQyxDQUFDLEVBQUQsQ0FBUCxHQUFZQSxDQUFDLENBQUMsRUFBRCxDQUFiLEdBQW9CQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBaEMsR0FBdUNBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFsRCxHQUF5REEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxFQUFELENBQXJFLEdBQTRFQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBdkYsR0FBOEZBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUFqSDtFQUNBVSxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9WLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFYLEdBQWtCQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLENBQUQsQ0FBOUIsR0FBb0NBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUEvQyxHQUFzREEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxDQUFELENBQWxFLEdBQXdFQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBbkYsR0FBMEZBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsQ0FBRCxDQUE3RztFQUNBVSxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBQ1YsQ0FBQyxDQUFDLENBQUQsQ0FBRixHQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQVdBLENBQUMsQ0FBQyxFQUFELENBQVosR0FBbUJBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsQ0FBRCxDQUEvQixHQUFxQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQWhELEdBQXVEQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLENBQUQsQ0FBbEUsR0FBd0VBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFuRixHQUEwRkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxDQUFELENBQTVHO0VBRUFVLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDVixDQUFDLENBQUMsQ0FBRCxDQUFGLEdBQU1BLENBQUMsQ0FBQyxFQUFELENBQVAsR0FBWUEsQ0FBQyxDQUFDLEVBQUQsQ0FBYixHQUFvQkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxFQUFELENBQWhDLEdBQXVDQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBbEQsR0FBeURBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUFyRSxHQUE0RUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQXZGLEdBQThGQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBakg7RUFDQVUsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPVixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBWixHQUFtQkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxFQUFELENBQS9CLEdBQXNDQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBakQsR0FBd0RBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUFwRSxHQUEyRUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQXRGLEdBQTZGQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBaEg7RUFDQVUsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUNWLENBQUMsQ0FBQyxDQUFELENBQUYsR0FBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUFaLEdBQW1CQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FB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LENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsQ0FBRCxDQUFqRSxHQUF1RUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxDQUFELENBQWxGLEdBQXdGQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLENBQUQsQ0FBM0c7RUFFQVUsTUFBQUEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLENBQUNWLENBQUMsQ0FBQyxDQUFELENBQUYsR0FBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUFaLEdBQW1CQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBL0IsR0FBc0NBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFqRCxHQUF3REEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxFQUFELENBQXBFLEdBQTJFQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBdEYsR0FBNkZBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsQ0FBRCxDQUFqSDtFQUNBVSxNQUFBQSxDQUFDLENBQUMsRUFBRCxDQUFELEdBQVFWLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFYLEdBQWtCQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FB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VUFBSUMsQ0FBQyxHQUFHUSxNQUFNLENBQUNSLENBQWY7RUFBQSxVQUFrQlUsQ0FBQyxHQUFHRCxNQUFNLENBQUNULENBQTdCO0VBQ0FVLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT1YsQ0FBQyxDQUFDLENBQUQsQ0FBUjtFQUFhVSxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9WLENBQUMsQ0FBQyxDQUFELENBQVI7RUFBYVUsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPVixDQUFDLENBQUMsQ0FBRCxDQUFSO0VBQWFVLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT1YsQ0FBQyxDQUFDLEVBQUQsQ0FBUjtFQUN2Q1UsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPVixDQUFDLENBQUMsQ0FBRCxDQUFSO0VBQWFVLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT1YsQ0FBQyxDQUFDLENBQUQsQ0FBUjtFQUFhVSxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9WLENBQUMsQ0FBQyxDQUFELENBQVI7RUFBYVUsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPVixDQUFDLENBQUMsRUFBRCxDQUFSO0VBQ3ZDVSxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9WLENBQUMsQ0FBQyxDQUFELENBQVI7RUFBYVUsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPVixDQUFDLENBQUMsQ0FBRCxDQUFSO0VBQWFVLE1BQUFBLENBQUMsQ0FBQyxFQUFELENBQUQsR0FBUVYsQ0FBQyxDQUFDLEVBQUQsQ0FBVDtFQUFlVSxNQUFBQSxDQUFDLENBQUMsRUFBRCxDQUFELEdBQVFWLENBQUMsQ0FBQyxFQUFELENBQVQ7RUFDekNVLE1BQUFBLENBQUMsQ0FBQyxFQUFELENBQUQsR0FBUVYsQ0FBQyxDQUFDLENBQUQsQ0FBVDtFQUFjVSxNQUFBQSxDQUFDLENBQUMsRUFBRCxDQUFELEdBQVFWLENBQUMsQ0FBQyxDQUFELENBQVQ7RUFBY1UsTUFBQUEs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
