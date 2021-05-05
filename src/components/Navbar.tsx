import { Link } from "gatsby"
import React, { FC } from "react"
import SideBar from "./Sidebar"

const Navbar: FC = () => (
  <nav className="sticky left-0 right-0 top-0 justify-end z-20 bg-white bg-opacity-50 firefox:bg-opacity-90 backdrop-filter backdrop-blur">
    <div className="max-w-6xl flex items-center mx-auto px-8 py-4 border-b border-gray-200">
      <Link to="/" className="flex items-center mr-auto">
        <img src={"/logo.svg"} alt="ant digital logo" className={"w-8 h-7"} />
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
