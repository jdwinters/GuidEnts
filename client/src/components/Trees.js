import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from "materialize-css";


class Trees extends Component {
    componentDidMount(){
        M.AutoInit();
        M.updateTextFields();

    }

    render(){
        return(

      <div class="row">
         <div class="input-field col s6">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 8</option>
                 <option value="2">PHIL 9</option>
                 <option value="3">Not Taken</option>
            </select>
    <label>Introduction</label>
 </div>
  <div class="input-field col s6">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 11</option>
                 <option value="2">PHIL 22</option>
                 <option value="3">PHIL 24</option>
                 <option value="4">Not Taken</option>
            </select>
    <label>Introduction</label>
 </div>
        <div class="row">
         <div class="input-field col s6">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 100A</option>
                 <option value="2">PHIL 100B</option>
                 <option value="3">PHIL 100C</option>
                 <option value="4">Not Taken</option>
            </select>
    <label>History of Philosophy</label>
 </div>
  <div class="input-field col s6">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 100A</option>
                 <option value="2">PHIL 100B</option>
                 <option value="3">PHIL 100C</option>
                 <option value="4">Not Taken</option>
            </select>
    <label>History of Philosophy</label>
 </div>
  </div>

          <div class="row">
         <div class="input-field col s2">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 118</option>
                 <option value="2">PHIL 137</option>
                 <option value="3">PHIL 140</option>
                 <option value="4">PHIL 142</option>
                 <option value="5">PHIL 143</option>
                 <option value="6">PHIL 144</option>
                 <option value="7">PHIL 147</option>
                 <option value="8">PHIL 148</option>
                 <option value="9">PHIL 152</option>
                 <option value="10">PHIL 153</option>
                 <option value="11">Not Taken</option>
            </select>
    <label>Ethics or Value Theory</label>
 </div>
  <div class="input-field col s2">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 114</option>
                 <option value="2">PHIL 115</option>
                 <option value="3">PHIL 121</option>
                 <option value="4">PHIL 122</option>
                 <option value="5">PHIL 125</option>
                 <option value="6">PHIL 126</option>
                 <option value="7">PHIL 127</option>
                 <option value="8">PHIL 133</option>
                 <option value="9">PHIL 135</option>
                 <option value="10">PHIL 171</option>
                 <option value="11">Not Taken</option>
            </select>
    <label>Metaphysics and Epistemology</label>
 </div>
 <div class="input-field col s2">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 114</option>
                 <option value="2">PHIL 115</option>
                 <option value="3">PHIL 121</option>
                 <option value="4">PHIL 122</option>
                 <option value="5">PHIL 125</option>
                 <option value="6">PHIL 126</option>
                 <option value="7">PHIL 127</option>
                 <option value="8">PHIL 133</option>
                 <option value="9">PHIL 135</option>
                 <option value="10">PHIL 171</option>
                 <option value="11">Not Taken</option>
            </select>
    <label>Metaphysics and Epistemology</label>
  </div>
  <div class="input-field col s2">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 100A</option>
                 <option value="2">PHIL 100B</option>
                 <option value="3">PHIL 100C</option>
                 <option value="4">PHIL 114</option>
                 <option value="5">PHIL 115</option>
                 <option value="6">PHIL 121</option>
                 <option value="7">PHIL 122</option>
                 <option value="8">PHIL 125</option>
                 <option value="9">PHIL 126</option>
                 <option value="10">PHIL 127</option>
                 <option value="11">PHIL 133</option>
                 <option value="12">PHIL 135</option>
                 <option value="13">PHIL 171</option>
                 <option value="14">PHIL 118</option>
                 <option value="15">PHIL 137</option>
                 <option value="16">PHIL 140</option>
                 <option value="17">PHIL 142</option>
                 <option value="18">PHIL 143</option>
                 <option value="19">PHIL 144</option>
                 <option value="20">PHIL 147</option>
                 <option value="21">PHIL 148</option>
                 <option value="22">PHIL 152</option>
                 <option value="23">PHIL 153</option>
                 <option value="24">Not Taken</option>

            </select>
    <label>Upper Division 1</label>
  </div>
  <div class="input-field col s2">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 100A</option>
                 <option value="2">PHIL 100B</option>
                 <option value="3">PHIL 100C</option>
                 <option value="4">PHIL 114</option>
                 <option value="5">PHIL 115</option>
                 <option value="6">PHIL 121</option>
                 <option value="7">PHIL 122</option>
                 <option value="8">PHIL 125</option>
                 <option value="9">PHIL 126</option>
                 <option value="10">PHIL 127</option>
                 <option value="11">PHIL 133</option>
                 <option value="12">PHIL 135</option>
                 <option value="13">PHIL 171</option>
                 <option value="14">PHIL 118</option>
                 <option value="15">PHIL 137</option>
                 <option value="16">PHIL 140</option>
                 <option value="17">PHIL 142</option>
                 <option value="18">PHIL 143</option>
                 <option value="19">PHIL 144</option>
                 <option value="20">PHIL 147</option>
                 <option value="21">PHIL 148</option>
                 <option value="22">PHIL 152</option>
                 <option value="23">PHIL 153</option>
                 <option value="24">Not Taken</option>
            </select>
    <label>Upper Division 2</label>
  </div>
  <div class="input-field col s2">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 100A</option>
                 <option value="2">PHIL 100B</option>
                 <option value="3">PHIL 100C</option>
                 <option value="4">PHIL 114</option>
                 <option value="5">PHIL 115</option>
                 <option value="6">PHIL 121</option>
                 <option value="7">PHIL 122</option>
                 <option value="8">PHIL 125</option>
                 <option value="9">PHIL 126</option>
                 <option value="10">PHIL 127</option>
                 <option value="11">PHIL 133</option>
                 <option value="12">PHIL 135</option>
                 <option value="13">PHIL 171</option>
                 <option value="14">PHIL 118</option>
                 <option value="15">PHIL 137</option>
                 <option value="16">PHIL 140</option>
                 <option value="17">PHIL 142</option>
                 <option value="18">PHIL 143</option>
                 <option value="19">PHIL 144</option>
                 <option value="20">PHIL 147</option>
                 <option value="21">PHIL 148</option>
                 <option value="22">PHIL 152</option>
                 <option value="23">PHIL 153</option>
                 <option value="24">Not Taken</option>
            </select>
    <label>Upper Division 3</label>
  </div>
  <div class="row">
         <div class="input-field col s12">
            <select>
                 <option value="" disabled selected>Not Taken</option>
                 <option value="1">PHIL 190</option>
                 <option value="2">Not Taken</option>
            </select>
    <label>Senior Seminar</label>
 </div>
  </div>
  </div>
   </div>
	);
    }
    };

export default Trees;