import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Form from '../Form/form';
import './editprofile.css';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorprofile: null,
      profile: null,
    };
    this.fetchProfileDetails();
  }
  componentWillMount() {
    if (this.props.location.state && this.props.location.state.message) {
      this.setState({
        errorprofile: this.props.location.state.message,
      });
    }
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
      historybacklog: !!(data.get('mutebacklog') + data.get('clearbacklog')),
    };
    fetch('/profile', {
      method: 'POST',
      headers: { authtoken },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then((res) => {
        if (res.code === 204) {
          this.props.history.push('/profile');
        } else {
          this.setState({
            errorprofile: res.message,
          });
        }
      });
  }

  render() {
    if (this.state.profile !== null) {
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
                  placeholder="Email"
                  defaultValue={this.state.profile.email !== null ? this.state.profile.email : ''}
                  tooltip="hey"
                />
                <input
                  type="text"
                  name="dob"
                  placeholder="Date of Birth (dd/mm/yyyy)"
                  defaultValue={this.state.profile.dob ? this.state.profile.dob : ''}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Contact Number (Without +91)"
                  defaultValue={this.state.profile.phone ? this.state.profile.phone : ''}
                  max="9999999999"
                />

                <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Gender</label><br /><br />
                <label className="container1">Male
                  <input
                    type="radio"
                    name="sex"
                    value="Male"
                    defaultChecked={this.state.profile.sex === 'Male'}
                    required
                  /> <span className="checkmark1" />
                </label>
                <label className="container1">Female
                  <input
                    type="radio"
                    name="sex"
                    value="Female"
                    defaultChecked={this.state.profile.sex === 'Female'}
                    required
                  /> <span className="checkmark1" />
                </label>
                <label style={{ fontSize: '22px', paddingLeft: '5%' }} >Branch</label><br /><br />
                <label className="container1">Computer Science and Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="COMPUTER SCIENCE AND ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'COMPUTER SCIENCE AND ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <label className="container1">Information Science and Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="INFORMATION SCIENCE AND ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'INFORMATION SCIENCE AND ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <label className="container1">Mechanical Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="MECHANICAL ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'MECHANICAL ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <label className="container1">Electronics and Communications Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="ELECTRONICS AND COMMUNICATIONS ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'ELECTRONICS AND COMMUNICATIONS ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <label className="container1">Electrical and Electronics Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="ELECTRICAL AND ELECTRONICS ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'ELECTRICAL AND ELECTRONICS ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <label className="container1">Industrial and Production Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="INDUSTRIAL AND PRODUCTION ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'INDUSTRIAL AND PRODUCTION ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <label className="container1">Civil Engineering
                  <input
                    type="radio"
                    name="branch"
                    value="CIVIL ENGINEERING"
                    defaultChecked={this.state.profile.branch === 'CIVIL ENGINEERING'}
                    required
                  />
                  <span className="checkmark1" />
                </label>
                <br />
                <Textarea
                  maxRows={5}
                  minRows={5}
                  name="address"
                  placeholder="Address"
                  defaultValue={this.state.profile.address ? this.state.profile.address : ''}
                />
                <br />

                <input
                  type="text"
                  name="xinstitute"
                  placeholder="Institution Attended in 10th Std"
                  defaultValue={this.state.profile.xinstitute ? this.state.profile.xinstitute : ''}
                />
                <input
                  type="text"
                  name="xboard"
                  placeholder="10th Board"
                  defaultValue={this.state.profile.xboard ? this.state.profile.xboard : ''}
                />
                <input
                  type="text"
                  name="xmarks"
                  placeholder="10th Marks"
                  defaultValue={this.state.profile.xmarks >= 0 ? this.state.profile.xmarks : ''}
                />
                <input
                  type="number"
                  name="xyear"
                  placeholder="10th Passing Year"
                  defaultValue={this.state.profile.xyear >= 0 ? this.state.profile.xyear : ''}
                />
                <input
                  type="text"
                  name="xiiinstitute"
                  placeholder="Institution Attended in 12th Std"
                  defaultValue={this.state.profile.xiiinstitute ? this.state.profile.xiiinstitute : ''}
                />
                <input
                  type="text"
                  name="xiiboard"
                  placeholder="12th Board"
                  defaultValue={this.state.profile.xiiboard ? this.state.profile.xiiboard : ''}
                />
                <input
                  type="text"
                  name="xiimarks"
                  placeholder="12th Marks"
                  defaultValue={this.state.profile.xiimarks >= 0 ? this.state.profile.xiimarks : ''}
                />
                <input
                  type="number"
                  name="xiiyear"
                  placeholder="12th Passing Year"
                  defaultValue={this.state.profile.xiiyear >= 0 ? this.state.profile.xiiyear : ''}
                />
                <input
                  type="number"
                  name="cetrank"
                  placeholder="CET Rank"
                  defaultValue={this.state.profile.cetrank >= 0 ? this.state.profile.cetrank : ''}
                />
                <input
                  type="text"
                  name="cgpa1"
                  placeholder="Semester 1 CGPA"
                  defaultValue={this.state.profile.cgpa1 >= 0 ? this.state.profile.cgpa1 : 'Semester 1 CGPA'}
                />
                <input
                  type="number"
                  name="credit1"
                  placeholder="Credits Earned in Semester 1"
                  defaultValue={this.state.profile.credit1 >= 0 ? this.state.profile.credit1 : 'Credits Earned in Semester 1'}
                />
                <input
                  type="text"
                  name="cgpa2"
                  placeholder="Semester 2 CGPA"
                  defaultValue={this.state.profile.cgpa2 >= 0 ? this.state.profile.cgpa2 : 'Semester 2 CGPA'}
                />
                <input
                  type="number"
                  name="credit2"
                  placeholder="Credits Earned in Semester 2"
                  defaultValue={this.state.profile.credit2 >= 0 ? this.state.profile.credit2 : 'Credits Earned in Semester 2'}
                />
                <input
                  type="text"
                  name="cgpa3"
                  placeholder="Semester 3 CGPA"
                  defaultValue={this.state.profile.cgpa3 >= 0 ? this.state.profile.cgpa3 : 'Semester 3 CGPA'}
                />
                <input
                  type="number"
                  name="credit3"
                  placeholder="Credits Earned in Semester 3"
                  defaultValue={this.state.profile.credit3 >= 0 ? this.state.profile.credit3 : 'Credits Earned in Semester 3'}
                />
                <input
                  type="text"
                  name="cgpa4"
                  placeholder="Semester 4 CGPA"
                  defaultValue={this.state.profile.cgpa4 >= 0 ? this.state.profile.cgpa4 : 'Semester 4 CGPA'}
                />
                <input
                  type="number"
                  name="credit4"
                  placeholder="Credits Earned in Semester 4"
                  defaultValue={this.state.profile.credit4 >= 0 ? this.state.profile.credit4 : 'Credits Earned in Semester 4'}
                />
                <input
                  type="text"
                  name="cgpa5"
                  placeholder="Semester 5 CGPA"
                  defaultValue={this.state.profile.cgpa5 >= 0 ? this.state.profile.cgpa5 : 'Semester 5 CGPA'}
                />
                <input
                  type="number"
                  name="credit5"
                  placeholder="Credits Earned in Semester 5"
                  defaultValue={this.state.profile.credit5 >= 0 ? this.state.profile.credit5 : 'Credits Earned in Semester 5'}
                />
                <input
                  type="text"
                  name="cgpa6"
                  placeholder="Semester 6 CGPA"
                  defaultValue={this.state.profile.cgpa6 >= 0 ? this.state.profile.cgpa6 : 'Semester 6 CGPA'}
                />
                <input
                  type="number"
                  name="credit6"
                  placeholder="Credits Earned in Semester 6"
                  defaultValue={this.state.profile.credit6 >= 0 ? this.state.profile.credit6 : 'Credits Earned in Semester 6'}
                />
                <input
                  type="text"
                  name="cgpa7"
                  placeholder="Semester 7 CGPA"
                  defaultValue={this.state.profile.cgpa7 >= 0 ? this.state.profile.cgpa7 : ''}
                />
                <input
                  type="number"
                  name="credit7"
                  placeholder="Credits Earned in Semester 7"
                  defaultValue={this.state.profile.credit7 >= 0 ? this.state.profile.credit7 : ''}
                />
                <input
                  type="text"
                  name="cgpa8"
                  placeholder="Semester 8 CGPA"
                  defaultValue={this.state.profile.cgpa8 >= 0 ? this.state.profile.cgpa8 : ''}
                />
                <input
                  type="number"
                  name="credit8"
                  placeholder="Credits Earned in Semester 8"
                  defaultValue={this.state.profile.credit8 >= 0 ? this.state.profile.credit8 : ''}
                />
                <input
                  type="number"
                  name="totalcredit"
                  placeholder="Total Credits Earned"
                  defaultValue={this.state.profile.totalcredit >= 0 ? this.state.profile.totalcredit : ''}
                />
                <input
                  type="number"
                  name="mutebacklog"
                  placeholder="No of Subjects Cleared In Mute"
                  defaultValue={this.state.profile.mutebacklog >= 0 ? this.state.profile.mutebacklog : ''}
                />
                <input
                  type="number"
                  name="clearbacklog"
                  placeholder="Cleared Arrears"
                  defaultValue={this.state.profile.clearbacklog >= 0 ? this.state.profile.clearbacklog : ''}
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

    return (<div>Fetching Profile details, Please wait</div>);
  }
}

EditProfile.propTypes = {
};

EditProfile.defaultProps = {
};

export default EditProfile;
