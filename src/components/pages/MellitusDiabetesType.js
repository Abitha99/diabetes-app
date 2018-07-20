import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button, Divider } from "semantic-ui-react";
import DiabetesType from "../pages/DiabetesType";

class MellitusDiabetesType extends React.Component {
  state = {};
  handleEyeClick() {
    this.props.history.push(`/mellitus/eye`);
  }
  handleCardiacClick() {
    this.props.history.push(`/mellitus/cardiac`);
  }
  handleKidneyClick() {
    this.props.history.push(`/mellitus/kidney`);
  }
  render() {
    return (
      <div>
        <DiabetesType />
        <Divider />
        <Container textAlign="center">
          <h3>Mellitus Type - Choose the Body Part </h3>
          <Button content="Eye" primary onClick={() => this.handleEyeClick()} />
          <Button
            content="Cardiac"
            primary
            onClick={() => this.handleCardiacClick()}
          />
          <Button
            content="Kidney"
            primary
            onClick={() => this.handleKidneyClick()}
          />
        </Container>
      </div>
    );
  }
}

export default withRouter(MellitusDiabetesType);
