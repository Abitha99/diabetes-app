import React from "react";
import { withRouter } from "react-router-dom";
import {
  Form,
  Button,
  Input,
  Select,
  Radio,
  TextArea,
  Segment,
  Checkbox,
  Modal,
  Icon
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class MellitusCardiac extends React.Component {
  state = { open: false };
  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value, open } = this.state;
    return (
      <div>
        <Segment style={{ marginTop: "1em" }}>
          <h2> Mellitus Cardiac - Enter the details in the form </h2>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Field
                control={Select}
                label="Gender"
                options={options}
                placeholder="Gender"
              />
            </Form.Group>
            <Form.Group inline>
              <label>Quantity</label>
              <Form.Field
                control={Radio}
                label="One"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Two"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Three"
                value="3"
                checked={value === "3"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="About"
              placeholder="Tell us more about you..."
            />
            <Form.Field
              control={Checkbox}
              label="I agree to the Terms and Conditions"
            />
            <Button primary onClick={() => this.show()}>
              Submit
            </Button>
          </Form>
        </Segment>
        <Modal size="tiny" open={open} onClose={this.close} closeIcon>
          <Modal.Header>Your Score is 71.123</Modal.Header>
          <Modal.Content style={{ textAlign: "center" }}>
            <Icon
              circular
              inverted
              color="green"
              size="huge"
              name="check circle outline"
            />
            <br />
            <h4>Your diabetes is under control</h4>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default withRouter(MellitusCardiac);
