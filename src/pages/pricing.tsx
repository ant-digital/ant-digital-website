import React from "react"
import Layout from "../components/Layout"

const Pricing = () => {
  return (
    <Layout>
      <div className={"flex flex-col items-center"}>
        <header className={"p-8 prose my-16 text-center"}>
          <h1>Affordable Pricing</h1>
        </header>
      </div>

      <div className="m-8 p-2 rounded-xl bg-gradient-to-br from-blue-700 to-purple-700">
        <div className={"bg-white rounded-xl p-8 w-full lg:flex"}>
          <div className={"flex-2 prose"}>
            <h2 className={"!mt-0 mr-auto"}>Business Websites</h2>
            <p>
              Build blazing fast informative websites that helps your customers
              understand your business/company/product.
            </p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
          <div className={"flex-1 prose lg:border-l lg:pl-8 pt-8 lg:pt-0"}>
            <h3>Custom Price</h3>
            <p>
              Extend your website with custom feature and experiences tailored
              to your branding.
            </p>
          </div>
        </div>
      </div>

      <div className="m-8 p-2 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700">
        <div className={"bg-white rounded-xl p-8 w-full lg:flex"}>
          <div className={"flex-2 prose"}>
            <h2 className={"!mt-0 mr-auto"}>E-commerce</h2>
            <p>
              Build blazing fast informative websites that helps your customers
              understand your business/company/product.
            </p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
          <div className={"flex-1 prose lg:border-l lg:pl-8 pt-8 lg:pt-0"}>
            <h3>Custom Price</h3>
            <p>
              Extend your website with custom feature and experiences tailored
              to your branding.
            </p>
          </div>
        </div>
      </div>

      <div className="m-8 p-2 rounded-xl bg-gradient-to-br from-rose-500 to-pink-700">
        <div className={"bg-white rounded-xl p-8 w-full lg:flex"}>
          <div className={"flex-2 prose"}>
            <h2 className={"!mt-0 mr-auto"}>Web Applications</h2>
            <p>
              Build blazing fast informative websites that helps your customers
              understand your business/company/product.
            </p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
          <div className={"flex-1 prose lg:border-l lg:pl-8 pt-8 lg:pt-0"}>
            <h3>Custom Price</h3>
            <p>
              Extend your website with custom feature and experiences tailored
              to your branding.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pricing
