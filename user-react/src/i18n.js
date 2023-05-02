import i18next from "i18next";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locale/en.json';
import translationAR from './locale/ar.json';

const LANG_KEY = 'selectedLanguage'; //test
const initialLanguage = localStorage.getItem(LANG_KEY) || 'en'; //test


const resources ={
    en:{
        translation:translationEN,
    },
    ar:{
        translation:translationAR,
    }
}

i18n
   
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources,
        lng:initialLanguage,
        interpolation:{
            escapeValue: false  //react already safes from xss
        },
        react: {
            useSuspense:false
        }
    });

    export default i18n;