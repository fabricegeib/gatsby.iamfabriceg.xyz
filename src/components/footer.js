import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer className="container">
        {/* <p><Link to="/page-2/">Go to page 2</Link></p> */}
        {/* <p><Link to="/live/">Go to live</Link></p> */}
        <div id="about">
            <ul className="links">
                <li>
                    <a className="instagram" href="https://www.instagram.com/iamfabriceg/" rel="noopener noreferrer"
                        target="_blank">instagram</a>
                </li>
                <li>
                    <a className="mixer" href="https://mixer.com/iamfabriceg" rel="noopener noreferrer"
                        target="_blank">mixer</a>
                </li>
                <li>
                    <a className="twitch" rel="noopener noreferrer" href="https://www.twitch.tv/iamfabriceg"
                        target="_blank">twitch</a>
                </li>
                <li>
                    <a className="twitter" href="https://twitter.com/iamfabriceg" rel="noopener noreferrer"
                        target="_blank">twitter</a>
                </li>
                <li>
                    <a className="youtube" rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UCKv4GgFKQvPG2rt3MOZK8Xg/">youtube</a>
                </li>
            </ul>
            <Link className="link--live" to="/live">déconnecté</Link>
        </div>
        <p>
            © {new Date().getFullYear()}, Built with ❤️ &
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
    </footer>
)

export default Footer