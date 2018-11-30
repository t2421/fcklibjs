import 'url-polyfill'

export default class Util {
  public static getUrlParam(url: string): Object {
    const parseUrl: URL = new URL(url)
    var arg = new Object()
    var pair = parseUrl.search.substring(1).split('&')
    for (var i = 0; pair[i]; i++) {
      var kv = pair[i].split('=')
      arg[kv[0]] = kv[1]
    }
    return arg
  }
}
