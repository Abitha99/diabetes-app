import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";

class DiabetesHomePage extends React.Component {
  state = {};
  handleInsipidusClick() {
    this.props.history.push(`/insipidus`);
  }
  handleMellitusClick() {
    this.props.history.push(`/mellitus`);
  }
  render() {
    return (
      <div>
        <Container textAlign="center" style={{ marginTop: "6em" }}>
          <h3> Choose the Diabetes type </h3>
          <Button
            content="Mellitus"
            primary
            onClick={() => this.handleMellitusClick()}
          />
          <Button
            content="Insipidus"
            primary
            onClick={() => this.handleInsipidusClick()}
          />
        </Container>
      </div>
    );
  }
}

export default withRouter(DiabetesHomePage);
