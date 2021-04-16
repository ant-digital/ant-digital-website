import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean
}

const Button: FC<Props> = ({
  secondary,
  className,
  type = "button",
  ...props
}) => {
  const finalClassName = `
    ${className} bg-primaryDark rounded-lg px-6 py-3 text-onPrimaryDark font-bold hover:scale-y-110
  `
  return <button type={type} className={finalClassName} {...props} />
}

export default Button
