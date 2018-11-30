//@see https://evanw.github.io/lightgl.js/docs/matrix.html

import Vector from './Vector'
class Matrix {
  private m = []

  constructor() {
    var m = Array.prototype.concat.apply([], arguments)
    if (m.length != 16 && m.length != 0) {
      throw new Error('引数には16の数字を入れるか、何も入れないで')
    }
    if (!m.length) {
      m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    this.m = m
  }

  inverse() {
    return Matrix.inverse(this, new Matrix())
  }

  transpose() {
    return Matrix.transpose(this, new Matrix())
  }

  multiply(matrix) {
    return Matrix.multiply(this, matrix, new Matrix())
  }

  transformPoint(v) {
    var m = this.m
    return new Vector(
      m[0] * v.x + m[1] * v.y + m[2] * v.z + m[3],
      m[4] * v.x + m[5] * v.y + m[6] * v.z + m[7],
      m[8] * v.x + m[9] * v.y + m[10] * v.z + m[11]
    ).divide(m[12] * v.x + m[13] * v.y + m[14] * v.z + m[15])
  }

  transformVector(v) {
    var m = this.m
    return new Vector(
      m[0] * v.x + m[1] * v.y + m[2] * v.z,
      m[4] * v.x + m[5] * v.y + m[6] * v.z,
      m[8] * v.x + m[9] * v.y + m[10] * v.z
    )
  }

  static inverse(matrix, result) {
    result = result || new Matrix()
    var m = matrix.m,
      r = result.m
    r[0] =
      m[5] * m[10] * m[15] -
      m[5] * m[14] * m[11] -
      m[6] * m[9] * m[15] +
      m[6] * m[13] * m[11] +
      m[7] * m[9] * m[14] -
      m[7] * m[13] * m[10]
    r[1] =
      -m[1] * m[10] * m[15] +
      m[1] * m[14] * m[11] +
      m[2] * m[9] * m[15] -
      m[2] * m[13] * m[11] -
      m[3] * m[9] * m[14] +
      m[3] * m[13] * m[10]
    r[2] =
      m[1] * m[6] * m[15] -
      m[1] * m[14] * m[7] -
      m[2] * m[5] * m[15] +
      m[2] * m[13] * m[7] +
      m[3] * m[5] * m[14] -
      m[3] * m[13] * m[6]
    r[3] =
      -m[1] * m[6] * m[11] +
      m[1] * m[10] * m[7] +
      m[2] * m[5] * m[11] -
      m[2] * m[9] * m[7] -
      m[3] * m[5] * m[10] +
      m[3] * m[9] * m[6]

    r[4] =
      -m[4] * m[10] * m[15] +
      m[4] * m[14] * m[11] +
      m[6] * m[8] * m[15] -
      m[6] * m[12] * m[11] -
      m[7] * m[8] * m[14] +
      m[7] * m[12] * m[10]
    r[5] =
      m[0] * m[10] * m[15] -
      m[0] * m[14] * m[11] -
      m[2] * m[8] * m[15] +
      m[2] * m[12] * m[11] +
      m[3] * m[8] * m[14] -
      m[3] * m[12] * m[10]
    r[6] =
      -m[0] * m[6] * m[15] +
      m[0] * m[14] * m[7] +
      m[2] * m[4] * m[15] -
      m[2] * m[12] * m[7] -
      m[3] * m[4] * m[14] +
      m[3] * m[12] * m[6]
    r[7] =
      m[0] * m[6] * m[11] -
      m[0] * m[10] * m[7] -
      m[2] * m[4] * m[11] +
      m[2] * m[8] * m[7] +
      m[3] * m[4] * m[10] -
      m[3] * m[8] * m[6]

    r[8] =
      m[4] * m[9] * m[15] -
      m[4] * m[13] * m[11] -
      m[5] * m[8] * m[15] +
      m[5] * m[12] * m[11] +
      m[7] * m[8] * m[13] -
      m[7] * m[12] * m[9]
    r[9] =
      -m[0] * m[9] * m[15] +
      m[0] * m[13] * m[11] +
      m[1] * m[8] * m[15] -
      m[1] * m[12] * m[11] -
      m[3] * m[8] * m[13] +
      m[3] * m[12] * m[9]
    r[10] =
      m[0] * m[5] * m[15] -
      m[0] * m[13] * m[7] -
      m[1] * m[4] * m[15] +
      m[1] * m[12] * m[7] +
      m[3] * m[4] * m[13] -
      m[3] * m[12] * m[5]
    r[11] =
      -m[0] * m[5] * m[11] +
      m[0] * m[9] * m[7] +
      m[1] * m[4] * m[11] -
      m[1] * m[8] * m[7] -
      m[3] * m[4] * m[9] +
      m[3] * m[8] * m[5]

    r[12] =
      -m[4] * m[9] * m[14] +
      m[4] * m[13] * m[10] +
      m[5] * m[8] * m[14] -
      m[5] * m[12] * m[10] -
      m[6] * m[8] * m[13] +
      m[6] * m[12] * m[9]
    r[13] =
      m[0] * m[9] * m[14] -
      m[0] * m[13] * m[10] -
      m[1] * m[8] * m[14] +
      m[1] * m[12] * m[10] +
      m[2] * m[8] * m[13] -
      m[2] * m[12] * m[9]
    r[14] =
      -m[0] * m[5] * m[14] +
      m[0] * m[13] * m[6] +
      m[1] * m[4] * m[14] -
      m[1] * m[12] * m[6] -
      m[2] * m[4] * m[13] +
      m[2] * m[12] * m[5]
    r[15] =
      m[0] * m[5] * m[10] -
      m[0] * m[9] * m[6] -
      m[1] * m[4] * m[10] +
      m[1] * m[8] * m[6] +
      m[2] * m[4] * m[9] -
      m[2] * m[8] * m[5]

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12]
    for (var i = 0; i < 16; i++) r[i] /= det
    return result
  }

