import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import layoutStyles from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <div className={layoutStyles.body}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout