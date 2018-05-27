import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './company.css';

function datetime(dateTime) {
  return new Date(dateTime).toLocaleString();
}
class Companybanner extends Component {
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
            {window.localStorage.getItem('placementispc') === 'true' ?
              <span className="company-setting">
                <button
                  type="submit"
                  onClick={() => this.props.history.push('/companylist', { companyId: this.props.company.id })}
                >
                  <img src="./list-icon.png" alt="List of Students" className="list-icon" />
                </button>
              </span>
            : ''}
          </span>
        </h1>
      </div>
    );
  }
}
class CompanyHeading extends Component {
  render() {
    return (
      <div>
        <div className="subheading">{this.props.value}</div>
        {this.props.info}
      </div>
    );
  }
}
class CompanyHeading1 extends Component {
  render() {
    return (
      <div>
        <div className="subheading">{this.props.value}</div>
        {this.props.info1}<br />
        {this.props.info2}<br />
        {this.props.info3}<br />
      </div>
    );
  }
}
class CompanyFullDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerState: '',
    };
  }
  componentWillMount() {
    this.setRegisterState(this.props.registerState);
  }
  setRegisterState(registerStatus) {
    if (registerStatus === 0) {
      this.setState({
        registerState: 'Register For Company',
      });
    } else if (registerStatus === 1) {
      this.setState({
        registerState: 'You Are Registered, Click to Un-register',
      });
    } else {
      this.setState({
        registerState: 'Error Occured! Please Refresh',
      });
    }
  }

  registerCompany(companyId) {
    const authtoken = window.localStorage.getItem('placementtoken');
    const payload = {
      companyId,
    };
    fetch('/register', {
      method: 'POST',
      headers: { authtoken },
      body: JSON.stringify(payload),
    }).then(response => response.json())
      .then((response) => {
        this.setRegisterState(response.message);
      });
  }
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
        {this.props.company.position}<br />
        {this.props.company.location}<hr />
          Deadline: {datetime(this.props.company.deadline)}<br />
          CTC: {`${this.props.company.ctc} Lacs`}
        <hr />
        <div>
          <CompanyHeading
            value="Job Description"
            info={this.props.company.jd}
          />
          <hr />
          <CompanyHeading
            value="About Company"
            info={this.props.company.about}
          />
          <hr />
          <CompanyHeading1
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
          <CompanyHeading1
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
            onClick={() => {
              this.registerCompany(this.props.company.id);
              this.props.toggleRegister();
            }}
          >
            {this.state.registerState}
          </button>
          <br />
        </div>
      </div>
    );
  }
}
class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      registerState: null,
    };
  }
  componentWillMount() {
    this.setState({
      registerState: this.props.company.registerStatus,
    });
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  toggleStatus() {
    this.setState({
      registerState: (this.state.registerState + 1) % 2,
    });
  }
  show() {
    if (this.state.isHidden) {
      return (<Companybanner
        company={this.props.company}
        toggle={() => this.toggleHidden()}
        toggleState={this.state.isHidden}
        history={this.props.history}
      />);
    } else if (this.state.registerState !== null) {
      return (<CompanyFullDetail
        company={this.props.company}
        registerState={this.state.registerState}
        toggleRegister={() => this.toggleStatus()}
        toggle={() => this.toggleHidden()}
        toggleState={this.state.isHidden}
      />);
    }
    return 'Please Wait';
  }
  render() {
    return (
      <div>
        {this.show()}
      </div>
    );
  }
}
export default withRouter(Company);
