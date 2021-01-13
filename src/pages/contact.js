import React from 'react'
import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.css'

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <h1 className={layoutStyles.title}>Contact Luke</h1>
            <p><b>Email:</b> <a href = "mailto: theofficiallukeokane@gmail.com">theofficiallukeokane@gmail.com</a></p>
            <p><b>Number:</b> 07925832582</p>
            <p><b>LinkedIn:</b> <a href = "https://www.linkedin.com/in/luke-o-kane-aa91361b9/?originalSubdomain=uk" target='_blank'>My LinkedIn</a></p>
            </Layout>
        </div>
    )
}

export default ContactPage