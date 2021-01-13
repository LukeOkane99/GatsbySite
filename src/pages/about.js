import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.css'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h1 className={layoutStyles.title}>About Me</h1>
            <p>My Name is Luke and I am a final year Computer Science student at Ulster University Magee. I have a passion for programming, developing web applications and websites and learning new things. I am also very interested in gaming, music, playing guitar, and weightlifting.</p>
            <p>I am currently working part time as a ESP System's Engineer at CME Group after successful completion of my placement year with the company. I have experience in scripting with Powershell, Python, C#, C++ and Java. I have also used Chef.io for configuration management and Chocolatey for package management. I have experience with different web frameworks such as Flask for Python, the ASP.Net framework with C# and Gatsby JS which was used to make this site!</p>
            <p>Want to get in touch? <Link to="/contact">Contact Luke</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage