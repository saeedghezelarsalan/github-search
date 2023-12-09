import Div from "../../elements/div";
import HamburgerMenu from "./hamburger-menu";
import Logo from '../../../../public/images/logo.png'
import Button from "../../elements/button";
import PlusIcon from "../../../icons/plus-icon.tsx";
import MinimalArrowDownIcon from "../../../icons/minimal-arrow-down-icon.tsx";
import IssuesIcon from "../../../icons/issues-icon.tsx";
import PullRequestsIcon from "../../../icons/pull-requests-icon.tsx";
import NotificationIcon from "../../../icons/notification-icon.tsx";
import AvatarMenu from "./avatar-menu/avatar-menu.tsx";
import Search from "../../modules/search";

const Header = () => {
  return (
    <Div className={'items-center w-full bg-[#f6f8fa] border-b p-4 gap-x-4'}>
      <HamburgerMenu/>
      <img className={'h-8 w-8'} src={Logo} alt={'logo'}/>
      <Search/>
      <Div className={'h-full items-center gap-x-3 '}>
        <Button startAdornment={<PlusIcon/>} endAdornment={<MinimalArrowDownIcon/>} className={'h-8'}/>
        <Button startAdornment={<IssuesIcon/>} className={'h-8'}/>
        <Button startAdornment={<PullRequestsIcon/>} className={'h-8'}/>
        <Button startAdornment={<NotificationIcon/>} className={'h-8'}/>
      </Div>
      <AvatarMenu/>
    </Div>
  )
}

export default Header;