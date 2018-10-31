

const FACEBOOK = 'http://www.facebook.com/sharer.php';
const TWITTER = 'http://twitter.com/share';
const LINKEDIN = 'http://www.linkedin.com/shareArticle';
const GOOGLE = 'https://plus.google.com/share';
const LINE = 'http://line.me/R/msg/text/';
const PINTEREST = 'http://pinterest.com/pin/create/button/';
const HATEBU = 'http://b.hatena.ne.jp/entry/';

const WINDOW_NAME = "ShareWindow";
const WINDOW_OPTIONS = 'width=554, height=470, menubar=no, toolbar=no, scrollbars=yes';


class Share {
  constructor() {
    this.url = window.location.href;
  }
  
  facebook(options){
    const params = options || {};
    const url = params.url || this.url;
    const shareUrl = `${FACEBOOK}?u=${url}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }

  twitter(options){
    const params = options || {};
    const url = params.url || this.url;
    const text = params.text || "tititititit";
    const hashtags = params.hashtags || "";
    const shareUrl = `${TWITTER}?url=${url}&text=${text}&hashtags=${hashtags}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }

  google(options){
    const params = options || {};
    const url = params.url || this.url;
    const shareUrl = `${GOOGLE}?url=${url}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }

  linkedin(options){
    const params = options || {};
    const url = params.url || this.url;
    const title = params.title || "tititititit";
    const summary = params.summary || "";
    const source = params.source || "";
    const shareUrl = `${LINKEDIN}?mini=true&url=${url}&title=${title}&summary=${summary}&source=${source}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }

  line(options){
    const params = options || {};
    const url = params.url || this.url;
    const title = params.title || "tititititit";
    
    const shareUrl = `${LINE}?${encodeURI(title)}${encodeURI(url)}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }

  pinterest(options){
    const params = options || {};
    const url = params.url || this.url;
    const media = params.media || "tititititit";
    const description = params.description || "tititititit";
    
    const shareUrl = `${PINTEREST}?url=${url}&media=${media}&description=${description}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }

  hatebu(options){
    const params = options || {};
    const url = params.url || this.url;
    const shareUrl = `${HATEBU}?${url}`;
    window.open(encodeURI(decodeURI(shareUrl)),WINDOW_NAME,WINDOW_OPTIONS);
    return false;
  }
  
}


export default Share; 
