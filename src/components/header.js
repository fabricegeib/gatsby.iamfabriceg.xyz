import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }, {siteAuthor}) => (
  <header className="header">
    <div className="header__container">
      <h1>
        <Link to="/">{siteTitle}</Link>
        {/* <Link to="/">{data.site.siteMetadata.author}</Link> */}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
