import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener noreferrer" target="_blank" href="mailto:wangaaro@usc.edu">
            Email
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aaronw4ng/"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/aaronw4ng">
            Github
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
