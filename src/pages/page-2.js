import React from "react"
import { Link } from "gatsby"

import { withAuthenticator } from 'aws-amplify-react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to protected page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withAuthenticator(SecondPage)
