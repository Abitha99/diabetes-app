import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  Form,
  Button,
  Input,
  Segment,
  Dropdown,
  Modal,
  Icon
} from "semantic-ui-react";
import DiabetesType from "../pages/DiabetesType";
import InlineError from "../messages/InlineError";

const suOptions = [
  { key: 1, text: "0", value: "0" },
  { key: 2, text: "1", value: "1" },
  { key: 3, text: "2", value: "2" },
  { key: 4, text: "3", value: "3" },
  { key: 5, text: "4", value: "4" },
  { key: 6, text: "5", value: "5" }
];

const dmOptions = [
  { key: 1, text: "Yes", value: "1" },
  { key: 2, text: "No", value: "0" }
];

const htnOptions = [
  { key: 1, text: "Yes", value: "0" },
  { key: 2, text: "No", value: "1" }
];

const pcOptions = [
  { key: 1, text: "Abnormal", value: "0" },
  { key: 2, text: "Normal", value: "1" }
];

const initialState = {
  data: {
    age: "",
    bp: "",
    su: "",
    hemo: "",
    dm: "",
    al: "",
    bu: "",
    htn: "",
    pc: "",
    rbcc: ""
  },
  loading: false,
  errors: {},
  message: 1,
  open: false,
  predictedResult: ""
};

class MellitusKidney extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onsuChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, su: value }
    });

  onDmChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, dm: value }
    });

  onalChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, al: value }
    });

  onHtnChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, htn: value }
    });

  onPcChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, pc: value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.setState({ open: true });
      this.setState({ loading: false });
      axios
        .post(`http://localhost:5000/kidney`, this.state.data)
        .then(result => {
          this.setState({ ...this.state, predictedResult: result.data });
          this.setState({ open: true });
        })
        .catch(err =>
          this.setState({
            errors: err.response,
            loading: false
          })
        );
    }
  };

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  validate = data => {
    const errors = {};
    if (!data.age) {
      errors.age = "Age field is required";
    }
    if (!data.bp) {
      errors.bp = "Blood Pressure field is required";
    }
    if (!data.su) {
      errors.su = "su field is required";
    }
    if (!data.hemo) {
      errors.hemo = "hemo field is required";
    }
    if (!data.dm) {
      errors.dm = "Diabetes Mellitus field is required";
    }
    if (!data.bu) {
      errors.bu = "Blood Urea field is required";
    }
    if (!data.rbcc) {
      errors.rbcc = "Red Blood cells count field is required";
    }
    return errors;
  };

  render() {
    const { data, open, errors, loading } = this.state;
    return (
      <div>
        <DiabetesType />
        <Segment style={{ marginTop: "1em" }}>
          <h3> Enter all the details in the form </h3>
          <Form onSubmit={this.onSubmit} loading={loading}>
            <Form.Group widths={3}>
              <Form.Field style={{ borderColor: "white" }} error={!!errors.age}>
                <label htmlFor="age">
                  Age <span>*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Age"
                  value={data.age}
                  onChange={this.onChange}
                />
                {errors.age && <InlineError text={errors.age} />}
              </Form.Field>
              <Form.Field error={!!errors.bp}>
                <label htmlFor="bp">
                  Blood Pressure <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="bp"
                  name="bp"
                  placeholder="Blood Pressure"
                  value={data.bp}
                  onChange={this.onChange}
                  label={{ content: "mm/Hg" }}
                  labelPosition="right"
                />
                {errors.bp && <InlineError text={errors.bp} />}
              </Form.Field>
              <Form.Field>
                <label htmlFor="su">
                  su <span>*</span>
                </label>
                <Dropdown
                  placeholder="su value"
                  fluid
                  selection
                  value={data.su}
                  onChange={this.onsuChange}
                  options={suOptions}
                  defaultValue={suOptions[0].value}
                />
              </Form.Field>
              <Form.Field error={!!errors.hemo}>
                <label htmlFor="hemo">
                  hemo <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="hemo"
                  name="hemo"
                  placeholder="hemo"
                  value={data.hemo}
                  onChange={this.onChange}
                  label={{ content: "gms" }}
                  labelPosition="right"
                />
                {errors.hemo && <InlineError text={errors.hemo} />}
              </Form.Field>
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Field>
                <label htmlFor="dm">
                  Diabetes Mellitus <span>*</span>
                </label>
                <Dropdown
                  fluid
                  selection
                  value={data.dm}
                  onChange={this.onDmChange}
                  options={dmOptions}
                  defaultValue={dmOptions[0].value}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="al">
                  al <span>*</span>
                </label>
                <Dropdown
                  placeholder="al value"
                  fluid
                  selection
                  value={data.al}
                  onChange={this.onalChange}
                  options={suOptions}
                  defaultValue={suOptions[0].value}
                />
              </Form.Field>
              <Form.Field error={!!errors.bu}>
                <label htmlFor="bu">
                  Blood Urea <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="bu"
                  name="bu"
                  placeholder="Blood Urea"
                  value={data.bu}
                  onChange={this.onChange}
                  label={{ content: "mgs/dl" }}
                  labelPosition="right"
                />
                {errors.bu && <InlineError text={errors.bu} />}
              </Form.Field>
              <Form.Field>
                <label htmlFor="htn">
                  Hyper Tension <span>*</span>
                </label>
                <Dropdown
                  fluid
                  selection
                  value={data.htn}
                  onChange={this.onHtnChange}
                  options={htnOptions}
                  defaultValue={htnOptions[0].value}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Field>
                <label htmlFor="pc">
                  Pus Cell <span>*</span>
                </label>
                <Dropdown
                  fluid
                  selection
                  value={data.pc}
                  onChange={this.onPcChange}
                  options={pcOptions}
                  defaultValue={pcOptions[0].value}
                />
              </Form.Field>
              <Form.Field error={!!errors.rbcc}>
                <label htmlFor="rbcc">
                  Red Blood Cell Count <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="rbcc"
                  name="rbcc"
                  placeholder="Red Blood Cell Count"
                  value={data.rbcc}
                  onChange={this.onChange}
                  label={{ content: "millions/cmm" }}
                  labelPosition="right"
                />
                {errors.rbcc && <InlineError text={errors.rbcc} />}
              </Form.Field>
              <Form.Field />
              <Form.Field />
            </Form.Group>
            <Button primary type="submit">
              Get My Result
            </Button>
          </Form>
        </Segment>
        <Modal size="tiny" open={open} onClose={this.close} closeIcon>
          <Modal.Header>
            You have {this.state.predictedResult} % chance to have kidney issues
          </Modal.Header>

          {this.state.predictedResult > 50 && (
            <Modal.Content style={{ textAlign: "center" }}>
              <Icon
                circular
                inverted
                color="yellow"
                size="huge"
                name="warning sign"
              />
              <br />
              <h3>You are advised to visit a doctor immediately</h3>
            </Modal.Content>
          )}
          {this.state.predictedResult <= 50 && (
            <Modal.Content style={{ textAlign: "center" }}>
              <Icon
                circular
                inverted
                color="green"
                size="huge"
                name="check circle"
              />
              <br />
              <h3>You need not consult a doctor anytime soon</h3>
            </Modal.Content>
          )}
        </Modal>
      </div>
    );
  }
}

export default withRouter(MellitusKidney);
