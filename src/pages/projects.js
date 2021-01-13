import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.css'

const ProjectPage = () => {
    return (
        <div>
          <Layout>
          <h1 className={layoutStyles.title}>Luke's Projects</h1>
          <h2>Here I will list all my projects</h2>
          <p>Want to get in touch? <Link to="/contact">Contact Luke</Link></p>
          </Layout>
        </div>
    )
}

export default ProjectPage 