import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
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
      xiiboard: parseFloat(data.get('xiiboard')),
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
      historybacklog: data.get('mutebacklog') + data.get('clearbacklog') ? 1 : 0,
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
    console.log(this.state.profile.currentbacklog);
    return (
      <div className="signup-body-div">
        <div className="editprofile-body">
          <div className="profileForm">
            <Form
              error={this.state.errorprofile}
              formHeading={`Hi! ${window.localStorage.getItem('placementusername')}, Please provide your academic details`}
              buttonMessage="Submit"
              submit={(e) => { this.profileedit(e); }}
            >
              <input
                type="email"
                name="email"
                placeholder={this.state.profile.email ? this.state.profile.email : 'Email'}
              />
              <input
                type="text"
                name="dob"
                placeholder={this.state.profile.dob ? this.state.profile.dob : 'Date of Birth (dd/mm/yyyy)'}
              />
              <input
                type="number"
                name="phone"
                placeholder={this.state.profile.phone ? this.state.profile.phone : 'Contact Number (Without +91)'}
                max="9999999999"
              />
              <label style={{ fontSize: '22px', paddingLeft: '40px' }} >Gender</label>
              <label className="container1">Male
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                /> <span className="checkmark1" />
              </label>
              <label className="container1">Female
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                /> <span className="checkmark1" />
              </label>
              <label style={{ fontSize: '22px', paddingLeft: '40px' }} >Branch</label>
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
              <Textarea
                maxRows={5}
                minRows={5}
                name="address"
                placeholder={this.state.profile.address ? this.state.profile.address : 'Address'}
              />
              <br />

              <input
                type="text"
                name="xinstitute"
                placeholder={this.state.profile.xinstitute ? this.state.profile.xinstitute : 'Institution Attended in 10th Std'}
              />
              <input
                type="text"
                name="xboard"
                placeholder={this.state.profile.xboard ? this.state.profile.xboard : '10th Board'}
              />
              <input
                type="text"
                name="xmarks"
                placeholder={this.state.profile.xmarks >= 0 ? this.state.profile.xmarks : '10th Marks'}
              />
              <input
                type="number"
                name="xyear"
                placeholder={this.state.profile.xyear >= 0 ? this.state.profile.xyear : '10th Passing Year'}
              />
              <input
                type="text"
                name="xiiinstitute"
                placeholder={this.state.profile.xiiinstitute ? this.state.profile.xiiinstitute : 'Institution Attended in 12th Std'}
              />
              <input
                type="text"
                name="xiiboard"
                placeholder={this.state.profile.xiiboard ? this.state.profile.xiiboard : '12th Board'}
              />
              <input
                type="text"
                name="xiimarks"
                placeholder={this.state.profile.xiimarks >= 0 ? this.state.profile.xiimarks : '12th Marks'}
              />
              <input
                type="number"
                name="xiiyear"
                placeholder={this.state.profile.xiiyear ? this.state.profile.xiiyear : '12th Passing Year'}
              />
              <input
                type="number"
                name="cetrank"
                placeholder={this.state.profile.cetrank >= 0 ? this.state.profile.cetrank : 'CET Rank'}
              />
              <input
                type="text"
                name="cgpa1"
                placeholder={this.state.profile.cgpa1 >= 0 ? this.state.profile.cgpa1 : 'Semester 1 CGPA'}
              />
              <input
                type="number"
                name="credit1"
                placeholder={this.state.profile.credit1 >= 0 ? this.state.profile.credit1 : 'Credits Earned in Semester 1'}
              />
              <input
                type="text"
                name="cgpa2"
                placeholder={this.state.profile.cgpa2 >= 0 ? this.state.profile.cgpa2 : 'Semester 2 CGPA'}
              />
              <input
                type="number"
                name="credit2"
                placeholder={this.state.profile.credit2 >= 0 ? this.state.profile.credit2 : 'Credits Earned in Semester 2'}
              />
              <input
                type="text"
                name="cgpa3"
                placeholder={this.state.profile.cgpa3 >= 0 ? this.state.profile.cgpa3 : 'Semester 3 CGPA'}
              />
              <input
                type="number"
                name="credit3"
                placeholder={this.state.profile.credit3 >= 0 ? this.state.profile.credit3 : 'Credits Earned in Semester 3'}
              />
              <input
                type="text"
                name="cgpa4"
                placeholder={this.state.profile.cgpa4 >= 0 ? this.state.profile.cgpa4 : 'Semester 4 CGPA'}
              />
              <input
                type="number"
                name="credit4"
                placeholder={this.state.profile.credit4 >= 0 ? this.state.profile.credit4 : 'Credits Earned in Semester 4'}
              />
              <input
                type="text"
                name="cgpa5"
                placeholder={this.state.profile.cgpa5 >= 0 ? this.state.profile.cgpa5 : 'Semester 5 CGPA'}
              />
              <input
                type="number"
                name="credit5"
                placeholder={this.state.profile.credit5 >= 0 ? this.state.profile.credit5 : 'Credits Earned in Semester 5'}
              />
              <input
                type="text"
                name="cgpa6"
                placeholder={this.state.profile.cgpa6 >= 0 ? this.state.profile.cgpa6 : 'Semester 6 CGPA'}
              />
              <input
                type="number"
                name="credit6"
                placeholder={this.state.profile.credit6 >= 0 ? this.state.profile.credit6 : 'Credits Earned in Semester 6'}
              />
              <input
                type="text"
                name="cgpa7"
                placeholder={this.state.profile.cgpa7 >= 0 ? this.state.profile.cgpa7 : 'Semester 7 CGPA'}
              />
              <input
                type="number"
                name="credit7"
                placeholder={this.state.profile.credit7 >= 0 ? this.state.profile.credit7 : 'Credits Earned in Semester 7'}
              />
              <input
                type="text"
                name="cgpa8"
                placeholder={this.state.profile.cgpa8 >= 0 ? this.state.profile.cgpa8 : 'Semester 8 CGPA'}
              />
              <input
                type="number"
                name="credit8"
                placeholder={this.state.profile.credit8 >= 0 ? this.state.profile.credit8 : 'Credits Earned in Semester 8'}
              />
              <input
                type="number"
                name="totalcredit"
                placeholder={this.state.profile.totalcredit >= 0 ? this.state.profile.totalcredit : 'Total Credits Earned'}
              />
              <input
                type="number"
                name="mutebacklog"
                placeholder={this.state.profile.mutebacklog >= 0 ? this.state.profile.mutebacklog : 'No of Subjects Cleared In Mute'}
              />
              <input
                type="number"
                name="clearbacklog"
                placeholder={this.state.profile.clearbacklog >= 0 ? this.state.profile.clearbacklog : 'Cleared Arrears'}
              />
              <input
                type="number"
                name="currentbacklog"
                placeholder="Current Arrears"
                defaultValue={this.state.profile.currentbacklog >= 0 ? this.state.profile.currentbacklog : ''}
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
