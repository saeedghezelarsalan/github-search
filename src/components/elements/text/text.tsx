import {TextProps} from './text.props'
import classNames from '../../../utils/helper/class-names.ts'
import {ALIGN, TYPE, TYPOGRAPHY} from './text.style'

const Text = (
  {
    children,
    variant = 'p',
    className,
    typography = 'base',
    align = 'center',
    type = 'regular',
    style,
    disabled = false,
    dataTestId,
    direction = 'auto',
    ...rest
  }: TextProps) => {

  const Component = variant;

  return (
    <Component
      data-testid={dataTestId}
      dir={direction}
      style={style}
      className={classNames(
        'z-[4]',
        TYPOGRAPHY[typography],
        disabled ? 'text-grey-300' : 'text-grey-300',
        ALIGN[align],
        TYPE[type],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text
