import Div from "../../../../../components/elements/div";
import {RepositoryItemProps} from "./repository-item.props.ts";
import Button from "../../../../../components/elements/button";
import NoStarIcon from "../../../../../icons/no-star-icon.tsx";
import ListItem from "../../../../../components/elements/list-item";
import {formatDate} from "../../../../../utils/time/format-date.ts";
import {NavLink} from "react-router-dom";

const RepositoryItem = (
  {
    full_name,
    owner,
    language,
    stargazers_count,
    description,
    updated_at,
  }: RepositoryItemProps) => {
  return (
    <Div className={'border justify-between p-4 rounded'}>
      <Div className={'flex-col gap-y-1'}>
        <Div className={'items-center gap-x-2'}>
          <img className={'w-5 h-5 rounded-full'} src={owner} alt={'avatar'}/>
          <NavLink to={`/${full_name}`}>
            <p className={'text-[#0969DA] text-base'}>{full_name}</p>
          </NavLink>
        </Div>
        <p className={'text-sm'}>{description}</p>
        <Div className={'gap-x-3'}>
          <ListItem value={language}/>
          <ListItem value={stargazers_count} startAdornment={<NoStarIcon/>}/>
          <p className={'text-xs text-[#656D76]'}>{formatDate(updated_at)}</p>
        </Div>
      </Div>
      <Button startAdornment={<NoStarIcon/>} className={'h-7'}>
        <p className={'text-xs'}>Star</p>
      </Button>
    </Div>
  )
}

export default RepositoryItem;