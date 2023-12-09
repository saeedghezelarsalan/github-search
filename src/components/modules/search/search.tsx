import {FormEvent, useEffect, useRef} from "react";
import Div from "../../elements/div";
import SearchIcon from "../../../icons/search-icon.tsx";
import CommandPaletteIcon from "../../../icons/command-palette-icon.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/root-reducer.ts";
import {SearchActions} from "../../../store/search/search-actions.ts";
import SearchDropdown from "./search-dropdown";
import {useNavigate} from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const {inputValue, showDropDown} = useSelector((state: RootState) => state.search);
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate(); // create navigate function using useNavigate hook

  useEffect(() => {
    if (showDropDown) {
      inputRef.current && inputRef.current.focus()
    }
  }, [showDropDown])

  const onChangeHandler = (e: any) => {
    dispatch(SearchActions.searchOnchange({inputValue: e.target.value}))
  }

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanedArray = (inputValue as string).replace(/,/g, '').split(' ');
    const queryParams = {};
    cleanedArray.forEach(item => {
      const [key, value] = item.split(':');
      if (key && value) {
        queryParams[key] = value;
      }
    });

    // Use navigate to navigate with query params
    navigate({
      pathname: '/search',
      search: new URLSearchParams(queryParams).toString()
    });
  };

  return (
    <Div className={'relative w-full'}>
      <Div className={'border w-full flex-grow items-center px-2 py-1 rounded'}>
        <SearchIcon/>
        <form className={'flex-1 mx-2'} onSubmit={submitHandler}>
          <input ref={inputRef} value={inputValue} onChange={onChangeHandler} className={'outline-0 border-0 bg-transparent flex-grow w-full'}/>
        </form>
        <CommandPaletteIcon/>
      </Div>
      <Div className={'absolute bottom-0 bg-white w-full'}>
        <SearchDropdown/>
      </Div>
    </Div>
  )
}

export default Search;