export default class MathUtil {
  constructor() {
    throw new Error('do not Instantiation!!!!')
  }
  static toRadian(degree) {
    return (degree * Math.PI) / 180
  }
  static toDegree(radian) {
    return (radian * 180) / Math.PI
  }

  static map(value, inLow = 0.0, inHigh = 1.0, outLow = 0.0, outHigh = 1.0, clip = true) {
    const outValue = ((value - inLow) / (inHigh - inLow)) * (outHigh - outLow) + outLow
    if (!clip) return outValue
    if (outValue < outLow) return outLow
    if (outValue > outHigh) return outHigh
    return outValue
  }
}
