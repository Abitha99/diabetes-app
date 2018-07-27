import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button, Divider } from "semantic-ui-react";

class DiabetesType extends React.Component {
  state = {};
  handleCardiacClick() {
    this.props.history.push(`/cardiac`);
  }
  handleKidneyClick() {
    this.props.history.push(`/kidney`);
  }
  render() {
    return (
      <div>
        <Divider />
        <Container textAlign="center" style={{ marginTop: "6em" }}>
          <h3>Predict my precent of chances for</h3>
          <Button
            content="Chronic Kidney Disease"
            primary
            onClick={() => this.handleKidneyClick()}
          />
          <Button
            content="Heart/Cardiac Disease"
            primary
            onClick={() => this.handleCardiacClick()}
          />
        </Container>
      </div>
    );
  }
}

export default withRouter(DiabetesType);
