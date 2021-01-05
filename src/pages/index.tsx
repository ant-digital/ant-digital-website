import React, { FC } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button/Button"
// import WaveyBg from "../images/wavey-bg.svg"

const IndexPage: FC = () => {

  return (
    <Layout>
      <SEO
        title={`Record Keeping & Communication tool for Montessori Schools`}
      />
      <div className="justify-center pt-8 md:pt-16">
        <div className="md:flex items-center justify-center mb-32">
          <div className="prose prose-lg md:prose-lg max-w-xl px-4 w-full text-center">
            <h1 className="text-4xl md:text-5xl">
              Helping business stay competitive
            </h1>
            <div className="sm:flex mt-8 justify-center">
                <Button className="bg-red-400 sm:w-auto">
                  Learn More
                </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start mb-16 lg:mb-0 md:mt-64 relative">
        <h2 className="text-3xl md:text-5xl">
              What We Do
            </h2>
        </div>

        <div className="prose justify-center md:flex max-w-full mb-40 px-5">
          <div className="pr-6">
            <h3 >
              Web Development
            </h3>
            <p>
                We help you create beautiful and powerful websites , etc 
            </p>
          </div>

          <div className="pr-6">
          <h3>
              Digital Marketing
            </h3>
            <p>
                We help you build your online presence effectively, 
            </p>
          </div>

          <div className="pr-6">
            <h3>
              Graphic Design
            </h3>
            <p>
                Create beautiful and seamless design, etc
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start relative lg:mb-0 mb-16 mt-32">
          <div className="px-5 mt-5">
            <div className="prose prose-lg pr-6 max-w-xl">
            <h2 className="text-3xl md:text-5xl">
              Portfolios
            </h2>
              <p>
                
                  Collaboration between parents and schools are important,
                  especially in the post-COVID 19 world.
                
              </p>
              <p>
                We help you empower parents, providing custom dashboard for them
                to access and making it{" "}
                <GreenBold>
                  easy to share your data and collaborate with parents on their
                  child&apos;s education.
                </GreenBold>
              </p>
            </div>
          </div>
        </div>

        <div className="prose md:flex justify-between max-w-full px-4 mb-24">
          <div className="w-full pr-6">
            <h3>
              Share curriculum progress with parents
            </h3>
            <p>
              
                Let parents see and keep track of their child&apos;s progress
                through your school&apos;s curriculum in realtime.
              
            </p>
          </div>

          <div className="w-full pr-6">
            <h3>
              Share lesson plans
            </h3>
            <p>
              
                Share lesson plans/tasks that parents can execute at home, along
                with some resources to guide them.
              
            </p>
          </div>

          <div className="w-full pr-6">
            <h3>
              Collaborate on Observations
            </h3>
            <p>
              
                Allow parents to post observations at home about their
                children&apos;s task, and see observations that teachers had
                created.
              
            </p>
          </div>

          <div className="w-full">
            <h3>
              Share photos
            </h3>
            <p>
              
                Easily share photos of your students with their parents, and
                allow parents to post photos of their children doing tasks
                assigned to them outside of school.
              
            </p>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div
          className="
              border border-green-600
              rounded-3xl w-full
              py-8
              px-4
              flex flex-col items-center
              bg-primary
              bg-cover
              bg-center
              shadow-lg
              relative
              overflow-hidden
            "
        >
          {/* <img
            alt="decoration"
            src={WaveyBg}
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
          /> */}
          <div className="prose prose-lg mb-6 relative">
            <h2 className="text-center text-black mb-2">
              Try it now
            </h2>
            <p className="text-center text-black">
              Give it a try now with a 30-days free trial
            </p>
          </div>
          <a href="https://app.obserfy.com/register" className="block relative">
            <Button secondary className="border-green-600">
              Try for Free
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

const GreenBold: FC = ({ children }) => (
  <b className="text-green-700">{children}</b>
)

export default IndexPage
