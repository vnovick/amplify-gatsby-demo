import React from "react"
import { Link } from "gatsby"

import { withAuthenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify';

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  Auth.currentSession()
  .then(data => console.log(data))
  .catch(err => console.log(err));

  return (
    <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to protected page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default withAuthenticator(SecondPage)
