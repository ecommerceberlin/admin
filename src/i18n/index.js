// import { englishMessages } from 'react-admin';
import en from 'ra-language-english'
import de from 'ra-language-german'
import { useEffect, useState } from 'react'
import polyglotI18nProvider from 'ra-i18n-polyglot';
import isFunction from 'lodash/isFunction'
import {fetchUtils, resolveBrowserLocale, useSetLocale, useLocale} from 'react-admin'
import {lsSet, lsGet, timestamp} from '../helpers'
const defaulTranslations = {en, de}

export const i18nProvider = polyglotI18nProvider((locale) => {

  if(locale == "default"){
    return defaulTranslations[process.env.REACT_APP_LOCALE || "en"]
  }

  return new Promise((resolve, reject)=>{
    const translations = lsGet("translations")
    const merged =  {...defaulTranslations[locale], ...translations[locale]}
    resolve(merged)

  })

}, "default", {allowMissing: true} );


export const getLocalesArray = () => `${process.env.REACT_APP_LOCALES}`.split(",");

export const getLocale = () => {
  const locales = getLocalesArray()
  const browserLocale = resolveBrowserLocale()
  const autoLocale = locales.includes( browserLocale )? browserLocale: `${process.env.REACT_APP_LOCALE}`;
  return lsGet("locale") || autoLocale
}



export const useTranslations = () => {

  const [translationsLoaded, setTranslationsLoaded] = useState(null)
  const setLocale = useSetLocale()
  const proxy = `${process.env.REACT_APP_PROXY}`
  const localise = `${process.env.REACT_APP_LOCALISE}`

    useEffect(()=>{

        let isCancelled = false

        const fetchAndSaveTranslations = async() => fetchUtils.fetchJson(proxy.includes("https")? `${proxy}${encodeURIComponent(localise)}`: localise).then(response => response.json).then(translations => {
          if(!isCancelled){
            lsSet("translations", translations)
            lsSet("translations_loaded", timestamp())
            setTranslationsLoaded(true);
            setLocale(getLocale())
          }
        })

        if(timestamp()-lsGet("translations_loaded")>3600){
          //refresh translations?
        }
        

        fetchAndSaveTranslations();
     
        return () => {
          isCancelled = true;
        }
      }, [])

  return translationsLoaded

}


export const isTranslationAssetId = (s) =>  !s.includes(" ") && s.includes(".")


export default i18nProvider
