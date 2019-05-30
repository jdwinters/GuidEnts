import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css";

class Advisers extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Advisers</h1>
        Go On Your Academic Path
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <p class="material-icons">Advisor 1</p>
            </div>
            <div class="collapsible-body">
              <span>Phone</span> <br />
              <span>Email</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <p class="material-icons">Advisor 2</p>
            </div>
            <div class="collapsible-body">
              <span>Phone</span> <br />
              <span>Email</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <p class="material-icons">Advisor 3</p>
            </div>
            <div class="collapsible-body">
              <span>Phone</span> <br />
              <span>Email</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

// look at the materialize card page to make list of advisor contacts

export default Advisers;
