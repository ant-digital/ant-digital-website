import React, { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Trans } from "@lingui/macro"

const IndexPage: FC = () => (
  <Layout>
    <SEO title={`Delight your customers and grow your business`} />

    <header className="px-8 pb-32 pt-16 md:py-48">
      <div className="prose prose-lg md:prose-xl">
        <h1 className={"!text-gray-500"}>
          <Trans>
            We build <span className={"text-black"}>blazing fast</span> websites
            and <span className={"text-black"}>digital experiences.</span>
          </Trans>
        </h1>

        <p className={"text-xl md:text-3xl"}>
          <Trans>
            We help your business increase customer reach and satisfaction
            through the use of modern web technologies.
          </Trans>
        </p>
      </div>
    </header>

    <section className={"mb-32"}>
      <div className="p-8 prose prose-lg max-w-none">
        <h2 className="text-center">Work with us</h2>
      </div>

      <div className="flex flex-col align-baseline md:flex-row mb-16 prose w-full max-w-full px-4">
        <div className="p-8 flex-1 text-white rounded-xl !m-4 shadow-skeuomorphic bg-gradient-to-br from-blue-700 to-purple-700">
          <h3 className={"!mt-0 !text-white"}>
            <Trans>Business Websites</Trans>
          </h3>
          <p>
            <Trans>
              Showcase your business, build trust, and attract more customers
              through beautifully designed websites.
            </Trans>
          </p>
          <Link to={"/websites"} className={"!text-white"}>
            <Trans>Build your brand</Trans>
          </Link>
        </div>

        <div className="p-8 flex-1 text-white rounded-xl m-4 shadow-skeuomorphic bg-gradient-to-br from-emerald-600 to-green-700">
          <h3 className={"!mt-0 !text-white"}>
            <Trans>E-commerce</Trans>
          </h3>

          <p>
            <Trans>
              Build fast e-commerce websites to build your own brand identity
              and sell to more diverse customers.
            </Trans>
          </p>

          <Link to={"/e-commerce"} className={"!text-white"}>
            <Trans>Reach more customers</Trans>
          </Link>
        </div>

        <div className="p-8 flex-1 text-white rounded-xl !m-4 shadow-skeuomorphic bg-gradient-to-br from-rose-500 to-pink-700">
          <h3 className={"!mt-0 !text-white"}>
            <Trans>Web applications</Trans>
          </h3>
          <p>
            <Trans>
              Create digital tools that helps improve your productivity and/or
              build better user experience for your customers.
            </Trans>
          </p>
          <Link to={"/web-applications"} className={"!text-white font-bold"}>
            <Trans>Create better tools</Trans>
          </Link>
        </div>
      </div>
    </section>

    <section>
      <div className="p-8 prose prose-lg max-w-none">
        <h2 className="text-center">
          <Trans>Case Studies</Trans>
        </h2>
      </div>

      <div className="flex flex-col align-baseline md:flex-row mb-16 px-8 prose w-full max-w-full">
        <div className="pr-4 flex-1">
          <h3>Joyful Montessori</h3>
          <p>
            <Trans>
              Let parents see and keep track of their child&apos;s progress
              through your school&apos;s curriculum in realtime.
            </Trans>
          </p>
        </div>

        <div className="pr-4 flex-1">
          <h3>TimeTravelers</h3>
          <p>
            <Trans>
              Let parents see and keep track of their child&apos;s progress
              through your school&apos;s curriculum in realtime.
            </Trans>
          </p>
        </div>

        <div className="pr-4 flex-1">
          <h3>Obserfy</h3>
          <p>
            <Trans>
              Allow parents to post observations at home about their
              children&apos;s task, and see observations that teachers had
              created.
            </Trans>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
