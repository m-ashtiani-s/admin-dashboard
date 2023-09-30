import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import langReducer from "./LangReducers";


export interface langType {
    lang: string;
    changeLang: (lang: string) => void;
}

const LangContext = createContext<langType | undefined>(undefined);
const initialState: langType = {
    lang: localStorage.getItem('lang') || 'fa',
    changeLang: () => {}
}

const LangProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(langReducer, initialState);
    const {i18n}=useTranslation()

    const changeLang = (lang: string) => {
        dispatch({ type: 'CHANGE_LANG', payload: lang })
    }

    useEffect(()=>{
        i18n.changeLanguage(state.lang);
        localStorage.setItem('lang',state.lang)
        document.body.dataset.direction=state.lang==='fa' ? 'rtl' : 'ltr'
    },[state.lang])

    return (
        <LangContext.Provider value={{ ...state, changeLang }}>
            {children}
        </LangContext.Provider>
    )
}

const useLangContext = () => {
   
    return useContext(LangContext);
}

export { useLangContext, LangProvider }
