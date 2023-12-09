import {forwardRef} from 'react';
import {DivProps} from './div.props'

export const Div = forwardRef<HTMLDivElement, DivProps>(function Div(props, ref) {
  const {
    tag = 'div',
    children,
    style,
    onClick,
    dangerouslySetInnerHTML,
    dataTestId,
    role,
    className,
    id,
    onMouseOver,
    onMouseLeave,
    ...rest
  } = props;
  const Component = tag;
  return (
    <Component
      data-testid={dataTestId}
      id={id}
      role={role}
      className={`flex flex-row ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      onClick={onClick}
      style={style}
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Div;
