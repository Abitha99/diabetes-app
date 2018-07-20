import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import DiabetesType from "../pages/DiabetesType";

class InsipidusDiabetesType extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <DiabetesType />
        <h2> Insipidus Type </h2>
      </div>
    );
  }
}

export default withRouter(InsipidusDiabetesType);
