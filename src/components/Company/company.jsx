import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './company.css';

function datetime(datetime) {
  return new Date(datetime).toLocaleString();
}
class Companyprof extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="profile">
          <h1>{this.props.company.name}</h1>
          {this.props.company.position}<br />
          {this.props.company.location}
          <hr />
        </div>
      </div>
    );
  }
}
class Descript extends Component {
  render() {
    return (
      <div>
        <b>{this.props.value}</b><br />
        {this.props.info}
      </div>
    );
  }
}
class Descript1 extends Component {
  render() {
    return (
      <div>
        <b>{this.props.value}</b><br />
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
        <h1>{this.props.company.name}</h1>
        <h3>{this.props.company.position}<br />
          {this.props.company.location}<hr />
          Deadline: {datetime(this.props.company.deadline)}
        </h3>
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
            value="Requirements"
            // info1="10th Percentage:"
            // info2="12th Percentage:{add the info here}"
            info3={`CGPA: ${this.props.company.cgpa}`}
          />
          <hr />
          <Descript1
            value="Requirements"
            info1={`Salary: ${this.props.company.ctc} Lacs`}
            info2={`Test Date: ${datetime(this.props.company.test)}`}
            info3={`Interview Date: ${datetime(this.props.company.interview)}`}
          />
          <hr />
          <br />
          <div className="form-submit1">
            <button
              type="submit"
              onClick={() => alert('remaining functionality')}
            >
              Register
            </button>
            <br /><br />
          </div>
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
    // if (this.state.isHidden) { return <Companyprof company={this.props.company} />; }
    return <Detail1 company={this.props.company} />;
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

