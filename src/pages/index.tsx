import React, { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { t, Trans } from "@lingui/macro"
import { StaticImage } from "gatsby-plugin-image"

const Services: FC<{
  to: string
  title: string
  description: string
  cta: string
  background: string
}> = ({ to, description, cta, title, background }) => (
  <Link
    to={to}
    className={`prose p-8 flex-1 !text-white rounded-xl m-4 shadow-skeuomorphic !no-underline !text-decoration-none ${background}`}
  >
    <h3 className={"!mt-0 !text-white"}>{title}</h3>
    <p>{description}</p>
    <p className={"!text-white flex items-center !my-0 font-serif opacity-90"}>
      {cta}
      <img
        src="/icons/arrow/short_right_white.svg"
        className="ml-auto !my-0"
        alt=""
      />
    </p>
  </Link>
)

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
      <h2 className="p-8 font-serif text-4xl">
        <Trans>Our services</Trans>
      </h2>

      <div className="flex flex-col align-baseline md:flex-row mb-16 w-full max-w-full px-4">
        <Services
          to={"/e-commerce"}
          background={"bg-gradient-to-br from-blue-700 to-purple-700"}
          title={t`Business Websites`}
          description={t`Showcase your business, build trust, and attract more customers through beautifully designed websites.`}
          cta={t`Build your brand`}
        />

        <Services
          to={"/e-commerce"}
          background={"bg-gradient-to-br from-emerald-600 to-green-700"}
          title={t`E-commerce`}
          description={t`Build fast e-commerce websites to build your own brand identity and sell to more diverse customers.`}
          cta={t`Reach more customers`}
        />

        <Services
          to={"/web-applications"}
          background={"bg-gradient-to-br from-rose-500 to-pink-700"}
          title={t`Web applications`}
          description={t`Create digital tools that helps improve your productivity and/or build better user experience for your customers.`}
          cta={t`Create better tools`}
        />
      </div>
    </section>

    <section>
      <h2 className="p-8 mb-8 font-serif text-4xl">
        <Trans>Recent projects</Trans>
      </h2>

      <div className="flex flex-col align-baseline md:flex-row mb-16 px-8 w-full max-w-full">
        <div className={"md:pr-8 flex-1 mb-16"}>
          <StaticImage
            src="../images/projects/joyful/home.png"
            alt={""}
            imgClassName="rounded-xl border"
            objectFit={"contain"}
            placeholder={"blurred"}
          />

          <div className="relative prose mt-4">
            <h3>Joyful Montessori</h3>
            <p className={"text-blue-700 bold font-serif"}>
              <Trans>Business Websites</Trans>
            </p>
            <p>
              <Trans>
                Joyful is a Montessori preschool that wants an improved and more
                consistent branding and digital presence.
              </Trans>
            </p>
          </div>
        </div>

        <div className={"md:pr-8 flex-1 mb-16"}>
          <StaticImage
            src="../images/projects/timetravelers/home.png"
            alt={""}
            imgClassName="rounded-xl border"
            objectFit={"contain"}
            placeholder={"blurred"}
          />

          <div className="relative prose mt-4">
            <h3>Timetravelers</h3>
            <p className={"text-emerald-700 bold font-serif"}>
              <Trans>E-commerce </Trans>
            </p>
            <p>
              <Trans>
                Timetravelers is a tour and travel agency that wants to expand
                to the digital market.
              </Trans>
            </p>
          </div>
        </div>

        <div className={"flex-1 mb-16"}>
          <StaticImage
            src="../images/projects/obserfy/home.png"
            alt={""}
            imgClassName="rounded-xl border"
            objectFit={"contain"}
            placeholder={"blurred"}
          />

          <div className="relative prose mt-4">
            <h3>Obserfy</h3>
            <p className={"text-red-700 bold font-serif"}>
              <Trans>Web applications</Trans>
            </p>
            <p>
              <Trans>
                Obserfy is a software that helps Montessori schools to keep
                track of their students data and share them with parents.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
