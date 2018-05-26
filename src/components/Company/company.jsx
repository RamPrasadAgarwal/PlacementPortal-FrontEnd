import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './company.css';

function datetime(dateTime) {
  return new Date(dateTime).toLocaleString();
}
class Companyprof extends Component {
  render() {
    return (
      <div className="profile">
        <h1>
          {this.props.company.name}
          <span className="toggle-button">
            <button
              type="submit"
              onClick={() => this.props.toggle()}
            >
              {this.props.toggleState ? 'Expand' : 'Collapse'}
            </button>
          </span>
        </h1>
      </div>
    );
  }
}
class Descript extends Component {
  render() {
    return (
      <div>
        <b>{this.props.value}</b><br /><br />
        {this.props.info}
      </div>
    );
  }
}
class Descript1 extends Component {
  render() {
    return (
      <div>
        <b>{this.props.value}</b><br /><br />
        {this.props.info1}<br />
        {this.props.info2}<br />
        {this.props.info3}<br />
      </div>
    );
  }
}
class Detail1 extends Component {
  render() {
    return (
      <div className="profile1">
        <h1>
          {this.props.company.name}
          <span className="toggle-button">
            <button
              type="submit"
              onClick={() => this.props.toggle()}
            >
              {this.props.toggleState ? 'Expand' : 'Collapse'}
            </button>
          </span>
        </h1>
        <h3>{this.props.company.position}<br />
          {this.props.company.location}<hr />
        </h3>
        <h4>
          Deadline: {datetime(this.props.company.deadline)}<br />
          CTC: {`${this.props.company.ctc} Lacs`}
        </h4>
        <hr />
        <div>
          <Descript
            value="Job Description"
            info={this.props.company.jd}
          />
          <hr />
          <Descript
            value="About Company"
            info={this.props.company.about}
          />
          <hr />
          <Descript1
            value="Eligibilty"
            info1={`CGPA: ${this.props.company.cgpa}`}
            info2={`Branches: 
            ${this.props.company.cse ? 'CSE ' : ''}
            ${this.props.company.ise ? 'ISE ' : ''}
            ${this.props.company.ec ? 'EC ' : ''}
            ${this.props.company.eee ? 'EEE ' : ''}
            ${this.props.company.ip ? 'IP ' : ''}
            ${this.props.company.cv ? 'CV ' : ''}
            ${this.props.company.me ? 'ME ' : ''}
            `}
            info3={`History Backlog: ${this.props.company.history ? 'Allowed' : 'Not Allowed'}`}
          />
          <hr />
          <Descript1
            value="Process Details"
            info1={`Test Date: ${datetime(this.props.company.test)}`}
            info2={`Interview Date: ${datetime(this.props.company.interview)}`}
            info3={`Venue: ${this.props.company.venue}`}
          />
          <hr />
          <br />
        </div>
        <div className="form-submit1">
          <button
            type="submit"
            onClick={() => alert('remaining functionality')}
          >
              Register For Company
          </button>
          <br /><br />
        </div>
      </div>
    );
  }
}
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  show() {
    if (this.state.isHidden) {
      return (<Companyprof
        company={this.props.company}
        toggle={() => this.toggleHidden()}
        toggleState={this.state.isHidden}
      />);
    }
    return (<Detail1
      company={this.props.company}
      toggle={() => this.toggleHidden()}
      toggleState={this.state.isHidden}
    />);
  }
  render() {
    return (
      <div>
        {this.show()}

      </div>
    );
  }
}
export default withRouter(Detail);

