/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import Header from "./Header"
import "./global.css"

const Layout: FC = ({ children }) => {
  return (
    <div className="bg-no-repeat min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto relative">
        <main>{children}</main>
        <footer className="px-3 text-center py-3 flex items-center pt-8 text-gray-700">
          <div>© {new Date().getFullYear()} Ant Digital</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