  static transpose(matrix, result) {
    result = result || new Matrix()
    var m = matrix.m,
      r = result.m
    r[0] = m[0]
    r[1] = m[4]
    r[2] = m[8]
    r[3] = m[12]
    r[4] = m[1]
    r[5] = m[5]
    r[6] = m[9]
    r[7] = m[13]
    r[8] = m[2]
    r[9] = m[6]
    r[10] = m[10]
    r[11] = m[14]
    r[12] = m[3]
    r[13] = m[7]
    r[14] = m[11]
    r[15] = m[15]
    return result
  }

  static multiply(left, right, result) {
    result = result || new Matrix()
    var a = left.m,
      b = right.m,
      r = result.m

    r[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12]
    r[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13]
    r[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14]
    r[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15]

    r[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12]
    r[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13]
    r[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14]
    r[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15]

    r[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12]
    r[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13]
    r[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14]
    r[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15]

    r[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12]
    r[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13]
    r[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14]
    r[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]

    return result
  }

  static identity(result) {
    result = result || new Matrix()
    var m = result.m
    m[0] = m[5] = m[10] = m[15] = 1
    m[1] = m[2] = m[3] = m[4] = m[6] = m[7] = m[8] = m[9] = m[11] = m[12] = m[13] = m[14] = 0
    return result
  }

  static scale(x, y, z, result) {
    result = result || new Matrix()
    var m = result.m

    m[0] = x
    m[1] = 0
    m[2] = 0
    m[3] = 0

    m[4] = 0
    m[5] = y
    m[6] = 0
    m[7] = 0

    m[8] = 0
    m[9] = 0
    m[10] = z
    m[11] = 0

    m[12] = 0
    m[13] = 0
    m[14] = 0
    m[15] = 1

    return result
  }

  static translate(x, y, z, result) {
    result = result || new Matrix()
    var m = result.m

    m[0] = 1
    m[1] = 0
    m[2] = 0
    m[3] = x

    m[4] = 0
    m[5] = 1
    m[6] = 0
    m[7] = y

    m[8] = 0
    m[9] = 0
    m[10] = 1
    m[11] = z

    m[12] = 0
    m[13] = 0
    m[14] = 0
    m[15] = 1

    return result
  }

  static rotate(a, x, y, z, result) {
    if (!a || (!x && !y && !z)) {
      return Matrix.identity(result)
    }

    result = result || new Matrix()
    var m = result.m

    var d = Math.sqrt(x * x + y * y + z * z)
    a *= Math.PI / 180
    x /= d
    y /= d
    z /= d
    var c = Math.cos(a),
      s = Math.sin(a),
      t = 1 - c

    m[0] = x * x * t + c
    m[1] = x * y * t - z * s
    m[2] = x * z * t + y * s
    m[3] = 0

    m[4] = y * x * t + z * s
    m[5] = y * y * t + c
    m[6] = y * z * t - x * s
    m[7] = 0

    m[8] = z * x * t - y * s
    m[9] = z * y * t + x * s
    m[10] = z * z * t + c
    m[11] = 0

    m[12] = 0
    m[13] = 0
    m[14] = 0
    m[15] = 1

    return result
  }
}

export default Matrix
