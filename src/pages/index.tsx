import React, { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title={`Ant Digital`} />
      <div className="justify-center pt-8 md:pt-16">
        <div className="md:flex items-center justify-center mb-32">
          <div className="prose prose-lg md:prose-lg max-w-xl px-4 w-full text-center">
            <h1 className="text-4xl md:text-5xl">
              Helping business stay competitive
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start mb-16 lg:mb-0 md:mt-64 relative">
          <h2 className="text-3xl md:text-5xl">What We Do</h2>
        </div>

        <div className="prose justify-center md:flex max-w-full mb-40 px-5">
          <div className="pr-6">
            <h3>Web Development</h3>
            <p>We help you create beautiful and powerful websites , etc</p>
          </div>

          <div className="pr-6">
            <h3>Digital Marketing</h3>
            <p>We help you build your online presence effectively,</p>
          </div>

          <div className="pr-6">
            <h3>Graphic Design</h3>
            <p>Create beautiful and seamless design, etc</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start relative lg:mb-0 mb-16 mt-32">
          <div className="px-5 mt-5">
            <div className="pr-6 max-w-xl">
              <h2 className="text-3xl md:text-5xl">Portfolios</h2>
            </div>
          </div>
        </div>

        <div className="prose md:flex justify-between max-w-full px-4 mb-24">
          <div className="w-full pr-6">
            <h3>Portfolio 1</h3>
            <p>
              Let parents see and keep track of their child&apos;s progress
              through your school&apos;s curriculum in realtime.
            </p>
          </div>

          <div className="w-full pr-6">
            <h3>Portfolio 2</h3>
            <p>
              Share lesson plans/tasks that parents can execute at home, along
              with some resources to guide them.
            </p>
          </div>

          <div className="w-full pr-6">
            <h3>Portfolio 3</h3>
            <p>
              Allow parents to post observations at home about their
              children&apos;s task, and see observations that teachers had
              created.
            </p>
          </div>

          <div className="w-full">
            <h3>Portfolio 4</h3>
            <p>
              Easily share photos of your students with their parents, and allow
              parents to post photos of their children doing tasks assigned to
              them outside of school.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
