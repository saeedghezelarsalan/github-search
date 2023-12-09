import {useSelector} from "react-redux";
import {RootState} from "../../../../store/root-reducer.ts";
import Div from "../../../elements/div";
import DropDownLanguage from "../../../../screens/search-id/filter-language/drop-down-language";

const SearchDropdown = () => {
    const {type} = useSelector((state:RootState) => state.search);

    if(type === 'language'){
        return(
            <Div className={'absolute bg-white w-full z-40 shadow-2xl rounded-bl-2xl rounded-br-2xl'}>
              <DropDownLanguage/>
            </Div>
        )
    }

    return null;
}

export default SearchDropdown;