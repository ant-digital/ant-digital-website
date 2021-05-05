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
        <h1>
          <Trans>We build blazing fast websites and digital experiences.</Trans>
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
        <h2 className="text-center">What we do</h2>
      </div>

      <div className="flex flex-col align-baseline md:flex-row mb-16 px-8 prose w-full max-w-full">
        <div className="pr-4 flex-1">
          <h3>
            <Trans>Business Websites</Trans>
          </h3>
          <p>
            <Trans>
              Showcase your business, build trust, and attract more customers
              through beautifully designed websites.
            </Trans>
          </p>
          <Link to={"/websites"}>
            <Trans>Learn more</Trans>
          </Link>
        </div>

        <div className="pr-4 flex-1">
          <h3>
            <Trans>E-commerce</Trans>
          </h3>

          <p>
            <Trans>
              Build fast e-commerce websites to build your own brand identity
              and sell to more diverse customers.
            </Trans>
          </p>

          <Link to={"/e-commerce"}>
            <Trans>Learn more</Trans>
          </Link>
        </div>

        <div className="pr-4 flex-1">
          <h3>
            <Trans>Web applications</Trans>
          </h3>
          <p>
            <Trans>
              Create digital tools that helps improve your productivity and/or
              build better user experience for your customers.
            </Trans>
          </p>
          <Link to={"/web-applications"}>
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
