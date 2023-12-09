import {RepositoryReducerTypes} from "./search.ts";
import {SearchActionTypes} from "./search-type.ts";


const initialState: RepositoryReducerTypes = {
  showDropDown: false,
  type: '',
  inputValue: [],
};

function searchReducer(state = initialState, action: any) {
  switch (action.type) {
    case SearchActionTypes.SEARCH_TYPE:
      return {
        showDropDown: true,
        type: action?.data?.type,
        inputValue: [...state.inputValue,' ' + action?.data?.type + ':'],
      };

    case SearchActionTypes.SEARCH_VALUE:
      return {
        showDropDown: true,
        inputValue: [...state.inputValue,action?.data?.value + ' '],
      };

    case SearchActionTypes.SEARCH_ONCHANGE:
      return {
        inputValue: [action?.data?.inputValue],
      };

    case SearchActionTypes.CLOSE_SEARCH:
      return {
        showDropDown: false,
      };

    default:
      return state
  }
}

export default searchReducer;
