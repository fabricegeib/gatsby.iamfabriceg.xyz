// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
<footer>
    {/* <p><Link to="/page-2/">Go to page 2</Link></p> */}
    {/* <p><Link to="/live/">Go to live</Link></p> */}
    <div id="about">
        <ul class="links">
            <li>
                <a class="instagram" href="https://www.instagram.com/iamfabriceg/" rel="noopener noreferrer"
                    target="_blank">instagram</a>
            </li>
            <li>
                <a class="mixer" href="https://mixer.com/iamfabriceg" rel="noopener noreferrer"
                    target="_blank">mixer</a>
            </li>
            <li>
                <a class="twitch" rel="noopener noreferrer" href="https://www.twitch.tv/iamfabriceg"
                    target="_blank">twitch</a>
            </li>
            <li>
                <a class="twitter" href="https://twitter.com/iamfabriceg" rel="noopener noreferrer"
                    target="_blank">twitter</a>
            </li>
            <li>
                <a class="youtube" rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCKv4GgFKQvPG2rt3MOZK8Xg/">youtube</a>
            </li>
        </ul>
    </div>
    © {new Date().getFullYear()}, Built with ❤️ &
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
</footer>
)

export default Footer