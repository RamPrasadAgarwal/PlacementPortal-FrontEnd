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
    // const authtoken = window.localStorage.getItem('placementtoken');
    // fetch('/profile', {
    //   method: 'GET',
    //   headers: { authtoken },
    // })
    //   .then(response => response.json())
    //   .then(console.log);
  }
  profileedit(e) {
    const authtoken = window.localStorage.getItem('placementtoken');
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
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
              <select name="sex" placeholder="SEX">
                <option disabled selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
              </select>
              <select name="sex" placeholder="SEX">
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
                name="name"
                placeholder=""
                value=""
                required
              />
              <input
                type="text"
                name="name"
                placeholder=""
                value=""
                required
              />
              <input
                type="text"
                name="name"
                placeholder=""
                value=""
                required
              />
              <input
                type="text"
                name="name"
                placeholder=""
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
