/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
// import "./style.css"

import ReactGA from 'react-ga';
ReactGA.initialize('G-1NDRFY4PZ6');
ReactGA.pageview(location.pathname + location.search);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author,
          twitter,
        }
      }
    }
  `)

  return (
    <div className="application">
      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="container">
        <main>{children}</main>
      </div>
      
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
