import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

import styles from "./Button.module.css"

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
    ${className} ${styles.base}
  `
  return <button type={type} className={finalClassName} {...props} />
}

export default Button
