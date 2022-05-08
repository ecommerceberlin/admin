

import slugify from 'slugify'
import isString from 'lodash/isString'

export const slug = (str = '', replacement = '-') => slugify(str, {
  replacement,
  remove: /[*+~.()'"!:@_\/]/g,
  lower: true,
  strict: true,  
  locale: 'pl'   
});

export const looksLikeLabel = (str="") => str && isString(str) && /^\S*$/.test(str) && /^[a-z0-9\-.]+$/.test(str) 

export const containsNoHtml = (str) => str && isString(str) &&  /<\/?[a-z][\s\S]*>/i.test(str)

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return string.includes("://") && (url.protocol.includes("http:") || url.protocol.includes("https:"))

}