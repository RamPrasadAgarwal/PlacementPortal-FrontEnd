import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './companyprof.css';

function Companyprof() {
  return (
    <div>
      <div className="profile">
        <h1>Deloitte USI</h1>
                Sales and Marketing intern<br />
                ALL Branches<br />
                Bangalore,India
        <hr />
      </div>
    </div>
  );
}
function Descript(props) {
  return (
    <div>
      <b>{props.value}</b><br />
      {props.info}
    </div>
  );
}
function Descript1(props) {
  return (
    <div>
      <b>{props.value}</b><br />
      {props.info1}<br />
      {props.info2}<br />
      {props.info3}<br />
    </div>
  );
}
function Detail1() {
  return (

    <div className="profile1">
      <h1>Delloite USI</h1>
      <h3>Sales and Marketing intern</h3><hr />
      <div>
        <Descript
          value="Job Description"
          info=" Deloitte USI
                                      Bangalore,India"
        />
        <hr />
        <Descript
          value="About Company"
          info=" Deloitte USI
                                      Bangalore,India"
        />
        <hr />
        <Descript1
          value="Requirements"
          info1="10th Percentage:{add the info here}"
          info2="12th Percentage:{add the info here}"
          info3="CGPA:{add the info here}"
        />
        <hr />
        <Descript1
          value="Requirements"
          info1="Salary:{add the info here}"
          info2="Test Date:{add the info here}"
          info3="Interview Date:{add the info here}"
        />
        <hr />
        <div className="form-submit1">
                          <button type="submit">
                              Register
                          </button>
                    </div>  
      </div>
    </div>
  );
            

}
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  show() {
    if (this.state.isHidden) { return <Companyprof />; }
    return <Detail1 />;
  }
  render() {
    return (
      <div>
        {this.show()}
        <div className="link">
          <center><button
            onClick={this.toggleHidden.bind(this)}
          >{this.state.isHidden ? 'MORE' : 'LESS'}
                  </button>
          </center>
        </div>
      </div>
    );
  }
}
export default withRouter(Detail);

