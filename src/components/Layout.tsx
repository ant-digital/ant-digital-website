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
import { Trans } from "@lingui/macro"

const Layout: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto relative">
        <main>{children}</main>
      </div>

      <footer className="text-gray-700 border-t pt-8">
        <div className={"max-w-6xl mx-auto px-8 mb-4 md:flex items-center"}>
          <p className={"font-serif pb-4"}>
            <Trans>Services</Trans>
          </p>
          <Link to={"/websites"} className={"md:ml-8 pb-4 block"}>
            <Trans>Business Websites</Trans>
          </Link>
          <Link to={"/e-commerce"} className={"md:ml-8 pb-4 block"}>
            <Trans>E-commerce</Trans>
          </Link>
          <Link to={"/web-applications"} className={"md:ml-8 pb-4 block"}>
            <Trans>Web applications</Trans>
          </Link>
        </div>

        <div className={"max-w-6xl mx-auto px-8 md:flex items-center"}>
          <p className={"font-serif pb-4"}>
            <Trans>Company</Trans>
          </p>
          <Link to={"/about"} className={"md:ml-8 pb-4 block"}>
            <Trans>About</Trans>
          </Link>
          <Link to={"/pricing"} className={"md:ml-8 pb-4 block"}>
            <Trans>Pricing</Trans>
          </Link>
          <Link to={"/contact"} className={"md:ml-8 pb-4 block"}>
            <Trans>Contact Us</Trans>
          </Link>
        </div>

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
