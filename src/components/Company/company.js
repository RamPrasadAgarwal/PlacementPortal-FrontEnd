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
      checked: Array(7).fill(false),
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  profileedit(e) {
    const authtoken = window.localStorage.getItem('placementtoken');
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      name: data.get('name'),
      about: data.get('about'),
      position: data.get('position'),
      location: data.get('location'),
      test: data.get('testdate'),
      interview: data.get('interviewdate'),
      ctc: data.get('salary'),
      jd: data.get('jd'),
      cse: data.get('branch') === 'all' || data.get('branch' === 'cse'),
      ise: data.get('branch') === 'all' || data.get('branch' === 'ise'),
      ec: data.get('branch') === 'all' || data.get('branch' === 'ec'),
      me: data.get('branch') === 'all' || data.get('branch' === 'me'),
      eee: data.get('branch') === 'all' || data.get('branch' === 'eee'),
      ip: data.get('branch') === 'all' || data.get('branch' === 'ip'),
      cv: data.get('branch') === 'all' || data.get('branch' === 'cv'),
      branch: data.get('branch'),
      xmarks: data.get('xmarks'),
      xiimarks: data.get('xiimarks'),
      history: data.get('history'),
      cgpa: data.get('cgpa'),
      venue: data.get('venue'),
      deadline: data.get('deadline'),
    };
    fetch('/company', {
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
  }
  handleCheck(e, i) {
    if (e.target.checked) {
      if (e.target.value === 'all') {
        this.setState({
          checked: Array(7).fill(true),
        });
      } else {
        const checked = this.state.checked.slice();
        checked[i] = true;
        this.setState({ checked });
        let count = 0;
      	for (var i = 0; i < 7; i++) {
      	  if (checked[i] === true && checked[0] !== true) {
      		  count++;
      	   }
      	}
      	if (count == 6) {
      	  this.setState({
            checked: Array(7).fill(true),
          });
      	}
      }
    } else if (!e.target.checked) {
      if (e.target.value === 'all') {
        this.setState({
          checked: Array(7).fill(false),
        });
      } else {
        const checked = this.state.checked.slice();
        checked[i] = false;
        this.setState({ checked });
        for (let j = 0; j < 7; j += 1) {
          if (checked[j] === false && checked[0] === true) {
            checked[0] = false;
            this.setState({ checked });
          }
        }
      }
    }
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
                name="name"
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
              <Textarea
                maxRows={5}
                minRows={5}
                name="jd"
                placeholder="Job Description.."
                required
              />
              <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Branch</label><br /><br />
              <input
                type="text"
                name="cgpa"
                placeholder="CGPA"
                required
              />
              <input
                type="text"
                name="xmarks"
                placeholder="10th Percentage"
                required
              />
              <input
                type="text"
                name="xiimarks"
                placeholder="12th Percentage"
                required
              />
              <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Branch</label><br /><br />

              <label className="container">All
                <input
                  onChange={e => this.handleCheck(e, 0)}
                  type="checkbox"
                  name="branch"
                  value="all"
                  checked={this.state.checked[0]}
                />
                <span className="checkmark" />
              </label>
              <label className="container">Computer Science and Engineering
                <input
                  onChange={e => this.handleCheck(e, 1)}
                  type="checkbox"
                  name="branch"
                  value="cse"
                  checked={this.state.checked[1]}
                />
                <span className="checkmark" />
              </label>
              <label className="container">Information Science
                <input
                  onChange={e => this.handleCheck(e, 2)}
                  type="checkbox"
                  name="branch"
                  value="ise"
                  checked={this.state.checked[2]}
                />
                <span className="checkmark" />
              </label>
              <label className="container">Mechanical Engineering
                <input
                  onChange={e => this.handleCheck(e, 3)}
                  type="checkbox"
                  name="branch"
                  value="me"
                  checked={this.state.checked[3]}
                />
                <span className="checkmark" />
              </label>
              <label className="container">Electronics Engineering
                <input
                  onChange={e => this.handleCheck(e, 4)}
                  type="checkbox"
                  name="branch"
                  value="ec"
                  checked={this.state.checked[4]}
                />
                <span className="checkmark" />
              </label>
              <label className="container">Electronics and Electrical Engineering
                <input
                  onChange={e => this.handleCheck(e, 5)}
                  type="checkbox"
                  name="branch"
                  value="eee"
                  checked={this.state.checked[5]}
                />
                <span className="checkmark" />
              </label>
              <label className="container">Industrial Production
                <input
                  onChange={e => this.handleCheck(e, 6)}
                  type="checkbox"
                  name="branch"
                  value="ip"
                  checked={this.state.checked[6]}
                />
                <span className="checkmark" />
              </label>

              <input
                type="number"
                name="xmarks"
                placeholder="10th Percentage"
                step="10"
                required
              />
              <input
                type="text"
                name="xiimarks"
                placeholder="12th Percentage"
                required
              />
              <br /><br />

              <label style={{ fontSize: '22px', paddingLeft: '5%' }} >History</label><br /><br />
              <label className="container1">Yes
                <input
                  type="radio"
                  name="history"
                  value="yes"
                  required
                /> <span className="checkmark1" />
              </label>
              <label className="container1">No
                <input
                  type="radio"
                  name="history"
                  value="no"
                  required
                /> <span className="checkmark1" />
              </label>
              <input
                type="text"
                name="cgpa"
                placeholder="CGPA"
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
              /><input
                type="text"
                name="venue"
                placeholder="Interview Venue"
                required
              />
              <input
                type="text"
                name="venue"
                placeholder="Last Day to Accpet Forms"
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
