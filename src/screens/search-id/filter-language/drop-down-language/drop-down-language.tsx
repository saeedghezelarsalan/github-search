import Div from "../../../../components/elements/div";
import {languageData} from "../language-data.ts";
import {FilterLanguageProps} from "../filter-language.props.ts";
import ListItem from "../../../../components/elements/list-item";
import {useDispatch} from "react-redux";
import {SearchActions} from "../../../../store/search/search-actions.ts";

const DropDownLanguage = () => {
  const dispatch = useDispatch();

  const clickHandler= (value:string) => {
    dispatch(SearchActions.searchValue({value:value}))
  }

  return(
    <Div className={'flex-col p-2 w-full'}>
      {languageData.filter((items: FilterLanguageProps) => items.dropDown).map((item: FilterLanguageProps) => (
        <ListItem clickHandler={()=>clickHandler(item.name)} value={item.name} color={item.color} className={'w-full rounded-[6px] cursor-pointer hover:bg-[#d0d7de51] py-1.5 px-2'}/>
      ))}
    </Div>
  )
}

export default DropDownLanguage;