import React from "react"
import Scrollchor from 'react-scrollchor';

//About class uses the base class but Pure, doesn't return component's functionality
//About class gets statements from index.js
class About extends React.PureComponent {
  //Render transforms React component to a DOM node that can be understood by the browser
  render() {
    //Upon rendering, will return the following HTMl
    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <a href="#">
              <div className="header-button red" />
            </a>
            <div className="header-button yellow" />
            <div className="header-button green" />
            <span> Aaron Wang — bash — </span>
          </div>
          <div className="terminal-window">
            {/* Will also return the statements which are updated by this component */}
            <Statements statements={this.props.statements} />
          </div>
        </div>
      </div>
    )
  }
}

//New class Statements that is returned to TerminalWindow
class Statements extends React.PureComponent {
  //Will send the following HTML when called
  render() {
    return (
      <div>
        {/* Map function that searches through props.statements and returns the statement and index for each 
        statement */}
        {this.props.statements.map((statement, index) => {
          //Returns to Statement class each statements as statement and key as index
          return <Statement statement={statement} key={index} />
        })}
        {/* Link to next section */}
        <div className="statement">
          <div className="input-statement">
            <u>Projects:</u>
          </div>
          <div className="return-statement">
            Click <Scrollchor to="#projects">here!</Scrollchor>
          </div>
        </div>

        {/* The extra empty statement at the end */}
        <div className="statement">
          <div className="input-statement">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    )
  }
}

//Statement class
class Statement extends React.PureComponent {
  //Sends the following to Statements class
  render() {
    return (
      //Div class statement and input-statement that styles the input accordingly and sends each
      //statement to Statements class which is rendered by the About class
      <div className="statement">
        <div
          className="input-statement"
          dangerouslySetInnerHTML={{ __html: this.props.statement.input }}
        />

        <div
          className="return-statement"
          dangerouslySetInnerHTML={{ __html: this.props.statement.return }}
        />
      </div>
    )
  }
}

export default About
