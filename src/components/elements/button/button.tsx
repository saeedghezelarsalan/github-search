import {ButtonProps} from './button.props'
import classNames from '../../../utils/helper/class-names.ts'
import Div from "../div";

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    onClick,
    type,
    disabled = false,
    style,
    startAdornment,
    startAdornmentClassName,
    endAdornment,
    endAdornmentClassName,
    href,
    dataTestId,
    ...rest
  } = props;

  const clickOnButton = () => {
    if (!disabled && onClick && typeof onClick !== "undefined") {
      onClick();
    }
  }

  const buttonProps = {
    href: href,
    dir: 'ltr',
    'data-testid': dataTestId,
    onClick: clickOnButton,
    type: type,
    style: style,
    className: classNames(
      'flex items-center justify-center gap-1 px-2 bg-[#F6F8FA] hover:bg-[#F3F4F6] border hover:transition rounded hover:duration-150 hover:ease-in-out',
      className,
    ),
    ...rest,
  }

  const Children =
    <>
      {startAdornment ? (
        <Div className={`items-center justify-center relative object-cover ${startAdornmentClassName}`}>
          {startAdornment}
        </Div>
      ) : null}
      {children}
      {endAdornment ? (
        <Div className={`items-center justify-center relative object-cover ${endAdornmentClassName}`}>
          {endAdornment}
        </Div>
      ) : null}
    </>

  return (
    <button {...buttonProps}>
      {Children}
    </button>
  )
}

export default Button
