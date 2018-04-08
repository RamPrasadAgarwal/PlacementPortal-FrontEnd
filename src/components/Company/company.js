import React, { Component } from 'react';
import Form from '../Form/form';
import './company.css';


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errortype: null,
    };
  }
  profileedit(e) {
    const authtoken = window.localStorage.getItem('placementtoken');
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      name: data.get('cname'),
      about: data.get('about'),
      position: data.get('position'),
      location: data.get('location'),
      test: data.get('testdate'),
      interview: data.get('interviewdate'),
      ctc: data.get('salary'),
      jd: data.get('descript'),
      branch: data.get('branch'),
      xmarks: data.get('xmarks'),
      xiimarks: data.get('xiimarks'),
      history: data.get('history'),
      cgpa: data.get('cgpa'),
      venue: data.get('venue'),
    };
    fetch('/comapny', {
      method: 'POST',
      headers: { authtoken },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.code === 201) {
          this.setState({
            errortype: 'Success',
          });
        } else {
          this.setState({
            errortype: 'Error',
          });
        }
        this.setState({
          error: response.message,
        });
      });
    this.setState({});
  }
  render() {
    return (
      <div className="signup-body-div">
        <div className="editprofile-body">
          <div className="profileForm">
            <Form
              error={this.state.error}
              errorType={this.state.errortype}
              formHeading={`Hi! ${window.localStorage.getItem('placementusername')}, Please provide the Company details`}
              buttonMessage="Login"
              submit={(e) => { this.profileedit(e); }}
            >
              <input
                type="text"
                name="cname"
                placeholder="Company Name"
                required
              />
              <textarea
                name="about"
                placeholder="About the Company.."
                required
              />
              <input
                type="text"
                name="testdate"
                placeholder="Test Date (dd/mm/yyyy)"
                required
              />
              <input
                type="text"
                name="interviewdate"
                placeholder="Interview Date (dd/mm/yyyy)"
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Job Location"
                required
              />
              <input
                type="text"
                name="salary"
                placeholder="Salary(CTC)"
                required
              />
              <textarea
                name="descript"
                placeholder="Job Description.."

                required
              />
              <select name="branch" placeholder="Branch" multiple>
                <option disabled selected>Branch</option>
                <option value="all">All</option>
                <option value="cse">Computer Science and Engineering</option>
                <option value="ise">Information Science and Engineering</option>
                <option value="me">Mechanical Engineering</option>
                <option value="ec">Electrical Engineering</option>
                <option value="eee">Electrical and Electronic Engineering</option>
                <option value="ip">Industrial Production</option>
                <option value="cv">Civil Engineering</option>
              </select>
              <input
                type="text"
                name="xmarks"
                placeholder="10th Percentage"
                value=""
                required
              />
              <input
                type="text"
                name="xiimarks"
                placeholder="12th Percentage"
                value=""
                required
              />
              <select name="history" placeholder="History">
                <option disabled selected>History</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input
                type="text"
                name="cgpa"
                placeholder="CGPA"
                value=""
                required
              />

            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Company.propTypes = {
};

Company.defaultProps = {
};

export default Company;
