import { Link } from "gatsby"
import React, { FC, useState } from "react"
import Button from "./Button/Button"
import Logo from "../images/logo-standalone.svg"
import MenuIcon from "../icons/menu.svg"
import CloseIcon from "../icons/close.svg"

const Header: FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showSignInButton, setShowSignInButton] = useState(false)
  return (
    <>
      <header
        className="
        backdrop-blur md:backdrop-none
        mb-8
        max-w-7xl p-3 mx-auto
        sticky top-0 bg-white bg-opacity-95 border-b
        md:relative md:bg-transparent md:border-none
        z-10
      "
      >
        <div className="flex flex-row items-center ">
          <div className="flex items-center ml-1">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="w-8" alt="logo" />
              <h1 className="text-xl ml-2 font-bold font-body">Ant Digital</h1>
            </Link>
          </div>

          <nav className="hidden md:flex mx-auto absolute w-full left-0 right-0 justify-end pointer-events-none">
            <InternalNavLinks href="/help" text={`About Us`} />
            <InternalNavLinks href="/pricing" text={`Contact Us`} />
            {/* <NavLinks href="https://feedback.obserfy.com" text={`Roadmap`} />
            <NavLinks
              href="https://feedback.obserfy.com/changelog"
              text={`What's New`}
            /> */}
          </nav>
          <Button
            secondary
            className="px-4 ml-auto py-2 text-sm border md:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <img alt="open menu" src={MenuIcon} />
          </Button>
        </div>
      </header>
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
    </>
  )
}

const NavLinks: FC<{ href: string; text: string }> = ({ href, text }) => (
  <a
    href={href}
    className="hover:text-green-700 transition-colors duration-200 ease-in-out p-2 lg:p-3 pointer-events-auto font-body"
  >
    {text}
  </a>
)

const InternalNavLinks: FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <Link
    to={href}
    className="hover:text-green-700 transition-colors duration-200 ease-in-out p-2 lg:p-3 pointer-events-auto font-body"
  >
    {text}
  </Link>
)

const Sidebar: FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => {
  return (
    <div
      className={`fixed shadow w-4/5 h-full right-0 ${
        show ? "" : "-right-full"
      } top-0 bottom-0 bg-white z-50 transition-all duration-200 ease-in-out md:hidden border-l`}
    >
      <div className="m-2 mb-8 items-start">
        <div className="flex items-center">
          <div className="prose pl-6 opacity-60">
            <h2 className="m-0">
              Links
            </h2>
          </div>
          <Button
            secondary
            className="flex-shrink-0 mx-1 px-3 ml-auto"
            onClick={onClose}
          >
            <img alt="open menu" src={CloseIcon} />
          </Button>
        </div>
        <div className="prose flex flex-col ml-6">
          <h3 className="my-2">
            <Link
              to="/help"
              className="no-underline font-bold hover:text-green-700 transition-colors"
            >
              Help Center
            </Link>
          </h3>
          <h3 className="my-2">
            <Link
              to="/pricing"
              className="no-underline font-bold hover:text-green-700 transition-colors"
            >
              Pricing
            </Link>
          </h3>
          <h3 className="my-2">
            <a
              href="https://feedback.obserfy.com"
              className="no-underline font-bold hover:text-green-700 transition-colors"
            >
              Roadmap
            </a>
          </h3>
          <h3 className="my-2">
            <a
              href="https://feedback.obserfy.com/changelog"
              className="no-underline font-bold hover:text-green-700 transition-colors"
            >
              What&apos;s New
            </a>
          </h3>
          {/* <h2> */}
          {/*  <Link */}
          {/*    to="/blog" */}
          {/*    className="no-underline font-bold hover:text-green-700 transition-colors" */}
          {/*  > */}
          {/*    Blog */}
          {/*  </Link> */}
          {/* </h2> */}
          <h3 className="my-2">
            <Link
              to="/contact"
              className="no-underline font-bold hover:text-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header

