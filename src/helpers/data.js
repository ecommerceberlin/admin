import { stringify as _stringify } from 'qs';


export const uniqueValues = arr => [...new Set(uniqueValues)];


export const stringify = (obj) => _stringify(
  { filter: JSON.stringify(obj) },
  { strictNullHandling: true }
)
