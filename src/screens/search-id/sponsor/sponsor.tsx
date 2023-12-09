import Div from "../../../components/elements/div";
import sponsorLogo from '../../../../public/images/sposor.png'
import ArrowRightIcon from "../../../icons/arrow-right-icon.tsx";

const Sponsor = () => {
  return (
    <Div className={'flex-col gap-y-4 w-full'}>
      <Div className={'flex-col p-4 border border-[#D0D7DE] gap-y-2 rounded'}>
        <img className={'w-[47px] h-[38px]'} src={sponsorLogo} alt={'sponsor logo'}/>
        <p className={'text-charcoal text-base font-medium py-1'}>Sponsor open source projects you depend on</p>
        <p className={'text-mist text-xs pb-4'}>Contributors are working behind the scenes to make open source better for everyone—give them the help and recognition they deserve.
        </p>
        <Div className={'items-center gap-x-1'}>
          <p className={'text-Azure text-xs font-medium'}>Explore sponsorable projects</p>
          <ArrowRightIcon/>
        </Div>
      </Div>
      <Div className={'p-4 border border-[#D0D7DE] rounded gap-x-1'}>
        <p className={'text-xs font-semibold'}>How can we improve search?</p>
        <p className={'text-xs text-Azure font-medium'}>Give feedback</p>
      </Div>
    </Div>
  )
}

export default Sponsor