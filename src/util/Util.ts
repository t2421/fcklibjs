import 'url-polyfill'

export default class Util {
  public static getUrlParam(url: string) {
    const parse = new URL(url)
    console.log(parse)
  }
}
