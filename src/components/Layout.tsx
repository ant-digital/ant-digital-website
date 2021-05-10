/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import Navbar from "./Navbar"
import "./global.css"
import { Link } from "gatsby"

const Layout: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto relative">
        <main>{children}</main>
      </div>

      <footer className="text-gray-700 border-t">
        <div className="max-w-6xl mx-auto relative md:flex flex-row-reverse">
          <Link to="/" className="flex items-center md:ml-auto block m-8">
            <img
              src={"/logo-full.svg"}
              alt="ant digital logo"
              className={"h-6"}
            />
          </Link>

          <p className={"m-8 block"}>
            Copyright © {new Date().getFullYear()} ant digital.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
