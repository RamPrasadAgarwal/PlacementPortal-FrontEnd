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
    // fetch('/profile', {
    //   method: 'GET',
    //   headers: { authtoken },
    // })
    //   .then(response => response.json())
    //   .then(console.log);
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
            >
              <input
                type="text"
                name="usn"
                placeholder="USN"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value=""
                required
              />
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
              <br />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
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
