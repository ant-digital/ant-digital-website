import { Link } from "gatsby"
import React, { FC } from "react"

const Header: FC = () => (
  <nav className="sticky left-0 right-0 top-0 justify-end z-50">
    <div className={"max-w-6xl flex items-center mx-auto px-8 py-4 border-b bg-white bg-opacity-50 firefox:bg-opacity-90 backdrop-filter backdrop-blur-lg"}>
      <Link to="/" className="flex items-center mr-auto">
        <img src={"/logo.svg"} alt="ant digital logo" className={"w-6 h-6"} />
        <p className="text-sm ml-3 font-bold font-body mb-1">Ant Digital</p>
      </Link>

      <InternalNavLinks href="/pricing" text={`Pricing`} />
      <InternalNavLinks href="/about" text={`About`} />
      <InternalNavLinks href="/contact" text={`Contact`} />
    </div>
  </nav>
)

const InternalNavLinks: FC<{
  href: string
  text: string
}> = ({ href, text }) => (
  <Link
    to={href}
    className="hover:text-primaryDark font-bold hover:underline transition-colors duration-200 ease-in-out p-2 lg:p-3 pointer-events-auto font-body"
  >
    {text}
  </Link>
)
export default Header
