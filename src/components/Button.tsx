import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean
  label?: string
}

const Button: FC<Props> = ({
  label,
  secondary,
  className,
  type = "button",
  ...props
}) => {
  const finalClassName = `
    ${className} ring ring-gray-300 ring-1 rounded-lg px-6 py-3 text-onPrimaryDark font-bold hover:scale-y-110
  `
  return (
    <button
      aria-label={label}
      type={type}
      className={finalClassName}
      {...props}
    />
  )
}

export default Button
