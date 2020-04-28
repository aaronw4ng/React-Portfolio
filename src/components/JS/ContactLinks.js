import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/aaronw4ng"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:wangaaro@usc.edu"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/aaronw4ng"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aaronw4ng/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
      </div>
    )
  }
}

export default ContactLinks
