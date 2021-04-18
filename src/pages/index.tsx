import React, { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage: FC = () => (
  <Layout>
    <SEO title={`Ant Digital`} />
    <div className="px-8 py-16 mb-16">
      <div className="prose md:prose-xl">
        <h1>
          Delight Your Customers. <br /> Grow Your Business.
        </h1>

        <p className={"text-xl md:text-3xl"}>
          We help businesses increase customer reach and satisfaction through
          the use of modern web technologies.
        </p>
        <a className="cursor-pointer hover:text-primaryDark transition-colors duration-200 ease-in-out ">
          Learn how tech can help you
        </a>
      </div>
    </div>

    <div className="flex flex-col align-baseline md:flex-row mb-16 px-6 prose w-full max-w-full">
      <div className={"prose prose-lg flex-1 pt-8"}>
        <h2>What We Do</h2>
      </div>

      <div className="pr-6 flex-1">
        <h3>Web Development</h3>
        <p>We help you create beautiful and powerful websites , etc</p>
      </div>

      <div className="pr-6 flex-1">
        <h3>Digital Marketing</h3>
        <p>We help you build your online presence effectively,</p>
      </div>

      <div className="pr-6 flex-1">
        <h3>Graphic Design</h3>
        <p>Create beautiful and seamless design, etc</p>
      </div>
    </div>

    <div className="flex flex-col align-baseline md:flex-row mb-16 px-6 prose w-full max-w-full">
      <div className="flex-1">
        <div className={"prose prose-lg flex-1 pt-8 flex flex-col"}>
          <h2>Portofolio</h2>
          <a className="cursor-pointer hover:text-primaryDark transition-colors duration-200 ease-in-out ">
            See More
          </a>
        </div>
      </div>

      <div className="pr-6 flex-1">
        <h3>Portfolio 1</h3>
        <p>
          Let parents see and keep track of their child&apos;s progress through
          your school&apos;s curriculum in realtime.
        </p>
      </div>

      <div className="pr-6 flex-1">
        <h3>Portfolio 2</h3>
        <p>
          Let parents see and keep track of their child&apos;s progress through
          your school&apos;s curriculum in realtime.
        </p>
      </div>

      <div className="pr-6 flex-1">
        <h3>Portfolio 3</h3>
        <p>
          Allow parents to post observations at home about their children&apos;s
          task, and see observations that teachers had created.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
