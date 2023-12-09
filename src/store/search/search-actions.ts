import {SearchActionTypes} from "./search-type.ts";

const searchType = (data: { type: string }) => ({type: SearchActionTypes.SEARCH_TYPE, data: data});
const searchValue = (data: { value: string }) => ({type: SearchActionTypes.SEARCH_VALUE, data: data});
const searchOnchange = (data: { inputValue: string }) => ({type: SearchActionTypes.SEARCH_ONCHANGE, data: data});
const closeSearch = () => ({type: SearchActionTypes.CLOSE_SEARCH});

export const SearchActions = {
  searchType: searchType,
  closeSearch: closeSearch,
  searchValue: searchValue,
  searchOnchange: searchOnchange,
};
