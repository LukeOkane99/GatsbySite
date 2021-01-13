import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <div>
      <Layout>
      <h1 className={layoutStyles.title}>Welcome to my Site!</h1>
      <h2>I will use this site to display notable projects I have worked on</h2>
      <p>Want to get in touch? <Link to="/contact">Contact Luke</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage