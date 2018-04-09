import React, { Component } from 'react';
import Form from '../Form/form';
import Textarea from 'react-textarea-autosize';
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
          <div className="company-form">
            <Form
              error={this.state.error}
              errorType={this.state.errortype}
              formHeading={`Hi! ${window.localStorage.getItem('placementusername')}, Please provide the Company details`}
              buttonMessage="Register Company"
              submit={(e) => { this.profileedit(e); }}
            >
              <input
                type="text"
                name="cname"
                placeholder="Company Name"
                required
              />
              <Textarea
                maxRows={5}
                minRows={5}
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
                placeholder="Salary (CTC)"
                required
              />
              <textarea
                name="descript"
                placeholder="Job Description.."
                required
              />
              <label >Branch</label>
              <label className="container">All
                <input
                  type="checkbox"
                  name="branch"
                  value="all"
                  required
                />
                <span className="checkmark" />
              </label>
              <label className="container">Computer Science and Engineering
                <input
                  type="checkbox"
                  name="branch"
                  value="cse"
                  required
                />
                <span className="checkmark" />
              </label>
              <label className="container">Information Science
                <input
                  type="checkbox"
                  name="branch"
                  value="ise"
                  required
                />
                <span className="checkmark" />
              </label>
              <label className="container">Mechanical Engineering
                <input
                  type="checkbox"
                  name="branch"
                  value="me"
                  required
                />
                <span className="checkmark" />
              </label>
              <label className="container">Electronics Engineering
                <input
                  type="checkbox"
                  name="branch"
                  value="ec"
                  required
                />
                <span className="checkmark" />
              </label>
              <label className="container">Electronics and Electrical Engineering
                <input
                  type="checkbox"
                  name="branch"
                  value="eee"
                  required
                />
                <span className="checkmark" />
              </label>
              <label className="container">Industrial Production
                <input
                  type="checkbox"
                  name="branch"
                  value="ip"
                  required
                />
                <span className="checkmark" />
              </label>

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
