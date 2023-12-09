import Div from "../../../components/elements/div";
import ListItem from "../../../components/elements/list-item";
import {languageData} from "./language-data.ts";
import {FilterLanguageProps} from "./filter-language.props.ts";
import AddIcon from "../../../icons/add-icon.tsx";
import {useDispatch} from "react-redux";
import {SearchActions} from "../../../store/search/search-actions.ts";

const FilterLanguage = () => {
  const dispatch = useDispatch();

  const clickMoreHandler = () => {
    dispatch(SearchActions.searchType({type: 'language'}))
  }
  return (
    <Div className={'flex-col px-2 w-full'}>
      {languageData.filter((items: FilterLanguageProps) => items.main).map((item: FilterLanguageProps) => (
        <ListItem
          value={item.name}
          color={item.color}
          className={'w-full rounded-[6px] cursor-pointer hover:bg-[#d0d7de51] py-1.5 px-2'}
        />
      ))}
      <ListItem
        clickHandler={clickMoreHandler}
        value={'More languages'}
        startAdornment={<AddIcon/>}
        className={'w-full rounded-[6px] cursor-pointer hover:bg-[#d0d7de51] py-2 px-2'}
      />
    </Div>
  )
}

export default FilterLanguage;