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
        closeInsert: false,
        outerClass: ''
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
        $('.modal-window').addClass(this.settings.outerClass).css("opacity", 0).animate({
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

  ModalController.htmlString = "";
  ModalController.AJAX = "ajax";
  ModalController.DOM = "dom";
  ModalController.STRING = "string";

  exports.MathUtil = MathUtil;
  exports.Matrix = Matrix;
  exports.Util = Share;
  exports.ModalController = ModalController;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmNrbGliLnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21hdGgvTWF0aFV0aWwuanMiLCIuLi9zcmMvbWF0aC9WZWN0b3IuanMiLCIuLi9zcmMvbWF0aC9NYXRyaXguanMiLCIuLi9zcmMvdXRpbC9TaGFyZS5qcyIsIi4uL3NyYy92aWV3L21vZGFsL01vZGFsTG9hZGVyLmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxMb2FkZXJEb20uanMiLCIuLi9zcmMvdmlldy9tb2RhbC9Nb2RhbExvYWRlckFqYXguanMiLCIuLi9zcmMvdmlldy9tb2RhbC9Nb2RhbExvYWRlckltYWdlLmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxMb2FkZXJZb3V0dWJlLmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxWaWV3LmpzIiwiLi4vc3JjL3ZpZXcvbW9kYWwvTW9kYWxDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1hdGhVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZG8gbm90IEluc3RhbnRpYXRpb24hISEhJyk7XHJcbiAgfVxyXG4gIHN0YXRpYyB0b1JhZGlhbihkZWdyZWUpIHtcclxuICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gIH1cclxuICBzdGF0aWMgdG9EZWdyZWUocmFkaWFuKXtcclxuICBcdHJldHVybiByYWRpYW4gKiAxODAvTWF0aC5QSTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtYXAodmFsdWUsaW5Mb3c9MC4wLGluSGlnaD0xLjAsb3V0TG93PTAuMCxvdXRIaWdoPTEuMCxjbGlwPXRydWUpe1xyXG4gIFx0Y29uc3Qgb3V0VmFsdWUgPSAodmFsdWUgLSBpbkxvdykgLyAoaW5IaWdoIC0gaW5Mb3cpICogKG91dEhpZ2ggLSBvdXRMb3cpICsgb3V0TG93O1xyXG4gICAgaWYgKCFjbGlwKVxyXG4gICAgXHRyZXR1cm4gb3V0VmFsdWU7XHJcbiAgICBpZiAob3V0VmFsdWUgPCBvdXRMb3cpXHJcbiAgICBcdHJldHVybiBvdXRMb3c7XHJcbiAgICBpZiAob3V0VmFsdWUgPiBvdXRIaWdoKVxyXG4gICAgXHRyZXR1cm4gb3V0SGlnaDtcclxuXHRyZXR1cm4gb3V0VmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRoVXRpbDsgIiwiLy9Ac2VlIGh0dHBzOi8vZXZhbncuZ2l0aHViLmlvL2xpZ2h0Z2wuanMvZG9jcy9zdGF0aWMgaHRtbFxyXG5jbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZWdhdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcclxuICAgIH1cclxuICAgIGFkZCh2KSB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCArIHYueCwgdGhpcy55ICsgdi55LCB0aGlzLnogKyB2LnopO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54ICsgdiwgdGhpcy55ICsgdiwgdGhpcy56ICsgdik7XHJcbiAgICB9XHJcbiAgICBzdWJ0cmFjdCh2KSB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAtIHYueCwgdGhpcy55IC0gdi55LCB0aGlzLnogLSB2LnopO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54IC0gdiwgdGhpcy55IC0gdiwgdGhpcy56IC0gdik7XHJcbiAgICB9XHJcbiAgICBtdWx0aXBseSh2KSB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAqIHYueCwgdGhpcy55ICogdi55LCB0aGlzLnogKiB2LnopO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54ICogdiwgdGhpcy55ICogdiwgdGhpcy56ICogdik7XHJcbiAgICB9XHJcbiAgICBkaXZpZGUodikge1xyXG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgVmVjdG9yKSByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnggLyB2LngsIHRoaXMueSAvIHYueSwgdGhpcy56IC8gdi56KTtcclxuICAgICAgICBlbHNlIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAvIHYsIHRoaXMueSAvIHYsIHRoaXMueiAvIHYpO1xyXG4gICAgfVxyXG4gICAgZXF1YWxzKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ID09IHYueCAmJiB0aGlzLnkgPT0gdi55ICYmIHRoaXMueiA9PSB2Lno7XHJcbiAgICB9XHJcbiAgICBkb3Qodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9XHJcbiAgICBjcm9zcyh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXHJcbiAgICAgICAgICAgIHRoaXMueSAqIHYueiAtIHRoaXMueiAqIHYueSxcclxuICAgICAgICAgICAgdGhpcy56ICogdi54IC0gdGhpcy54ICogdi56LFxyXG4gICAgICAgICAgICB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2LnhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kb3QodGhpcykpO1xyXG4gICAgfVxyXG4gICAgdW5pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUodGhpcy5sZW5ndGgoKSk7XHJcbiAgICB9XHJcbiAgICBtaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWluKHRoaXMueCwgdGhpcy55KSwgdGhpcy56KTtcclxuICAgIH1cclxuICAgIG1heCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5tYXgodGhpcy54LCB0aGlzLnkpLCB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgdG9BbmdsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGhldGE6IE1hdGguYXRhbjIodGhpcy56LCB0aGlzLngpLFxyXG4gICAgICAgICAgICBwaGk6IE1hdGguYXNpbih0aGlzLnkgLyB0aGlzLmxlbmd0aCgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuZ2xlVG8oYSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFjb3ModGhpcy5kb3QoYSkgLyAodGhpcy5sZW5ndGgoKSAqIGEubGVuZ3RoKCkpKTtcclxuICAgIH1cclxuICAgIHRvQXJyYXkobikge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel0uc2xpY2UoMCwgbiB8fCAzKTtcclxuICAgIH1cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfVxyXG4gICAgaW5pdCh4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBuZWdhdGl2ZShhLCBiKSB7XHJcbiAgICAgICAgYi54ID0gLWEueDtcclxuICAgICAgICBiLnkgPSAtYS55O1xyXG4gICAgICAgIGIueiA9IC1hLno7XHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIFZlY3RvcikgeyBjLnggPSBhLnggKyBiLng7XHJcbiAgICAgICAgICAgIGMueSA9IGEueSArIGIueTtcclxuICAgICAgICAgICAgYy56ID0gYS56ICsgYi56OyB9IGVsc2UgeyBjLnggPSBhLnggKyBiO1xyXG4gICAgICAgICAgICBjLnkgPSBhLnkgKyBiO1xyXG4gICAgICAgICAgICBjLnogPSBhLnogKyBiOyB9XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc3VidHJhY3QoYSwgYiwgYykge1xyXG4gICAgICAgIGlmIChiIGluc3RhbmNlb2YgVmVjdG9yKSB7IGMueCA9IGEueCAtIGIueDtcclxuICAgICAgICAgICAgYy55ID0gYS55IC0gYi55O1xyXG4gICAgICAgICAgICBjLnogPSBhLnogLSBiLno7IH0gZWxzZSB7IGMueCA9IGEueCAtIGI7XHJcbiAgICAgICAgICAgIGMueSA9IGEueSAtIGI7XHJcbiAgICAgICAgICAgIGMueiA9IGEueiAtIGI7IH1cclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIHN0YXRpYyBtdWx0aXBseShhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGIgaW5zdGFuY2VvZiBWZWN0b3IpIHsgYy54ID0gYS54ICogYi54O1xyXG4gICAgICAgICAgICBjLnkgPSBhLnkgKiBiLnk7XHJcbiAgICAgICAgICAgIGMueiA9IGEueiAqIGIuejsgfSBlbHNlIHsgYy54ID0gYS54ICogYjtcclxuICAgICAgICAgICAgYy55ID0gYS55ICogYjtcclxuICAgICAgICAgICAgYy56ID0gYS56ICogYjsgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpdmlkZShhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGIgaW5zdGFuY2VvZiBWZWN0b3IpIHsgYy54ID0gYS54IC8gYi54O1xyXG4gICAgICAgICAgICBjLnkgPSBhLnkgLyBiLnk7XHJcbiAgICAgICAgICAgIGMueiA9IGEueiAvIGIuejsgfSBlbHNlIHsgYy54ID0gYS54IC8gYjtcclxuICAgICAgICAgICAgYy55ID0gYS55IC8gYjtcclxuICAgICAgICAgICAgYy56ID0gYS56IC8gYjsgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyb3NzKGEsIGIsIGMpIHtcclxuICAgICAgICBjLnggPSBhLnkgKiBiLnogLSBhLnogKiBiLnk7XHJcbiAgICAgICAgYy55ID0gYS56ICogYi54IC0gYS54ICogYi56O1xyXG4gICAgICAgIGMueiA9IGEueCAqIGIueSAtIGEueSAqIGIueDtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIHN0YXRpYyB1bml0KGEsIGIpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gYS5sZW5ndGgoKTtcclxuICAgICAgICBiLnggPSBhLnggLyBsZW5ndGg7XHJcbiAgICAgICAgYi55ID0gYS55IC8gbGVuZ3RoO1xyXG4gICAgICAgIGIueiA9IGEueiAvIGxlbmd0aDtcclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmcm9tQW5nbGVzKHRoZXRhLCBwaGkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyh0aGV0YSkgKiBNYXRoLmNvcyhwaGkpLCBNYXRoLnNpbihwaGkpLCBNYXRoLnNpbih0aGV0YSkgKiBNYXRoLmNvcyhwaGkpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5kb21EaXJlY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gVmVjdG9yLmZyb21BbmdsZXMoTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyLCBNYXRoLmFzaW4oTWF0aC5yYW5kb20oKSAqIDIgLSAxKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWluKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLm1pbihhLngsIGIueCksIE1hdGgubWluKGEueSwgYi55KSwgTWF0aC5taW4oYS56LCBiLnopKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBtYXgoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGgubWF4KGEueCwgYi54KSwgTWF0aC5tYXgoYS55LCBiLnkpLCBNYXRoLm1heChhLnosIGIueikpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGxlcnAoYSwgYiwgZnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gYi5zdWJ0cmFjdChhKS5tdWx0aXBseShmcmFjdGlvbikuYWRkKGEpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZyb21BcnJheShhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYVswXSwgYVsxXSwgYVsyXSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYW5nbGVCZXR3ZWVuKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5hbmdsZVRvKGIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcclxuXHJcblxyXG4iLCIvL0BzZWUgaHR0cHM6Ly9ldmFudy5naXRodWIuaW8vbGlnaHRnbC5qcy9kb2NzL21hdHJpeC5odG1sXHJcblxyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJztcclxuY2xhc3MgTWF0cml4IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBtID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcclxuICAgIGlmKG0ubGVuZ3RoICE9IDE2ICYmIG0ubGVuZ3RoICE9IDApe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLlvJXmlbDjgavjga8xNuOBruaVsOWtl+OCkuWFpeOCjOOCi+OBi+OAgeS9leOCguWFpeOCjOOBquOBhOOBp1wiKTtcclxuICAgIH1cclxuICAgIGlmICghbS5sZW5ndGgpIHtcclxuICAgICAgbSA9IFtcclxuICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLm0gPSBtO1xyXG4gIH1cclxuICBcclxuICBpbnZlcnNlKCl7XHJcbiAgICByZXR1cm4gTWF0cml4LmludmVyc2UodGhpcywgbmV3IE1hdHJpeCgpKTtcclxuICB9XHJcblxyXG4gIHRyYW5zcG9zZSgpe1xyXG4gICAgcmV0dXJuIE1hdHJpeC50cmFuc3Bvc2UodGhpcywgbmV3IE1hdHJpeCgpKTtcclxuICB9XHJcblxyXG4gIG11bHRpcGx5KG1hdHJpeCl7XHJcbiAgICByZXR1cm4gTWF0cml4Lm11bHRpcGx5KHRoaXMsIG1hdHJpeCwgbmV3IE1hdHJpeCgpKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVBvaW50KHYpe1xyXG4gICAgdmFyIG0gPSB0aGlzLm07XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcihcclxuICAgICAgbVswXSAqIHYueCArIG1bMV0gKiB2LnkgKyBtWzJdICogdi56ICsgbVszXSxcclxuICAgICAgbVs0XSAqIHYueCArIG1bNV0gKiB2LnkgKyBtWzZdICogdi56ICsgbVs3XSxcclxuICAgICAgbVs4XSAqIHYueCArIG1bOV0gKiB2LnkgKyBtWzEwXSAqIHYueiArIG1bMTFdXHJcbiAgICApLmRpdmlkZShtWzEyXSAqIHYueCArIG1bMTNdICogdi55ICsgbVsxNF0gKiB2LnogKyBtWzE1XSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1WZWN0b3Iodil7XHJcbiAgICB2YXIgbSA9IHRoaXMubTtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yKFxyXG4gICAgICBtWzBdICogdi54ICsgbVsxXSAqIHYueSArIG1bMl0gKiB2LnosXHJcbiAgICAgIG1bNF0gKiB2LnggKyBtWzVdICogdi55ICsgbVs2XSAqIHYueixcclxuICAgICAgbVs4XSAqIHYueCArIG1bOV0gKiB2LnkgKyBtWzEwXSAqIHYuelxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbnZlcnNlKG1hdHJpeCxyZXN1bHQpe1xyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IG5ldyBNYXRyaXgoKTtcclxuICAgIHZhciBtID0gbWF0cml4Lm0sIHIgPSByZXN1bHQubTtcclxuICAgIHJbMF0gPSBtWzVdKm1bMTBdKm1bMTVdIC0gbVs1XSptWzE0XSptWzExXSAtIG1bNl0qbVs5XSptWzE1XSArIG1bNl0qbVsxM10qbVsxMV0gKyBtWzddKm1bOV0qbVsxNF0gLSBtWzddKm1bMTNdKm1bMTBdO1xyXG4gICAgclsxXSA9IC1tWzFdKm1bMTBdKm1bMTVdICsgbVsxXSptWzE0XSptWzExXSArIG1bMl0qbVs5XSptWzE1XSAtIG1bMl0qbVsxM10qbVsxMV0gLSBtWzNdKm1bOV0qbVsxNF0gKyBtWzNdKm1bMTNdKm1bMTBdO1xyXG4gICAgclsyXSA9IG1bMV0qbVs2XSptWzE1XSAtIG1bMV0qbVsxNF0qbVs3XSAtIG1bMl0qbVs1XSptWzE1XSArIG1bMl0qbVsxM10qbVs3XSArIG1bM10qbVs1XSptWzE0XSAtIG1bM10qbVsxM10qbVs2XTtcclxuICAgIHJbM10gPSAtbVsxXSptWzZdKm1bMTFdICsgbVsxXSptWzEwXSptWzddICsgbVsyXSptWzVdKm1bMTFdIC0gbVsyXSptWzldKm1bN10gLSBtWzNdKm1bNV0qbVsxMF0gKyBtWzNdKm1bOV0qbVs2XTtcclxuXHJcbiAgICByWzRdID0gLW1bNF0qbVsxMF0qbVsxNV0gKyBtWzRdKm1bMTRdKm1bMTFdICsgbVs2XSptWzhdKm1bMTVdIC0gbVs2XSptWzEyXSptWzExXSAtIG1bN10qbVs4XSptWzE0XSArIG1bN10qbVsxMl0qbVsxMF07XHJcbiAgICByWzVdID0gbVswXSptWzEwXSptWzE1XSAtIG1bMF0qbVsxNF0qbVsxMV0gLSBtWzJdKm1bOF0qbVsxNV0gKyBtWzJdKm1bMTJdKm1bMTFdICsgbVszXSptWzhdKm1bMTRdIC0gbVszXSptWzEyXSptWzEwXTtcclxuICAgIHJbNl0gPSAtbVswXSptWzZdKm1bMTVdICsgbVswXSptWzE0XSptWzddICsgbVsyXSptWzRdKm1bMTVdIC0gbVsyXSptWzEyXSptWzddIC0gbVszXSptWzRdKm1bMTRdICsgbVszXSptWzEyXSptWzZdO1xyXG4gICAgcls3XSA9IG1bMF0qbVs2XSptWzExXSAtIG1bMF0qbVsxMF0qbVs3XSAtIG1bMl0qbVs0XSptWzExXSArIG1bMl0qbVs4XSptWzddICsgbVszXSptWzRdKm1bMTBdIC0gbVszXSptWzhdKm1bNl07XHJcblxyXG4gICAgcls4XSA9IG1bNF0qbVs5XSptWzE1XSAtIG1bNF0qbVsxM10qbVsxMV0gLSBtWzVdKm1bOF0qbVsxNV0gKyBtWzVdKm1bMTJdKm1bMTFdICsgbVs3XSptWzhdKm1bMTNdIC0gbVs3XSptWzEyXSptWzldO1xyXG4gICAgcls5XSA9IC1tWzBdKm1bOV0qbVsxNV0gKyBtWzBdKm1bMTNdKm1bMTFdICsgbVsxXSptWzhdKm1bMTVdIC0gbVsxXSptWzEyXSptWzExXSAtIG1bM10qbVs4XSptWzEzXSArIG1bM10qbVsxMl0qbVs5XTtcclxuICAgIHJbMTBdID0gbVswXSptWzVdKm1bMTVdIC0gbVswXSptWzEzXSptWzddIC0gbVsxXSptWzRdKm1bMTVdICsgbVsxXSptWzEyXSptWzddICsgbVszXSptWzRdKm1bMTNdIC0gbVszXSptWzEyXSptWzVdO1xyXG4gICAgclsxMV0gPSAtbVswXSptWzVdKm1bMTFdICsgbVswXSptWzldKm1bN10gKyBtWzFdKm1bNF0qbVsxMV0gLSBtWzFdKm1bOF0qbVs3XSAtIG1bM10qbVs0XSptWzldICsgbVszXSptWzhdKm1bNV07XHJcblxyXG4gICAgclsxMl0gPSAtbVs0XSptWzldKm1bMTRdICsgbVs0XSptWzEzXSptWzEwXSArIG1bNV0qbVs4XSptWzE0XSAtIG1bNV0qbVsxMl0qbVsxMF0gLSBtWzZdKm1bOF0qbVsxM10gKyBtWzZdKm1bMTJdKm1bOV07XHJcbiAgICByWzEzXSA9IG1bMF0qbVs5XSptWzE0XSAtIG1bMF0qbVsxM10qbVsxMF0gLSBtWzFdKm1bOF0qbVsxNF0gKyBtWzFdKm1bMTJdKm1bMTBdICsgbVsyXSptWzhdKm1bMTNdIC0gbVsyXSptWzEyXSptWzldO1xyXG4gICAgclsxNF0gPSAtbVswXSptWzVdKm1bMTRdICsgbVswXSptWzEzXSptWzZdICsgbVsxXSptWzRdKm1bMTRdIC0gbVsxXSptWzEyXSptWzZdIC0gbVsyXSptWzRdKm1bMTNdICsgbVsyXSptWzEyXSptWzVdO1xyXG4gICAgclsxNV0gPSBtWzBdKm1bNV0qbVsxMF0gLSBtWzBdKm1bOV0qbVs2XSAtIG1bMV0qbVs0XSptWzEwXSArIG1bMV0qbVs4XSptWzZdICsgbVsyXSptWzRdKm1bOV0gLSBtWzJdKm1bOF0qbVs1XTtcclxuXHJcbiAgICB2YXIgZGV0ID0gbVswXSpyWzBdICsgbVsxXSpyWzRdICsgbVsyXSpyWzhdICsgbVszXSpyWzEyXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykgcltpXSAvPSBkZXQ7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRyYW5zcG9zZShtYXRyaXgscmVzdWx0KXtcclxuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBuZXcgTWF0cml4KCk7XHJcbiAgICB2YXIgbSA9IG1hdHJpeC5tLCByID0gcmVzdWx0Lm07XHJcbiAgICByWzBdID0gbVswXTsgclsxXSA9IG1bNF07IHJbMl0gPSBtWzhdOyByWzNdID0gbVsxMl07XHJcbiAgICByWzRdID0gbVsxXTsgcls1XSA9IG1bNV07IHJbNl0gPSBtWzldOyByWzddID0gbVsxM107XHJcbiAgICByWzhdID0gbVsyXTsgcls5XSA9IG1bNl07IHJbMTBdID0gbVsxMF07IHJbMTFdID0gbVsxNF07XHJcbiAgICByWzEyXSA9IG1bM107IHJbMTNdID0gbVs3XTsgclsxNF0gPSBtWzExXTsgclsxNV0gPSBtWzE1XTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbXVsdGlwbHkobGVmdCwgcmlnaHQsIHJlc3VsdCkge1xyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IG5ldyBNYXRyaXgoKTtcclxuICAgIHZhciBhID0gbGVmdC5tLCBiID0gcmlnaHQubSwgciA9IHJlc3VsdC5tO1xyXG5cclxuICAgIHJbMF0gPSBhWzBdICogYlswXSArIGFbMV0gKiBiWzRdICsgYVsyXSAqIGJbOF0gKyBhWzNdICogYlsxMl07XHJcbiAgICByWzFdID0gYVswXSAqIGJbMV0gKyBhWzFdICogYls1XSArIGFbMl0gKiBiWzldICsgYVszXSAqIGJbMTNdO1xyXG4gICAgclsyXSA9IGFbMF0gKiBiWzJdICsgYVsxXSAqIGJbNl0gKyBhWzJdICogYlsxMF0gKyBhWzNdICogYlsxNF07XHJcbiAgICByWzNdID0gYVswXSAqIGJbM10gKyBhWzFdICogYls3XSArIGFbMl0gKiBiWzExXSArIGFbM10gKiBiWzE1XTtcclxuXHJcbiAgICByWzRdID0gYVs0XSAqIGJbMF0gKyBhWzVdICogYls0XSArIGFbNl0gKiBiWzhdICsgYVs3XSAqIGJbMTJdO1xyXG4gICAgcls1XSA9IGFbNF0gKiBiWzFdICsgYVs1XSAqIGJbNV0gKyBhWzZdICogYls5XSArIGFbN10gKiBiWzEzXTtcclxuICAgIHJbNl0gPSBhWzRdICogYlsyXSArIGFbNV0gKiBiWzZdICsgYVs2XSAqIGJbMTBdICsgYVs3XSAqIGJbMTRdO1xyXG4gICAgcls3XSA9IGFbNF0gKiBiWzNdICsgYVs1XSAqIGJbN10gKyBhWzZdICogYlsxMV0gKyBhWzddICogYlsxNV07XHJcblxyXG4gICAgcls4XSA9IGFbOF0gKiBiWzBdICsgYVs5XSAqIGJbNF0gKyBhWzEwXSAqIGJbOF0gKyBhWzExXSAqIGJbMTJdO1xyXG4gICAgcls5XSA9IGFbOF0gKiBiWzFdICsgYVs5XSAqIGJbNV0gKyBhWzEwXSAqIGJbOV0gKyBhWzExXSAqIGJbMTNdO1xyXG4gICAgclsxMF0gPSBhWzhdICogYlsyXSArIGFbOV0gKiBiWzZdICsgYVsxMF0gKiBiWzEwXSArIGFbMTFdICogYlsxNF07XHJcbiAgICByWzExXSA9IGFbOF0gKiBiWzNdICsgYVs5XSAqIGJbN10gKyBhWzEwXSAqIGJbMTFdICsgYVsxMV0gKiBiWzE1XTtcclxuXHJcbiAgICByWzEyXSA9IGFbMTJdICogYlswXSArIGFbMTNdICogYls0XSArIGFbMTRdICogYls4XSArIGFbMTVdICogYlsxMl07XHJcbiAgICByWzEzXSA9IGFbMTJdICogYlsxXSArIGFbMTNdICogYls1XSArIGFbMTRdICogYls5XSArIGFbMTVdICogYlsxM107XHJcbiAgICByWzE0XSA9IGFbMTJdICogYlsyXSArIGFbMTNdICogYls2XSArIGFbMTRdICogYlsxMF0gKyBhWzE1XSAqIGJbMTRdO1xyXG4gICAgclsxNV0gPSBhWzEyXSAqIGJbM10gKyBhWzEzXSAqIGJbN10gKyBhWzE0XSAqIGJbMTFdICsgYVsxNV0gKiBiWzE1XTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpZGVudGl0eShyZXN1bHQpIHtcclxuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBuZXcgTWF0cml4KCk7XHJcbiAgICB2YXIgbSA9IHJlc3VsdC5tO1xyXG4gICAgbVswXSA9IG1bNV0gPSBtWzEwXSA9IG1bMTVdID0gMTtcclxuICAgIG1bMV0gPSBtWzJdID0gbVszXSA9IG1bNF0gPSBtWzZdID0gbVs3XSA9IG1bOF0gPSBtWzldID0gbVsxMV0gPSBtWzEyXSA9IG1bMTNdID0gbVsxNF0gPSAwO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgc2NhbGUoeCwgeSwgeiwgcmVzdWx0KSB7XHJcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgbmV3IE1hdHJpeCgpO1xyXG4gICAgdmFyIG0gPSByZXN1bHQubTtcclxuXHJcbiAgICBtWzBdID0geDtcclxuICAgIG1bMV0gPSAwO1xyXG4gICAgbVsyXSA9IDA7XHJcbiAgICBtWzNdID0gMDtcclxuXHJcbiAgICBtWzRdID0gMDtcclxuICAgIG1bNV0gPSB5O1xyXG4gICAgbVs2XSA9IDA7XHJcbiAgICBtWzddID0gMDtcclxuXHJcbiAgICBtWzhdID0gMDtcclxuICAgIG1bOV0gPSAwO1xyXG4gICAgbVsxMF0gPSB6O1xyXG4gICAgbVsxMV0gPSAwO1xyXG5cclxuICAgIG1bMTJdID0gMDtcclxuICAgIG1bMTNdID0gMDtcclxuICAgIG1bMTRdID0gMDtcclxuICAgIG1bMTVdID0gMTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyB0cmFuc2xhdGUoeCwgeSwgeiwgcmVzdWx0KSB7XHJcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgbmV3IE1hdHJpeCgpO1xyXG4gICAgdmFyIG0gPSByZXN1bHQubTtcclxuXHJcbiAgICBtWzBdID0gMTtcclxuICAgIG1bMV0gPSAwO1xyXG4gICAgbVsyXSA9IDA7XHJcbiAgICBtWzNdID0geDtcclxuXHJcbiAgICBtWzRdID0gMDtcclxuICAgIG1bNV0gPSAxO1xyXG4gICAgbVs2XSA9IDA7XHJcbiAgICBtWzddID0geTtcclxuXHJcbiAgICBtWzhdID0gMDtcclxuICAgIG1bOV0gPSAwO1xyXG4gICAgbVsxMF0gPSAxO1xyXG4gICAgbVsxMV0gPSB6O1xyXG5cclxuICAgIG1bMTJdID0gMDtcclxuICAgIG1bMTNdID0gMDtcclxuICAgIG1bMTRdID0gMDtcclxuICAgIG1bMTVdID0gMTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyByb3RhdGUoYSwgeCwgeSwgeiwgcmVzdWx0KSB7XHJcbiAgICBpZiAoIWEgfHwgKCF4ICYmICF5ICYmICF6KSkge1xyXG4gICAgICByZXR1cm4gTWF0cml4LmlkZW50aXR5KHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IG5ldyBNYXRyaXgoKTtcclxuICAgIHZhciBtID0gcmVzdWx0Lm07XHJcblxyXG4gICAgdmFyIGQgPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcclxuICAgIGEgKj0gTWF0aC5QSSAvIDE4MDsgeCAvPSBkOyB5IC89IGQ7IHogLz0gZDtcclxuICAgIHZhciBjID0gTWF0aC5jb3MoYSksIHMgPSBNYXRoLnNpbihhKSwgdCA9IDEgLSBjO1xyXG5cclxuICAgIG1bMF0gPSB4ICogeCAqIHQgKyBjO1xyXG4gICAgbVsxXSA9IHggKiB5ICogdCAtIHogKiBzO1xyXG4gICAgbVsyXSA9IHggKiB6ICogdCArIHkgKiBzO1xyXG4gICAgbVszXSA9IDA7XHJcblxyXG4gICAgbVs0XSA9IHkgKiB4ICogdCArIHogKiBzO1xyXG4gICAgbVs1XSA9IHkgKiB5ICogdCArIGM7XHJcbiAgICBtWzZdID0geSAqIHogKiB0IC0geCAqIHM7XHJcbiAgICBtWzddID0gMDtcclxuXHJcbiAgICBtWzhdID0geiAqIHggKiB0IC0geSAqIHM7XHJcbiAgICBtWzldID0geiAqIHkgKiB0ICsgeCAqIHM7XHJcbiAgICBtWzEwXSA9IHogKiB6ICogdCArIGM7XHJcbiAgICBtWzExXSA9IDA7XHJcblxyXG4gICAgbVsxMl0gPSAwO1xyXG4gICAgbVsxM10gPSAwO1xyXG4gICAgbVsxNF0gPSAwO1xyXG4gICAgbVsxNV0gPSAxO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDsgICAgIiwiXHJcblxyXG5jb25zdCBGQUNFQk9PSyA9ICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwJztcclxuY29uc3QgVFdJVFRFUiA9ICdodHRwOi8vdHdpdHRlci5jb20vc2hhcmUnO1xyXG5jb25zdCBMSU5LRURJTiA9ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGUnO1xyXG5jb25zdCBHT09HTEUgPSAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmUnO1xyXG5jb25zdCBMSU5FID0gJ2h0dHA6Ly9saW5lLm1lL1IvbXNnL3RleHQvJztcclxuY29uc3QgUElOVEVSRVNUID0gJ2h0dHA6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLyc7XHJcbmNvbnN0IEhBVEVCVSA9ICdodHRwOi8vYi5oYXRlbmEubmUuanAvZW50cnkvJztcclxuXHJcbmNvbnN0IFdJTkRPV19OQU1FID0gXCJTaGFyZVdpbmRvd1wiO1xyXG5jb25zdCBXSU5ET1dfT1BUSU9OUyA9ICd3aWR0aD01NTQsIGhlaWdodD00NzAsIG1lbnViYXI9bm8sIHRvb2xiYXI9bm8sIHNjcm9sbGJhcnM9eWVzJztcclxuXHJcblxyXG5jbGFzcyBTaGFyZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxuICBcclxuICBmYWNlYm9vayhvcHRpb25zKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBjb25zdCB1cmwgPSBwYXJhbXMudXJsIHx8IHRoaXMudXJsO1xyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtGQUNFQk9PS30/dT0ke3VybH1gO1xyXG4gICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGRlY29kZVVSSShzaGFyZVVybCkpLFdJTkRPV19OQU1FLFdJTkRPV19PUFRJT05TKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHR3aXR0ZXIob3B0aW9ucyl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgY29uc3QgdXJsID0gcGFyYW1zLnVybCB8fCB0aGlzLnVybDtcclxuICAgIGNvbnN0IHRleHQgPSBwYXJhbXMudGV4dCB8fCBcInRpdGl0aXRpdGl0XCI7XHJcbiAgICBjb25zdCBoYXNodGFncyA9IHBhcmFtcy5oYXNodGFncyB8fCBcIlwiO1xyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtUV0lUVEVSfT91cmw9JHt1cmx9JnRleHQ9JHt0ZXh0fSZoYXNodGFncz0ke2hhc2h0YWdzfWA7XHJcbiAgICB3aW5kb3cub3BlbihlbmNvZGVVUkkoZGVjb2RlVVJJKHNoYXJlVXJsKSksV0lORE9XX05BTUUsV0lORE9XX09QVElPTlMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ29vZ2xlKG9wdGlvbnMpe1xyXG4gICAgY29uc3QgcGFyYW1zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHVybCA9IHBhcmFtcy51cmwgfHwgdGhpcy51cmw7XHJcbiAgICBjb25zdCBzaGFyZVVybCA9IGAke0dPT0dMRX0/dXJsPSR7dXJsfWA7XHJcbiAgICB3aW5kb3cub3BlbihlbmNvZGVVUkkoZGVjb2RlVVJJKHNoYXJlVXJsKSksV0lORE9XX05BTUUsV0lORE9XX09QVElPTlMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbGlua2VkaW4ob3B0aW9ucyl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgY29uc3QgdXJsID0gcGFyYW1zLnVybCB8fCB0aGlzLnVybDtcclxuICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLnRpdGxlIHx8IFwidGl0aXRpdGl0aXRcIjtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBwYXJhbXMuc3VtbWFyeSB8fCBcIlwiO1xyXG4gICAgY29uc3Qgc291cmNlID0gcGFyYW1zLnNvdXJjZSB8fCBcIlwiO1xyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtMSU5LRURJTn0/bWluaT10cnVlJnVybD0ke3VybH0mdGl0bGU9JHt0aXRsZX0mc3VtbWFyeT0ke3N1bW1hcnl9JnNvdXJjZT0ke3NvdXJjZX1gO1xyXG4gICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGRlY29kZVVSSShzaGFyZVVybCkpLFdJTkRPV19OQU1FLFdJTkRPV19PUFRJT05TKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxpbmUob3B0aW9ucyl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgY29uc3QgdXJsID0gcGFyYW1zLnVybCB8fCB0aGlzLnVybDtcclxuICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLnRpdGxlIHx8IFwidGl0aXRpdGl0aXRcIjtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hhcmVVcmwgPSBgJHtMSU5FfT8ke2VuY29kZVVSSSh0aXRsZSl9JHtlbmNvZGVVUkkodXJsKX1gO1xyXG4gICAgd2luZG93Lm9wZW4oZW5jb2RlVVJJKGRlY29kZVVSSShzaGFyZVVybCkpLFdJTkRPV19OQU1FLFdJTkRPV19PUFRJT05TKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBpbnRlcmVzdChvcHRpb25zKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBjb25zdCB1cmwgPSBwYXJhbXMudXJsIHx8IHRoaXMudXJsO1xyXG4gICAgY29uc3QgbWVkaWEgPSBwYXJhbXMubWVkaWEgfHwgXCJ0aXRpdGl0aXRpdFwiO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwYXJhbXMuZGVzY3JpcHRpb24gfHwgXCJ0aXRpdGl0aXRpdFwiO1xyXG4gICAgXHJcbiAgICBjb25zdCBzaGFyZVVybCA9IGAke1BJTlRFUkVTVH0/dXJsPSR7dXJsfSZtZWRpYT0ke21lZGlhfSZkZXNjcmlwdGlvbj0ke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICB3aW5kb3cub3BlbihlbmNvZGVVUkkoZGVjb2RlVVJJKHNoYXJlVXJsKSksV0lORE9XX05BTUUsV0lORE9XX09QVElPTlMpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGF0ZWJ1KG9wdGlvbnMpe1xyXG4gICAgY29uc3QgcGFyYW1zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHVybCA9IHBhcmFtcy51cmwgfHwgdGhpcy51cmw7XHJcbiAgICBjb25zdCBzaGFyZVVybCA9IGAke0hBVEVCVX0/JHt1cmx9YDtcclxuICAgIHdpbmRvdy5vcGVuKGVuY29kZVVSSShkZWNvZGVVUkkoc2hhcmVVcmwpKSxXSU5ET1dfTkFNRSxXSU5ET1dfT1BUSU9OUyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmU7IFxyXG4iLCJjbGFzcyBNb2RhbExvYWRlcntcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPW51bGwpe1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHR9XHJcblx0Z2V0Q29udGVudHModGFyZ2V0LGNhbGxiYWNrKXtcclxuXHRcdHRoaXMuX2xvYWQoKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkKCl7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRcIilcclxuXHR9XHJcblxyXG5cdF9sb2FkQ29tcGxldGUoKXtcclxuXHRcdGNvbnNvbGUubG9nKFwibG9hZENvbXBsZXRlXCIpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGFsTG9hZGVyfSIsImltcG9ydCB7TW9kYWxMb2FkZXJ9IGZyb20gXCIuL01vZGFsTG9hZGVyLmpzXCJcclxuY2xhc3MgTW9kYWxMb2FkZXJEb20gZXh0ZW5kcyBNb2RhbExvYWRlciB7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRlclwiKVxyXG5cdH1cclxuXHRnZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spe1x0XHJcblx0XHRzdXBlci5nZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spO1x0XHJcblx0XHRjb25zdCBjb250ZW50cyA9ICQodGFyZ2V0KS5odG1sKCk7XHJcblx0XHRjYWxsYmFjayhjb250ZW50cyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGFsTG9hZGVyRG9tfSIsImltcG9ydCB7TW9kYWxMb2FkZXJ9IGZyb20gXCIuL01vZGFsTG9hZGVyLmpzXCJcclxuY2xhc3MgTW9kYWxMb2FkZXJBamF4IGV4dGVuZHMgTW9kYWxMb2FkZXIge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cdFx0c3VwZXIob3B0aW9ucyk7XHJcblx0fVxyXG5cdGdldENvbnRlbnRzKHRhcmdldCxjYWxsYmFjayl7XHJcblx0XHRzdXBlci5nZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spO1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiB0YXJnZXQsXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRkYXRhVHlwZTogJ2h0bWwnXHJcblx0XHR9KVxyXG5cdFx0LmRvbmUoKGRhdGEpPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgY29udGVudHMgPSAkKCc8ZGl2PjwvZGl2PicpLmFwcGVuZChkYXRhKS5maW5kKHRoaXMub3B0aW9ucy5jb250YWluZXIpLmh0bWwoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY29udGVudHMpXHJcblx0XHRcdGNhbGxiYWNrKGNvbnRlbnRzKTtcclxuXHRcdFx0dGhpcy5fbG9hZENvbXBsZXRlKCk7XHJcblx0XHR9KVxyXG5cdFx0LmZhaWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSkgXHJcblx0XHQuYWx3YXlzKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge01vZGFsTG9hZGVyQWpheH0iLCJpbXBvcnQge01vZGFsTG9hZGVyfSBmcm9tIFwiLi9Nb2RhbExvYWRlci5qc1wiXHJcbmNsYXNzIE1vZGFsTG9hZGVySW1hZ2UgZXh0ZW5kcyBNb2RhbExvYWRlciB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz1udWxsKXtcclxuXHRcdHN1cGVyKG9wdGlvbnMpO1xyXG5cdH1cclxuXHRnZXRDb250ZW50cyh0YXJnZXQsY2FsbGJhY2spe1xyXG5cdFx0c3VwZXIuZ2V0Q29udGVudHModGFyZ2V0LGNhbGxiYWNrKTtcclxuXHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0aW1hZ2Uub25sb2FkID0gKCk9PntcclxuXHRcdFx0Y2FsbGJhY2soaW1hZ2UpO1xyXG5cdFx0XHR0aGlzLl9sb2FkQ29tcGxldGUoKTtcclxuXHRcdH1cclxuXHRcdGltYWdlLm9uZXJyb3IgPSAoKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIm5vaW1hZ2VcIilcclxuXHRcdFx0Y2FsbGJhY2sodW5kZWZpbmVkKTtcclxuXHRcdFx0dGhpcy5fbG9hZENvbXBsZXRlKCk7XHJcblx0XHR9XHJcblx0XHRpbWFnZS5zcmMgPSB0YXJnZXQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RhbExvYWRlckltYWdlfSIsImltcG9ydCB7TW9kYWxMb2FkZXJ9IGZyb20gXCIuL01vZGFsTG9hZGVyLmpzXCJcclxuY2xhc3MgTW9kYWxMb2FkZXJZb3V0dWJlIGV4dGVuZHMgTW9kYWxMb2FkZXIge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM9bnVsbCl7XHJcblx0XHRzdXBlcihvcHRpb25zKTtcclxuXHR9XHJcblx0Z2V0Q29udGVudHModGFyZ2V0LGNhbGxiYWNrKXtcclxuXHRcdHN1cGVyLmdldENvbnRlbnRzKHRhcmdldCxjYWxsYmFjayk7XHJcblx0XHRjb25zdCBjb250ZW50cyA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbC15b3V0dWJlLWNvbnRhaW5lclwiPlxyXG5cdFx0PGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIiR7dGFyZ2V0fVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0YDtcclxuXHRcdGNvbnNvbGUubG9nKGNvbnRlbnRzKVxyXG5cdFx0Y2FsbGJhY2soY29udGVudHMpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RhbExvYWRlcllvdXR1YmV9IiwiY2xhc3MgTW9kYWxWaWV3e1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHR0aGlzLncgPSAkKHdpbmRvdyk7XHJcblx0fVxyXG5cclxuXHRzZXQoY29udGVudHMpe1xyXG5cdFx0dGhpcy5ib2R5ID0gJCgnLm1vZGFsX19ib2R5Jyk7XHJcblx0XHR0aGlzLmJvZHkuZmluZChcIi5tb2RhbF9fY29udGVudHNcIikuaHRtbChjb250ZW50cyk7XHJcblx0fVxyXG5cdHJlc2l6ZSh3LGgpe1xyXG5cdFx0dGhpcy5pc092ZXJmbG93SGVpZ2h0KClcclxuXHR9XHJcblxyXG5cdGlzT3ZlcmZsb3dIZWlnaHQoKXtcclxuXHRcdGlmKHRoaXMuYm9keS5vdXRlckhlaWdodCgpID4gJCh3aW5kb3cpLmhlaWdodCgpKXtcclxuXHRcdFx0JCgnaHRtbCcpLmFkZENsYXNzKCdpcy1tb2RhbC1vdmVyZmxvdy13aW5kb3cnKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdpcy1tb2RhbC1vdmVyZmxvdy13aW5kb3cnKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtNb2RhbFZpZXd9IiwiaW1wb3J0IHtNb2RhbExvYWRlckRvbX0gZnJvbSAnLi9Nb2RhbExvYWRlckRvbS5qcyc7XHJcbmltcG9ydCB7TW9kYWxMb2FkZXJBamF4fSBmcm9tICcuL01vZGFsTG9hZGVyQWpheC5qcyc7XHJcbmltcG9ydCB7TW9kYWxMb2FkZXJJbWFnZX0gZnJvbSAnLi9Nb2RhbExvYWRlckltYWdlLmpzJztcclxuXHJcbmltcG9ydCB7TW9kYWxMb2FkZXJZb3V0dWJlfSBmcm9tICcuL01vZGFsTG9hZGVyWW91dHViZS5qcyc7XHJcbmltcG9ydCB7TW9kYWxWaWV3fSBmcm9tICcuL01vZGFsVmlldy5qcyc7XHJcbnZhciBtb2RhbFRyaWdnZXIgPSAnLm1vZGFsLW9wZW4nO1xyXG5cclxuXHJcbmNsYXNzIE1vZGFsQ29udHJvbGxlcntcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuXHRcdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdFx0cGFnZXJUYXJnZXQ6Jy5tb2RhbF9fYm9keScsXHJcblx0XHRcdGNsb3NlOic8YSBjbGFzcz1cIm1vZGFsLWNsb3NlXCI+Q0xPU0U8L2E+JyxcclxuXHRcdFx0Y2xvc2VJbnNlcnQ6ZmFsc2UsXHJcblx0XHRcdG91dGVyQ2xhc3M6JydcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLncgPSAkKHdpbmRvdyk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IE1vZGFsQ29udHJvbGxlci5odG1sU3RyaW5nO1xyXG5cdFx0dGhpcy5tb2RhbCA9IG5ldyBNb2RhbFZpZXcoKTtcclxuXHRcdHRoaXMuZ3JvdXAgPSB7fTtcclxuXHRcdHRoaXMuY3VycmVudEdyb3VwSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jdXJyZW50R3JvdXAgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmluaXRHcm91cCgpO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5tb2RhbC1wYWdlcicsKGUpPT57XHJcblxyXG5cdFx0XHRpZigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgncGFnaW5nJykgPT0gXCJuZXh0XCIpe1xyXG5cdFx0XHRcdGlmKHRoaXMuaXNOZXh0KCkpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleCsrO1x0XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRHcm91cEluZGV4PTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9ZWxzZSBpZigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgncGFnaW5nJykgPT0gXCJwcmV2XCIpe1xyXG5cdFx0XHRcdGlmKHRoaXMuaXNQcmV2KCkpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleC0tO1x0XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRHcm91cEluZGV4PXRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50R3JvdXBdLmxlbmd0aC0xO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleCA9IE51bWJlcigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgncGFnaW5nJykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlUGFnZXIoKTtcclxuXHRcdFx0dmFyIG9iaiA9IHRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50R3JvdXBdW3RoaXMuY3VycmVudEdyb3VwSW5kZXhdO1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gb2JqLmRhdGEoXCJ0YXJnZXRcIik7XHJcblx0XHRcdGxldCB0eXBlID0gb2JqLmRhdGEoXCJtb2RhbHR5cGVcIik7XHJcblx0XHRcdHRoaXMuc2hvdyh0eXBlLHRhcmdldCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsbW9kYWxUcmlnZ2VyLChlKT0+e1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJ0YXJnZXRcIik7XHJcblx0XHRcdGxldCB0eXBlID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJtb2RhbHR5cGVcIik7XHJcblx0XHRcdGxldCBncm91cDIgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YShcImdyb3VwXCIpO1xyXG5cdFx0XHRsZXQgcGFnaW5nMiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKFwicGFnaW5nXCIpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDI7XHJcblxyXG5cdFx0XHRpZih0aGlzLmdyb3VwW2dyb3VwMl0pe1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ncm91cFtncm91cDJdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZigkKGUuY3VycmVudFRhcmdldCkuaXModGhpcy5ncm91cFtncm91cDJdW2ldKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEdyb3VwSW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2hvdyh0eXBlLHRhcmdldCk7XHJcblx0XHRcdHRoaXMudXBkYXRlUGFnZXIoKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSlcclxuXHJcblx0XHJcblx0fVxyXG5cclxuXHRzZXRTZXR0aW5nKG9wdGlvbnMpe1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLnNldHRpbmdzLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdGlzTmV4dCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50R3JvdXBdLmxlbmd0aCA+IHRoaXMuY3VycmVudEdyb3VwSW5kZXgrMTtcclxuXHR9XHJcblxyXG5cdGlzUHJldigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEdyb3VwSW5kZXgtMSA+PSAwO1xyXG5cdH1cclxuXHJcblx0aW5pdChtb2RhbExvYWRlcil7XHJcblx0XHR0aGlzLm1vZGFsTG9hZGVyID0gbW9kYWxMb2FkZXI7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYWdlcigpe1xyXG5cdFx0aWYoIXRoaXMuY3VycmVudEdyb3VwKSByZXR1cm47XHJcblxyXG5cdFx0dmFyIGh0bWwgPSBcIlwiO1xyXG5cdFx0aHRtbCArPSAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLXBhZ2VyIG1vZGFsLXBhZ2VyLXByZXZcIiBkYXRhLXBhZ2luZz1cInByZXZcIj5QUkVWPC9hPic7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdyb3VwW3RoaXMuY3VycmVudEdyb3VwXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRodG1sICs9ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtcGFnZXJcIiBkYXRhLXBhZ2luZz1cIicraSsnXCI+JytpKyc8L2E+JztcclxuXHRcdH1cclxuXHRcdGh0bWwgKz0gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1wYWdlciBtb2RhbC1wYWdlci1uZXh0XCIgZGF0YS1wYWdpbmc9XCJuZXh0XCI+TkVYVDwvYT4nO1xyXG5cdFx0JCh0aGlzLnNldHRpbmdzLnBhZ2VyVGFyZ2V0KS5hcHBlbmQoaHRtbCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYWdlcigpe1xyXG5cdFx0aWYoIXRoaXMuY3VycmVudEdyb3VwKSByZXR1cm47XHJcblx0XHQkKCcubW9kYWwtcGFnZXInKS5yZW1vdmVDbGFzcygnaXMtY3VycmVudCcpO1xyXG5cdFx0JCgnLm1vZGFsLXBhZ2VyW2RhdGEtcGFnaW5nPScrdGhpcy5jdXJyZW50R3JvdXBJbmRleCsnXScpLmFkZENsYXNzKCdpcy1jdXJyZW50Jyk7XHJcblx0fVxyXG5cclxuXHRpbml0R3JvdXAoKXtcclxuXHRcdFxyXG5cdFx0JChtb2RhbFRyaWdnZXIpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9tb2RhbOWGheOBruasoeOBuOaIu+OCi+OBruWgtOWQiOOBr+WHpueQhuOCkuOCueOCreODg+ODl1xyXG5cdFx0XHRpZigkKGVsKS5wYXJlbnRzKFwiLm1vZGFsLWNvbnRlbnRzXCIpLmxlbmd0aCA+IDApIHJldHVybjtcclxuXHRcdFx0dmFyIGdyb3VwTmFtZSA9ICQoZWwpLmRhdGEoXCJncm91cFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKGdyb3VwTmFtZSl7XHJcblx0XHRcdFx0aWYoIXRoaXMuZ3JvdXBbZ3JvdXBOYW1lXSl7XHJcblx0XHRcdFx0XHR0aGlzLmdyb3VwW2dyb3VwTmFtZV0gPSBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5ncm91cFtncm91cE5hbWVdLnB1c2goJChlbCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9yKGNvbnN0IGluZGV4IGluIHRoaXMuZ3JvdXApe1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFxyXG5cclxuXHR9XHJcblxyXG5cdHNob3codHlwZSx0YXJnZXQpe1xyXG5cdFx0dGhpcy5tb2RhbExvYWRlciA9IHRoaXMuX2dldE1vZGFsTG9hZGVyKHR5cGUpO1xyXG5cdFx0dGhpcy5pbml0KHRoaXMubW9kYWxMb2FkZXIpO1xyXG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpcy1tb2RhbC1zaG93Jyk7XHJcblx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKFwibW9kYWxTaG93UmVhZHlcIik7XHJcblx0XHRpZigkKCcubW9kYWwtd2luZG93JykubGVuZ3RoID4gMCl7XHJcblx0XHRcdHRoaXMuY2hhbmdlKHRhcmdldCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdCQoJ2JvZHknKS5hcHBlbmQodGhpcy5fZ2V0Q29udGFpbmVyKHR5cGUpKTtcclxuXHRcdHRoaXMubW9kYWxMb2FkZXIuZ2V0Q29udGVudHModGFyZ2V0LHRoaXMubW9kYWxMb2FkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHR0aGlzLncub24oXCJyZXNpemUuZmNrOm1vZGFsXCIsKGUpPT57XHJcblx0XHRcdHRoaXMubW9kYWwucmVzaXplKHRoaXMudy53aWR0aCgpLHRoaXMudy5oZWlnaHQoKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZih0aGlzLnNldHRpbmdzLmNsb3NlSW5zZXJ0KXtcclxuXHRcdFx0JCgnLm1vZGFsX19ib2R5JykuYXBwZW5kKHRoaXMuc2V0dGluZ3MuY2xvc2UpO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHJcblx0XHQkKCcubW9kYWwtd2luZG93Jykub24oJ2NsaWNrJywoZSk9PntcclxuXHRcdFx0IGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcblx0ICAgICAgICB9XHJcblx0XHR9KTtcclxuXHRcdCQoJy5tb2RhbC1jbG9zZScpLm9uKCdjbGljaycsKGUpPT57XHJcblx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KVxyXG5cclxuXHRcdCQoJy5tb2RhbC13aW5kb3cnKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLm91dGVyQ2xhc3MpLmNzcyhcIm9wYWNpdHlcIiwwKS5hbmltYXRlKHtcclxuXHRcdFx0b3BhY2l0eToxXHJcblx0XHR9LDUwMCwoKT0+e1xyXG5cdFx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKFwibW9kYWxTaG93Q29tcGxldGVcIik7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZVBhZ2VyKCk7XHJcblx0XHRcclxuXHRcdCQoZG9jdW1lbnQpLmtleXVwKCAoZSk9PiB7XHJcblx0XHQgICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcclxuXHRcdCAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG5cdFx0ICAgIH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2dldE1vZGFsTG9hZGVyKHR5cGUpe1xyXG5cdFx0aWYodHlwZSA9PSBcImFqYXhcIil7XHJcblx0XHRcdHJldHVybiBuZXcgTW9kYWxMb2FkZXJBamF4KHtjb250YWluZXI6XCIjdGFyZ2V0LW1vZGFsXCJ9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0eXBlID09IFwiZG9tXCIpe1xyXG5cdFx0XHRyZXR1cm4gbmV3IE1vZGFsTG9hZGVyRG9tKCk7XHJcblx0XHR9XHJcblx0XHJcblx0XHRpZih0eXBlID09IFwieW91dHViZVwiKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBNb2RhbExvYWRlcllvdXR1YmUoKTtcclxuXHRcdH1cdFxyXG5cclxuXHRcdGlmKHR5cGUgPT0gXCJpbWFnZVwiKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBNb2RhbExvYWRlckltYWdlKCk7XHJcblx0XHR9XHRcclxuXHRcdHRocm93IG5ldyBFcnJvcihg5oyH5a6a44GV44KM44GfdHlwZToke3R5cGV944GuTG9hZGVy44Gv44GC44KK44G+44Gb44KT44CCYCk7XHJcblx0fVxyXG5cclxuXHRtb2RhbExvYWRIYW5kbGVyKGNvbnRlbnRzKXtcclxuXHRcdFxyXG5cdFx0dGhpcy5tb2RhbC5zZXQoY29udGVudHMpO1xyXG5cdFx0JChkb2N1bWVudCkudHJpZ2dlcihcIm1vZGFsRG9tUmVhZHlcIik7XHJcblxyXG5cdFx0dGhpcy5tb2RhbC5yZXNpemUodGhpcy53LndpZHRoKCksdGhpcy53LmhlaWdodCgpKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0Y2hhbmdlKHRhcmdldCl7XHJcblx0XHR0aGlzLm1vZGFsTG9hZGVyLmdldENvbnRlbnRzKHRhcmdldCx0aGlzLm1vZGFsTG9hZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblx0XHQkKFwiLm1vZGFsLXdpbmRvd1wiKS5zY3JvbGxUb3AoMCk7XHJcblx0XHQkKCcubW9kYWxfX2JvZHknKS5jc3MoXCJvcGFjaXR5XCIsMCkuYW5pbWF0ZSh7XHJcblx0XHRcdG9wYWNpdHk6MVxyXG5cdFx0fSw1MDAsKCk9PntcclxuXHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcihcIm1vZGFsU2hvd0NvbXBsZXRlXCIpO1xyXG5cdFx0fSk7XHJcblx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKFwibW9kYWxDaGFuZ2VcIik7XHJcblx0fVxyXG5cclxuXHRoaWRlKCl7XHJcblx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKFwibW9kYWxIaWRlUmVhZHlcIik7XHJcblx0XHR0aGlzLncub2ZmKFwicmVzaXplLmZjazptb2RhbFwiKTtcclxuXHRcdCQoJy5tb2RhbC13aW5kb3cnKS5hbmltYXRlKHtcclxuXHRcdFx0b3BhY2l0eTowXHJcblx0XHR9LDMwMCwoKT0+e1xyXG5cdFx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKFwibW9kYWxIaWRlQ29tcGxldGVcIik7XHJcblx0XHRcdCQodGhpcy5zZXR0aW5ncy5wYWdlclRhcmdldCkuaHRtbChcIlwiKTtcclxuXHRcdFx0JCgnLm1vZGFsLXdpbmRvdycpLnJlbW92ZSgpO1xyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0JCgnLmlzLW1vZGFsLXNob3cnKS5yZW1vdmVDbGFzcygnaXMtbW9kYWwtc2hvdycpO1xyXG5cdFx0dGhpcy5jdXJyZW50R3JvdXBJbmRleCA9IDA7XHJcblx0XHR0aGlzLmN1cnJlbnRHcm91cCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdF9nZXRDb250YWluZXIodHlwZSl7XHJcblx0XHR2YXIgb3B0aW9uID0gXCJcIjtcclxuXHRcdGlmKHR5cGUpe1xyXG5cdFx0XHRvcHRpb24gPSBcIm1vZGFsLXR5cGUtXCIrdHlwZTtcclxuXHRcdH1cclxuXHRcdHZhciBodG1sID0gYFxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvdyAke29wdGlvbn1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50c1wiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fVxyXG5cclxufVxyXG5cclxuTW9kYWxDb250cm9sbGVyLmh0bWxTdHJpbmcgPSBcIlwiO1xyXG5cclxuTW9kYWxDb250cm9sbGVyLkFKQVggPSBcImFqYXhcIjtcclxuTW9kYWxDb250cm9sbGVyLkRPTSA9IFwiZG9tXCI7XHJcbk1vZGFsQ29udHJvbGxlci5TVFJJTkcgPSBcInN0cmluZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb250cm9sbGVyIl0sIm5hbWVzIjpbIk1hdGhVdGlsIiwiRXJyb3IiLCJkZWdyZWUiLCJNYXRoIiwiUEkiLCJyYWRpYW4iLCJ2YWx1ZSIsImluTG93IiwiaW5IaWdoIiwib3V0TG93Iiwib3V0SGlnaCIsImNsaXAiLCJvdXRWYWx1ZSIsIlZlY3RvciIsIngiLCJ5IiwieiIsInYiLCJzcXJ0IiwiZG90IiwiZGl2aWRlIiwibGVuZ3RoIiwibWluIiwibWF4IiwidGhldGEiLCJhdGFuMiIsInBoaSIsImFzaW4iLCJhIiwiYWNvcyIsIm4iLCJzbGljZSIsImIiLCJjIiwiY29zIiwic2luIiwiZnJvbUFuZ2xlcyIsInJhbmRvbSIsImZyYWN0aW9uIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImFkZCIsImFuZ2xlVG8iLCJNYXRyaXgiLCJtIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjb25jYXQiLCJhcHBseSIsImFyZ3VtZW50cyIsImludmVyc2UiLCJ0cmFuc3Bvc2UiLCJtYXRyaXgiLCJyZXN1bHQiLCJyIiwiZGV0IiwiaSIsImxlZnQiLCJyaWdodCIsImlkZW50aXR5IiwiZCIsInMiLCJ0IiwiRkFDRUJPT0siLCJUV0lUVEVSIiwiTElOS0VESU4iLCJHT09HTEUiLCJMSU5FIiwiUElOVEVSRVNUIiwiSEFURUJVIiwiV0lORE9XX05BTUUiLCJXSU5ET1dfT1BUSU9OUyIsIlNoYXJlIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3B0aW9ucyIsInBhcmFtcyIsInNoYXJlVXJsIiwib3BlbiIsImVuY29kZVVSSSIsImRlY29kZVVSSSIsInRleHQiLCJoYXNodGFncyIsInRpdGxlIiwic3VtbWFyeSIsInNvdXJjZSIsIm1lZGlhIiwiZGVzY3JpcHRpb24iLCJNb2RhbExvYWRlciIsInRhcmdldCIsImNhbGxiYWNrIiwiX2xvYWQiLCJjb25zb2xlIiwibG9nIiwiTW9kYWxMb2FkZXJEb20iLCJjb250ZW50cyIsIiQiLCJodG1sIiwiTW9kYWxMb2FkZXJBamF4IiwiYWpheCIsInR5cGUiLCJkYXRhVHlwZSIsImRvbmUiLCJkYXRhIiwiYXBwZW5kIiwiZmluZCIsImNvbnRhaW5lciIsIl9sb2FkQ29tcGxldGUiLCJmYWlsIiwiYWx3YXlzIiwiTW9kYWxMb2FkZXJJbWFnZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwidW5kZWZpbmVkIiwic3JjIiwiTW9kYWxMb2FkZXJZb3V0dWJlIiwiTW9kYWxWaWV3IiwidyIsImJvZHkiLCJoIiwiaXNPdmVyZmxvd0hlaWdodCIsIm91dGVySGVpZ2h0IiwiaGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm1vZGFsVHJpZ2dlciIsIk1vZGFsQ29udHJvbGxlciIsImRlZmF1bHRzIiwicGFnZXJUYXJnZXQiLCJjbG9zZSIsImNsb3NlSW5zZXJ0Iiwib3V0ZXJDbGFzcyIsInNldHRpbmdzIiwiZXh0ZW5kIiwiaHRtbFN0cmluZyIsIm1vZGFsIiwiZ3JvdXAiLCJjdXJyZW50R3JvdXBJbmRleCIsImN1cnJlbnRHcm91cCIsImluaXRHcm91cCIsImRvY3VtZW50Iiwib24iLCJlIiwiY3VycmVudFRhcmdldCIsImlzTmV4dCIsImlzUHJldiIsIk51bWJlciIsInVwZGF0ZVBhZ2VyIiwib2JqIiwic2hvdyIsImdyb3VwMiIsInBhZ2luZzIiLCJpcyIsIm1vZGFsTG9hZGVyIiwiZWFjaCIsImluZGV4IiwiZWwiLCJwYXJlbnRzIiwiZ3JvdXBOYW1lIiwicHVzaCIsIl9nZXRNb2RhbExvYWRlciIsImluaXQiLCJ0cmlnZ2VyIiwiY2hhbmdlIiwiX2dldENvbnRhaW5lciIsImdldENvbnRlbnRzIiwibW9kYWxMb2FkSGFuZGxlciIsImJpbmQiLCJyZXNpemUiLCJ3aWR0aCIsImhpZGUiLCJjc3MiLCJhbmltYXRlIiwib3BhY2l0eSIsImNyZWF0ZVBhZ2VyIiwia2V5dXAiLCJrZXlDb2RlIiwic2V0Iiwic2Nyb2xsVG9wIiwib2ZmIiwicmVtb3ZlIiwib3B0aW9uIiwiQUpBWCIsIkRPTSIsIlNUUklORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQU1BOzs7RUFDSixzQkFBYztFQUFBOztFQUNaLFVBQU0sSUFBSUMsS0FBSixDQUFVLDBCQUFWLENBQU47RUFDRDs7OzsrQkFDZUMsUUFBUTtFQUN0QixhQUFPQSxNQUFNLEdBQUdD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QVVBLENBQUMsQ0FBQyxDQUFELENBQTNHO0VBRUFVLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT1YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQVgsR0FBa0JBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUE5QixHQUFxQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQWhELEdBQXVEQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBbkUsR0FBMEVBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFyRixHQUE0RkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxDQUFELENBQS9HO0VBQ0FVLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDVixDQUFDLENBQUMsQ0FBRCxDQUFGLEdBQU1BLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBWixHQUFtQkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxFQUFELENBQS9CLEdBQXNDQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBakQsR0FBd0RBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUFwRSxHQUEyRUEsQ0FB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R0FBa0JBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsRUFBRCxDQUE5QixHQUFxQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQWhELEdBQXVEQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBbkUsR0FBMEVBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVQSxDQUFDLENBQUMsRUFBRCxDQUFyRixHQUE0RkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxDQUFELENBQWhIO0VBQ0FVLE1BQUFBLENBQUMsQ0FBQyxFQUFELENBQUQsR0FBUSxDQUFDVixDQUFDLENBQUMsQ0FBRCxDQUFGLEdBQU1BLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBV0EsQ0FBQyxDQUFDLEVBQUQsQ0FBWixHQUFtQkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsRUFBRCxDQUFOLEdBQVdBLENBQUMsQ0FBQyxDQUFELENBQS9CLEdBQXFDQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUEsQ0FBQyxDQUFDLEVBQUQsQ0FBaEQsR0FBdURBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLEVBQUQsQ0FBTixHQUFXQSxDQUFDLENBQUMsQ0FBRCxDQUFuRSxHQUF5RUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFOLEdBQVVBLENBQUMsQ0FBQyxFQUFELENBQXBGLEdBQTJGQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxFQUFELENBQU4sR0FBV0EsQ0FBQyxD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
