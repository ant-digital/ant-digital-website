import React, { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutUsPage: FC = () => (
  <Layout>
    <SEO title={`About Us`} />
    <div className="p-8 flex-row sm:flex my-16">
      <div className="flex-row justify-center w-full mr-3 prose prose-lg">
        <h1>A little about us</h1>
        <h3>
          Hello there ! <br></br>
        </h3>
        <p className="text-lg mt-8 mb-3 text-gray-700 font-body">
          We are a group of enthusiastic and passionate individuals who has
          expertise in Software Development, Design and Digital Marketing.{" "}
        </p>
        <p className="text-lg mt-8 mb-3 text-gray-700 font-body">
          Our goals is to help SMEs to grow their business by creating a digital
          presence for those businesses.We currently have helped more than 100
          SMEs to grow their business by assisting those businesses such as
          website development, design and digital marketing. We hoped to grow
          this number so that SMEs can have equal opportunities to grow their
          business.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutUsPage
