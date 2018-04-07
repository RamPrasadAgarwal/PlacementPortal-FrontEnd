import React, { Component } from 'react';
import Form from '../Form/form';
import './editprofile.css';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorprofile: null,
      profile: [],
    };
    this.fetchProfileDetails();
  }
  fetchProfileDetails() {
    fetch('/profile', {
      method: 'GET',
      headers: { authtoken: window.localStorage.getItem('placementtoken') },
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          profile: response.profile,
        });
      });
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
                placeholder={this.state.profile.email ? this.state.profile.email : 'Email'}
                required
              />
              <input
                type="text"
                name="dob"
                placeholder={this.state.profile.dob ? this.state.profile.dob : 'Date of Birth (dd/mm/yyyy)'}
                required
              />
              <input
                type="number"
                name="phone"
                placeholder={this.state.profile.phone ? this.state.profile.phone : 'Contact Number (Without +91)'}
                max="9999999999"
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
                placeholder={this.state.profile.address ? this.state.profile.address : 'Address'}
                required
              />
              <br />

              <input
                type="text"
                name="xinstitute"
                placeholder={this.state.profile.xinstitute ? this.state.profile.xinstitute : 'Institution Attended in 10th Std'}
                required
              />
              <input
                type="text"
                name="xboard"
                placeholder={this.state.profile.xboard ? this.state.profile.xboard : '10th Board'}
                required
              />
              <input
                type="text"
                name="xmarks"
                placeholder={this.state.profile.xmarks ? this.state.profile.xmarks : '10th Marks'}
                required
              />
              <input
                type="number"
                name="xyear"
                placeholder={this.state.profile.xyear ? this.state.profile.xyear : '10th Passing Year'}
                required
              />
              <input
                type="text"
                name="xiiinstitute"
                placeholder={this.state.profile.xiiinstitute ? this.state.profile.xiiinstitute : 'Institution Attended in 12th Std'}
                required
              />
              <input
                type="text"
                name="xiiboard"
                placeholder={this.state.profile.xiiboard ? this.state.profile.xiiboard : '12th Board'}
                required
              />
              <input
                type="text"
                name="xiimarks"
                placeholder={this.state.profile.xiimarks ? this.state.profile.xiimarks : '12th Marks'}
                required
              />
              <input
                type="number"
                name="xiiyear"
                placeholder={this.state.profile.xiiyear ? this.state.profile.xiiyear : '12th Passing Year'}
                required
              />
              <input
                type="number"
                name="cetrank"
                placeholder={this.state.profile.cetrank ? this.state.profile.cetrank : 'CET Rank'}
                required
              />
              <input
                type="text"
                name="cgpa1"
                placeholder={this.state.profile.cgpa1 ? this.state.profile.cgpa1 : 'Semester 1 CGPA'}
                required
              />
              <input
                type="number"
                name="credit1"
                placeholder={this.state.profile.credit1 ? this.state.profile.credit1 : 'Credits Earned in Semester 1'}
                required
              />
              <input
                type="text"
                name="cgpa2"
                placeholder={this.state.profile.cgpa2 ? this.state.profile.cgpa2 : 'Semester 2 CGPA'}
                required
              />
              <input
                type="number"
                name="credit2"
                placeholder={this.state.profile.credit2 ? this.state.profile.credit2 : 'Credits Earned in Semester 2'}
                required
              />
              <input
                type="text"
                name="cgpa3"
                placeholder={this.state.profile.cgpa3 ? this.state.profile.cgpa3 : 'Semester 3 CGPA'}
                required
              />
              <input
                type="number"
                name="credit3"
                placeholder={this.state.profile.credit3 ? this.state.profile.credit3 : 'Credits Earned in Semester 3'}
                required
              />
              <input
                type="text"
                name="cgpa4"
                placeholder={this.state.profile.cgpa4 ? this.state.profile.cgpa4 : 'Semester 4 CGPA'}
                required
              />
              <input
                type="number"
                name="credit4"
                placeholder={this.state.profile.credit4 ? this.state.profile.credit4 : 'Credits Earned in Semester 4'}
                required
              />
              <input
                type="text"
                name="cgpa5"
                placeholder={this.state.profile.cgpa5 ? this.state.profile.cgpa5 : 'Semester 5 CGPA'}
                required
              />
              <input
                type="number"
                name="credit5"
                placeholder={this.state.profile.credit5 ? this.state.profile.credit5 : 'Credits Earned in Semester 5'}
                required
              />
              <input
                type="text"
                name="cgpa6"
                placeholder={this.state.profile.cgpa6 ? this.state.profile.cgpa6 : 'Semester 6 CGPA'}
                required
              />
              <input
                type="number"
                name="credit6"
                placeholder={this.state.profile.credit6 ? this.state.profile.credit6 : 'Credits Earned in Semester 6'}
                required
              />
              <input
                type="text"
                name="cgpa7"
                placeholder={this.state.profile.cgpa7 ? this.state.profile.cgpa7 : 'Semester 7 CGPA'}
                required
              />
              <input
                type="number"
                name="credit7"
                placeholder={this.state.profile.credit7 ? this.state.profile.credit7 : 'Credits Earned in Semester 7'}
                required
              />
              <input
                type="text"
                name="cgpa8"
                placeholder={this.state.profile.cgpa8 ? this.state.profile.cgpa8 : 'Semester 8 CGPA'}
                required
              />
              <input
                type="number"
                name="credit8"
                placeholder={this.state.profile.credit8 ? this.state.profile.credit8 : 'Credits Earned in Semester 8'}
                required
              />
              <input
                type="number"
                name="totalcredit"
                placeholder={this.state.profile.totalcredit ? this.state.profile.totalcredit : 'Total Credits Earned'}
                required
              />
              <input
                type="number"
                name="mutebacklog"
                placeholder={this.state.profile.mutebacklog ? this.state.profile.mutebacklog : 'No of Subjects Cleared In Mute'}
                required
              />
              <input
                type="number"
                name="clearbacklog"
                placeholder={this.state.profile.clearbacklog ? this.state.profile.clearbacklog : 'Cleared Arrears'}
                required
              />
              <input
                type="number"
                name="currentbacklog"
                placeholder={this.state.profile.currentbacklog ? this.state.profile.currentbacklog : 'Current Arrears'}
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
