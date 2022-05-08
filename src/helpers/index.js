

import slugify from 'slugify'
import isString from 'lodash/isString'
import { stringify as _stringify } from 'qs';

export const timestamp = () => Math.floor(Date.now() / 1000)

export const uniqueValues = arr => [...new Set(uniqueValues)];

export const getKey = key => `admin.eventjuicer.com/${key}`

export const lsGet = (key, ifNotFound = "") => {
    try {
      const data = localStorage.getItem(getKey(key))
      return data ? JSON.parse(data) : ifNotFound
    } catch (error) {
      return ifNotFound
    }
  }
  
  
  export const lsSet = (key, value) => localStorage.setItem(getKey(key), JSON.stringify(value))
  
  export const lsRem = (key) => localStorage.removeItem( getKey(key) )




export const stringify = (obj) => _stringify(
  { filter: JSON.stringify(obj) },
  { strictNullHandling: true }
)

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