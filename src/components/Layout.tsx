/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import Navbar from "./Navbar"
import "./global.css"

const Layout: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto relative">
        <main>{children}</main>
      </div>

      <footer className="text-gray-700 border-t">
        <div className="max-w-6xl mx-auto relative p-8">
          © {new Date().getFullYear()} Ant Digital
        </div>
      </footer>
    </div>
  )
}

export default Layout
