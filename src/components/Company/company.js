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
               
               required>
               </textarea>
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
              
               required>
               </textarea>
               <label style={{fontSize: "22px",paddingLeft: "40px"}}>Branch</label>
               <label class="container">All
  						<input 
  						type="checkbox"
                		name="branch"
                		value="all"
                		required />
  						<span class="checkmark"></span>
				</label>
               <label class="container">Computer Science and Engineering
  						<input 
  						type="checkbox"
                		name="branch"
                		value="cse"
                		required />
  						<span class="checkmark"></span>
				</label>
               <label class="container">Information Science 
  						<input 
  						type="checkbox"
                		name="branch"
                		value="ise"
                		required />
  						<span class="checkmark"></span>
				</label>
               <label class="container">Mechanical Engineering
  						<input 
  						type="checkbox"
                		name="branch"
                		value="me"
                		required />
  						<span class="checkmark"></span>
				</label>
               <label class="container">Electronics Engineering
  						<input 
  						type="checkbox"
                		name="branch"
                		value="ec"
                		required />
  						<span class="checkmark"></span>
				</label>
               <label class="container">Electronics and Electrical Engineering
  						<input 
  						type="checkbox"
                		name="branch"
                		value="eee"
                		required />
  						<span class="checkmark"></span>
				</label>
               <label class="container">Industrial Production 
  						<input 
  						type="checkbox"
                		name="branch"
                		value="ip"
                		required />
  						<span class="checkmark"></span>
				</label>
               
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
