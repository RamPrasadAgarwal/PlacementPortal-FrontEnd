import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Form from '../Form/form';
import './companyform.css';


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errortype: null,
      checked: Array(8).fill(false),
    };
    this.handleCheck = this.handleCheck.bind(this);
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
      deadline: data.get('deadlinedate'),
      ctc: data.get('salary'),
      jd: data.get('descript'),
      cse: this.state.checked[1],
      ise: this.state.checked[2],
      me: this.state.checked[3],
      ec: this.state.checked[4],
      eee: this.state.checked[5],
      ip: this.state.checked[6],
      cv: this.state.checked[7],
      xmarks: data.get('xmarks'),
      xiimarks: data.get('xiimarks'),
      history: data.get('history'),
      cgpa: data.get('cgpa'),
      venue: data.get('venue'),
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
    this.setState({});
  }
  handleCheck(e, i) {
    if (e.target.checked) {
      if (e.target.value === 'all') {
        this.setState({
          checked: Array(8).fill(true),
        });
      } else {
        const checked = this.state.checked.slice();
        checked[i] = true;
        this.setState({ checked });
        let count = 0;
        for (let j = 0; j < 8; j += 1) {
          if (checked[j] === true && checked[0] !== true) {
            count += 1;
          }
        }
        if (count === 7) {
          this.setState({
            checked: Array(8).fill(true),
          });
        }
      }
    } else if (!e.target.checked) {
      if (e.target.value === 'all') {
        this.setState({
          checked: Array(8).fill(false),
        });
      } else {
        const checked = this.state.checked.slice();
        checked[i] = false;
        this.setState({ checked });
        for (let j = 0; j < 8; j += 1) {
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
              <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Test Date &amp; Time</label>
              <input
                type="datetime-local"
                name="testdate"
                placeholder="Test Date (dd/mm/yyyy)"
                required
              />
              <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Interview Date &amp; Time</label>
              <input
                type="datetime-local"
                name="interviewdate"
                placeholder="Interview Date (dd/mm/yyyy)"
                required
              />
              <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Last Date For Acceptance From</label>
              <input
                type="datetime-local"
                name="deadlinedate"
                placeholder="Interview Date (dd/mm/yyyy)"
                required
              />
              <input
                type="text"
                name="venue"
                placeholder="Venue"
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
                name="descript"
                placeholder="Job Description.."
                required
              />
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
              <label className="container">Civil Engineering
                <input
                  onChange={e => this.handleCheck(e, 7)}
                  type="checkbox"
                  name="branch"
                  value="cv"
                  checked={this.state.checked[7]}
                />
                <span className="checkmark" />
              </label>
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
              </label><br />
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
