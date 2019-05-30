import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from "materialize-css";


class Settings extends Component {
    componentDidMount(){
        M.AutoInit();
        M.updateTextFields();

    }

    render(){
        return(

 <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
         <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      <div class="row">
         <div class="input-field col s12">
            <select>
                 <option value="" disabled selected>Choose your option</option>
                 <option value="1">He/Him/His</option>
                 <option value="2">She/Her/Hers</option>
                 <option value="3">They/Their/Theirs</option>
            </select>
    <label>Pronouns</label>
  </div>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate"/>
          <label for="email">UCSC Email</label>
        </div>
        <div class="row">
        <div class="input-field col s6">
          <input id="student_id" type="text" class="validate" data-length = "7"/>
          <label for="student_id">Student ID</label>
           <span class="helper-text" data-error="Needs to be 7 characters" data-success=" "> </span>
        </div>
              <div class="row">
         <div class="input-field col s12">
            <select>
                 <option value="" disabled selected>Select A College</option>
                 <option value="1">Cowell College</option>
                 <option value="2">Stevenson College</option>
                 <option value="3">Crown Colleges</option>
                 <option value="4">Merrill College</option>
                 <option value="5">Porter College</option>
                 <option value="6">Kresge College</option>
                 <option value="7">Oakes College</option>
                 <option value="8">Rachel Carson College</option>
                 <option value="9">College 9</option>
                 <option value="10">College 10</option>
            </select>
    <label>College Affiliation</label>
  </div>
  </div>
  <label>Graduation Date</label>
  <input type="text" class="datepicker"/>
  </div>
  <form action="#">
    <p>
    <label>Are you a Transfer Student?</label>
    <div class="row">
    </div>
      <label>
        <input name="group1" type="radio" />
        <span>Yes</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" checked/>
        <span>No</span>
      </label>
    </p>
    </form>
     <form action="#">
    <p>
    <label>Did you finish IGETC?</label>
    <div class="row">
    </div>
      <label>
        <input name="group1" type="radio"  />
        <span>Yes</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>No</span>
      </label>
    </p>
    </form>
     </div>
    </form>
  </div>
        
        
	);
}
};

export default Settings;