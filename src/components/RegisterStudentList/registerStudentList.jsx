import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './registerStudentList.css';

class RegisterStudentList extends Component {
  constructor() {
    super();
    this.state = {
      companyList: null,
    };
  }
  componentWillMount() {
    if (this.props.location.state && this.props.location.state.companyId) {
      this.fetchCompanyList();
    } else {
      this.props.history.push('/dashboard');
    }
  }
  fetchCompanyList() {
    const payload = {
      companyId: this.props.location.state.companyId,
    };
    fetch('/studentlist', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('placementtoken') },
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          companyList: response.message,
        });
      });
  }
  // 'fullname', 'usn', 'xmarks', 'xiimarks', 'cgpa', 'branch'
  render() {
    if (this.state.companyList !== null) {
      return (
        <div>
          <table id="academics1">
            <tr>
              <th colSpan="6"><center>List of Students</center></th>
            </tr>
            <Tab
              td1="Name"
              td2="Usn"
              td3="10th marks"
              td4="12th marks"
              td5="Cgpa"
              td6="Branch"
            />
            {this.state.companyList.map(student =>
            (<Tab
              td1={student.fullname}
              td2={student.usn}
              td3={student.xmarks}
              td4={student.xiimarks}
              td5={student.cgpa}
              td6={student.branch}
            />))}
          </table>
        </div>
      );
    }
    return 'hey';
  }
}
function Tab(props) {
  return (
    <tr>
      <td>{props.td1}</td>
      <td>{props.td2}</td>
      <td>{props.td3}</td>
      <td>{props.td4}</td>
      <td>{props.td5}</td>
      <td>{props.td6}</td>
    </tr>
  );
}

RegisterStudentList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegisterStudentList;
