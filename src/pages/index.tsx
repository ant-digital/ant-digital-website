import React, { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Trans } from "@lingui/macro"

const IndexPage: FC = () => (
  <Layout>
    <SEO title={`Delight your customers and grow your business`} />

    <header className="px-8 py-16 md:py-32">
      <div className="prose md:prose-xl">
        <h1>
          <Trans>
            Delight Customers. <br /> Grow Your Business.
          </Trans>
        </h1>

        <p className={"text-xl md:text-3xl"}>
          <Trans>
            We help businesses increase customer reach and satisfaction through
            the use of modern technologies.
          </Trans>
        </p>
      </div>
    </header>

    <section className={"mb-32"}>
      <div className="p-8 prose prose-lg max-w-none">
        <h2 className="text-center">What we do</h2>
      </div>

      <div className="flex flex-col align-baseline md:flex-row mb-16 px-8 prose w-full max-w-full">
        <div className="pr-4 flex-1">
          <h3>
            <Trans>Web Development</Trans>
          </h3>
          <p>
            <Trans>
              Build beautiful, fast, and accessible websites to reach more
              customers.
            </Trans>
          </p>
          <Link to={"/web-development"}>
            <Trans>Learn more</Trans>
          </Link>
        </div>

        <div className="pr-4 flex-1">
          <h3>
            <Trans>E-commerce </Trans>
          </h3>
          <p>
            <Trans>We help you build your online presence effectively</Trans>
          </p>
          <Link to={"/e-commerce"}>
            <Trans>Learn more</Trans>
          </Link>
        </div>

        <div className="pr-4 flex-1">
          <h3>
            <Trans>Web and mobile apps</Trans>
          </h3>
          <p>
            <Trans>
              Create digital tools to help improve your business and your
              customer's workflows
            </Trans>
          </p>
          <Link to={"/apps"}>
            <Trans>Learn more</Trans>
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
          <h3>
            <Trans>Portfolio 1</Trans>
          </h3>
          <p>
            <Trans>
              Let parents see and keep track of their child&apos;s progress
              through your school&apos;s curriculum in realtime.
            </Trans>
          </p>
        </div>

        <div className="pr-4 flex-1">
          <h3>
            <Trans>Portfolio 2</Trans>
          </h3>
          <p>
            <Trans>
              Let parents see and keep track of their child&apos;s progress
              through your school&apos;s curriculum in realtime.
            </Trans>
          </p>
        </div>

        <div className="pr-4 flex-1">
          <h3>
            <Trans>Portfolio 3</Trans>
          </h3>
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
