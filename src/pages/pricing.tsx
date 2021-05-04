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

      <div className="m-8 p-8 border border-primary border-2 rounded-xl flex">
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
        <div className={"flex-1 prose border-l pl-8"}>
          <h3>Custom Price</h3>
          <p>
            Extend your website with custom feature and experiences tailored to
            your branding.
          </p>
        </div>
      </div>

      <div className="m-8 p-8 border border-green-400 border-2 rounded-xl flex">
        <div className={"flex-2 prose"}>
          <h2>E-commerce</h2>
          <p>
            Create blazing fast e-commerce website to build your own brand and
            reach more diverse customers.
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
        <div className={"flex-1 prose border-l pl-8"}>
          <h3>Custom Price</h3>
          <p>understand your business/company/product.</p>
        </div>
      </div>

      <div className="m-8 p-8 border border-red-400 border-2 rounded-xl flex">
        <div className={"flex-2 prose"}>
          <h2>Web Applications</h2>
          <p>
            Create blazing fast e-commerce website to build your own brand and
            react more diverse customers.
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
        <div className={"flex-1 prose border-l pl-8"}>
          <h3>Custom Price</h3>
          <p>understand your business/company/product.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Pricing
