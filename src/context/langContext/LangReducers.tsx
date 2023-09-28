import { langType } from "./LangContext";



const langReducer = (state: langType, action: { type: string, payload: string }) => {
    switch (action.type) {
      case 'CHANGE_LANG':
        return { ...state, lang: action.payload }; // Always return a valid state
      default:
        return state;
    }
  };

export default langReducer;