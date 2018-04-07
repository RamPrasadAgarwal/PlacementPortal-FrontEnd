import React, { Component } from 'react';
import Form from '../Form/form';
import './editprofile.css';


class EditProfile extends Component {
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
      email: data.get('email'),
      dob: data.get('dob'),
      sex: data.get('sex'),
      phone: data.get('phone'),
      address: data.get('address'),
      branch: data.get('branch'),
      xinstitute: data.get('xinstitute'),
      xboard: data.get('xboard'),
      xmarks: data.get('xmarks'),
      xyear: data.get('xyear'),
      xiiinstitute: data.get('xiiinstitute'),
      xiiboard: data.get('xiiboard'),
      xiimarks: data.get('xiimarks'),
      xiiyear: data.get('xiiyear'),
      cetrank: data.get('cetrank'),
      cgpa1: data.get('cgpa1'),
      credit1: data.get('credit1'),
      cgpa2: data.get('cgpa2'),
      credit2: data.get('credit2'),
      cgpa3: data.get('cgpa3'),
      credit3: data.get('credit3'),
      cgpa4: data.get('cgpa4'),
      credit4: data.get('credit4'),
      cgpa5: data.get('cgpa5'),
      credit5: data.get('credit5'),
      cgpa6: data.get('cgpa6'),
      credit6: data.get('credit6'),
      cgpa7: data.get('cgpa7'),
      credit7: data.get('credit7'),
      cgpa8: data.get('cgpa8'),
      credit8: data.get('credit8'),
      totalcredit: data.get('totalcredit'),
      mutebacklog: data.get('mutebacklog'),
      clearbacklog: data.get('clearbacklog'),
      currentbacklog: data.get('currentbacklog'),
      historybacklog: data.get('historybacklog'),
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
              formHeading={`Hi! ${window.localStorage.getItem('placementusername')}, Please provide your academic details`}
              buttonMessage="Login"
              submit={(e) => { this.profileedit(e); }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth (dd/mm/yyyy)"
                value=""
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Contact Number"
                value=""
                required
              />
              <select name="sex" placeholder="Sex">
                <option disabled selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
              </select>
              <select name="branch" placeholder="Branch">
                <option disabled selected>Branch</option>
                <option value="cse">Computer Science and Engineering</option>
                <option value="ise">Information Science and Engineering</option>
                <option value="me">Mechanical Engineering</option>
                <option value="ec">Electrical Engineering</option>
                <option value="eee">Electrical and Electronic Engineering</option>
                <option value="ip">Industrial Production</option>
              </select>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value=""
                required
              />
              <br />

              <input
                type="text"
                name="usn"
                placeholder="USN"
                value=""
                required
              />
              <input
                type="text"
                name="xinstitute"
                placeholder="Institution Attended in 10th Std"
                value=""
                required
              />
              <input
                type="text"
                name="xboard"
                placeholder="10th Board"
                value=""
                required
              />
              <input
                type="text"
                name="xmarks"
                placeholder="10th Marks"
                value=""
                required
              />
              <input
                type="text"
                name="xyear"
                placeholder="10th Passing Year"
                value=""
                required
              />
              <input
                type="text"
                name="xiiinstitute"
                placeholder="Institution Attended in 12th Std"
                value=""
                required
              />
              <input
                type="text"
                name="xiiboard"
                placeholder="12th Board"
                value=""
                required
              />
              <input
                type="text"
                name="xiimarks"
                placeholder="12th Marks"
                value=""
                required
              />
              <input
                type="text"
                name="xiiyear"
                placeholder="12th Passing Year"
                value=""
                required
              />
              <input
                type="text"
                name="cetrank"
                placeholder="CET Rank"
                value=""
                required
              />
              <input
                type="text"
                name="cgpa1"
                placeholder="1st Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit1"
                placeholder="Credits Obtained in 1st Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa2"
                placeholder="2nd Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit2"
                placeholder="Credits Obtained in 2nd Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa3"
                placeholder="3rd Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit3"
                placeholder="Credits Obtained in 3rd Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa4"
                placeholder="4th Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit4"
                placeholder="Credits Obtained in 4th Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa5"
                placeholder="5th Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit5"
                placeholder="Credits Obtained in 5th Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa6"
                placeholder="6th Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit6"
                placeholder="Credits Obtained in 6th Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa7"
                placeholder="7th Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit7"
                placeholder="Credits Obtained in 7th Sem"
                value=""
                required
              />
               <input
                type="text"
                name="cgpa8"
                placeholder="8th Sem CGPA"
                value=""
                required
              />
              <input
                type="text"
                name="credit8"
                placeholder="Credits Obtained in 8th Sem"
                value=""
                required
              />
               <input
                type="text"
                name="totalcredit"
                placeholder="Total Credits Obtained"
                value=""
                required
              />
              <input
                type="text"
                name="mutebacklog"
                placeholder="No of Subjects Cleared In Mute"
                value=""
                required
              />
               <input
                type="text"
                name="clearbacklog"
                placeholder="Cleared Arrears"
                value=""
                required
              />
              <input
                type="text"
                name="currentbacklog"
                placeholder="Current Arrears"
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

EditProfile.propTypes = {
};

EditProfile.defaultProps = {
};

export default EditProfile;
