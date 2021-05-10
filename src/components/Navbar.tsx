import { LocalizedLink as Link } from "gatsby-theme-i18n"
import React, { FC } from "react"
import SideBar from "./Sidebar"

const Navbar: FC = () => (
  <nav className="sticky left-0 right-0 top-0 justify-end z-20 bg-white bg-opacity-50 firefox:bg-opacity-90 backdrop-filter backdrop-blur border-b border-black border-opacity-5">
    <div className="max-w-6xl flex items-center mx-auto px-8 py-4">
      <Link to="/" className="flex items-center mr-auto">
        <img
          src={"/logo-full.svg"}
          alt="ant digital logo"
          className={"h-6 md: h-8"}
        />
      </Link>

      <InternalNavLinks href="/pricing" text={`Pricing`} />
      <InternalNavLinks href="/about" text={`About`} />
      <InternalNavLinks href="/contact" text={`Contact`} />

      <SideBar />
    </div>
  </nav>
)

const InternalNavLinks: FC<{
  href: string
  text: string
}> = ({ href, text }) => (
  <Link
    to={href}
    className="
      font-bold
      hover:underline
      p-2 lg:p-3
      hidden md:block
      transition-colors duration-200 ease-in-out
    "
  >
    {text}
  </Link>
)
export default Navbar
