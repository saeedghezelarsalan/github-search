import {CSSProperties} from "react";

export interface TextProps {
  itemProp?: string

  children: string;

  variant?: Variants

  className?: string

  typography?: Typography

  align?: Align

  type?: Types

  style?: CSSProperties

  disabled?: boolean

  dataTestId?: string

  direction?: 'rtl' | 'ltr' | 'auto'

  onClick?: () => void

}

export interface TextPropsColorOverrides {

}

export type Variants = "p" | "body" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "li"
export type Typography = 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl'
export type TextColors =  "grey.100" | "grey.200" | "grey.300" | "grey.400" | "grey.500" | "grey.600" | "grey.700" | "grey.800" | "grey.900" | "white" | "black"
export type Align = 'right' | 'left' | 'center' | 'justify' | 'start' | 'end' | 'inherit'
export type Types = "medium" | "bold" | "light" | "regular"

export enum TypographyEnum {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  '3xl' = '3xl',
  '4l' = '4xl',
  '5l' = '5xl',
}
