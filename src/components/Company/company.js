import React, { Component } from 'react';
import Form from '../Form/form';
import './company.css';


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorprofile: null,
    };
  }
  componentDidMount() {
    const authtoken = window.localStorage.getItem('placementtoken');
    fetch('/profile', {
      method: 'GET',
      headers: { authtoken },
    })
      .then(response => response.json())
      .then(console.log);
  }
  profileedit(e) {
    const authtoken = window.localStorage.getItem('placementtoken');
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      fullname: window.localStorage.getItem('placementusername'),
      cname: data.get('cname'),
      about: data.get('about'),
      position: data.get('position'),
      location: data.get('location'),
      testdate: data.get('testdate'),
      interviewdate: data.get('interviewdate'),
      salary: data.get('salary'),
      descript: data.get('descript'),
      branch: data.get('branch'),
      xmarks: data.get('xmarks'),
      xiimarks: data.get('xiimarks'),
      history: data.get('history'),
      cgpa: data.get('cgpa'),
    };
    fetch('/profile', {
      method: 'POST',
      headers: { authtoken },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(console.log);
    this.setState({});
  }
  render() {
    return (
      <div className="signup-body-div">
        <div className="editprofile-body">
          <div className="profileForm">
            <Form
              error={this.state.errorprofile}
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
                value=""
                required
              />
              <input
                type="text"
                name="interviewdate"
                placeholder="Interview Date (dd/mm/yyyy)"
                value=""
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                value=""
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Job Location"
                value=""
                required
              />
              <input
                type="text"
                name="salary"
                placeholder="Salary(CTC)"
                value=""
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
              </select>
              <input
                type="text"
                name="xper"
                placeholder="10th Percentage"
                value=""
                required
              />
              <input
                type="text"
                name="xiiper"
                placeholder="12th Percentage"
                value=""
                required
              />
              <select name="history" placeholder="History">
                <option disabled selected>History</option>
                <option value="Male">Yes</option>
                <option value="Male">No</option>
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
