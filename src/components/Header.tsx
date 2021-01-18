import { Link } from "gatsby"
import React, { FC } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header: FC = () => (
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
          <StaticImage
            src={"../../images/logo.png"}
            alt={"ant digital logo"}
            transformOptions={{ fit: "contain" }}
            blurredOptions={{}}
          />
          <p className="text-xl ml-2 font-bold font-body">Ant Digital</p>
        </Link>
      </div>

      <nav className="hidden md:flex mx-auto absolute w-full left-0 right-0 justify-end pointer-events-none">
        <InternalNavLinks href="/about" text={`About`} />
        <InternalNavLinks href="/contact" text={`Contact`} />
      </nav>
    </div>
  </header>
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
export default Header
