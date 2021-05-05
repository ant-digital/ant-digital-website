import Button from "./Button"
import React, { FC, useState } from "react"
import { Link } from "gatsby"
import { t, Trans } from "@lingui/macro"
import Portal from "./Portal"

const SideBar = () => {
  const [visible, setVisible] = useState(false)

  function toggleVisibility() {
    setVisible(!visible)
  }

  return (
    <>
      <Button
        label={"Open menu"}
        className={"text-sm !p-2 lg:hidden !ring-0"}
        onClick={toggleVisibility}
      >
        <img src={"/icons/menu/hamburger.svg"} className="w-6 h-6" alt={""} />
      </Button>

      <Portal>
        <aside
          className={`
            z-40
            w-80
            fixed lg:hidden right-0 top-0 bottom-0
            pointer-events-auto
            border-l
            bg-surface
            transition duration-200 ease-in-out
            ${visible ? "" : "transform translate-x-full"}
        `}
        >
          <div className={"flex items-center border-b"}>
            <Link
              to={"/"}
              className="sm:text-md md:text-xl flex items-center ml-4 text-sm"
              aria-label="Home"
            >
              <img
                src="/logo.svg"
                className={"w-4 "}
                alt={"Ant Digital"}
              />
            </Link>
            <Button
              className="text-sm !px-0 m-4 text-xl leading-tight ml-auto rounded-[100px] w-10 h-10"
              onClick={toggleVisibility}
            >
              &#x2715;
            </Button>
          </div>

          <SidebarLinks
            href={"/pricing"}
            text={t`Pricing`}
            onClick={toggleVisibility}
          />
          <SidebarLinks
            href={"/about"}
            text={t`About`}
            onClick={toggleVisibility}
          />
          <SidebarLinks
            href={"/contact"}
            text={t`Contact`}
            onClick={toggleVisibility}
          />

          <div className="flex flex-wrap m-4 mt-auto absolute bottom-0 left-0 right-0">
            <p className={"w-full mb-4 opacity-50"}>Languages</p>
            <Link
              to={"/id"}
              className="block md:ml-8 mb-2 font-bold opacity-70 hover:underline mr-8"
            >
              🇮🇩 <span className={"ml-2"}>Indonesia</span>
            </Link>
            <Link
              to={"/"}
              className="block md:ml-8 mb-2 font-bold opacity-70 hover:underline"
            >
              🇺🇸
              <span className={"ml-2"}> English</span>
            </Link>
          </div>
        </aside>
      </Portal>
    </>
  )
}

const SidebarLinks: FC<{
  text: string
  href: string
  onClick: () => void
}> = ({ text, href, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    activeClassName={"underline opacity-100"}
    className={`
      block
      px-4 py-2
      font-bold text-lg
      flex-shrink-0
      transition-opacity duration-200 ease-in-out
      text-xl
      flex items-center
    `}
  >
    <Trans id={text} />
    <img
      alt={""}
      src={"/icons/arrow/chevron_right.svg"}
      className={"w-5 h-5 ml-auto opacity-60"}
    />
  </Link>
)

export default SideBar
