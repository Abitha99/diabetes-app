import React from "react";
import { withRouter } from "react-router-dom";
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

const sugarOptions = [
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
    bloodPressure: "",
    sugar: "",
    hemoglobin: "",
    dm: "",
    albumin: "",
    bloodUrea: "",
    htn: "",
    pc: "",
    rbcc: ""
  },
  loading: false,
  errors: {},
  message: 1,
  open: false
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

  onSugarChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, sugar: value }
    });

  onDmChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, dm: value }
    });

  onAlbuminChange = (e, { value }) =>
    this.setState({
      data: { ...this.state.data, albumin: value }
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
      // api.jobpostings
      //   .postJob(this.state.data)
      //   .then(() => {
      //     this.setState({ open: true });
      //   })
      //   .catch(err =>
      //     this.setState({
      //       errors: err.response,
      //       loading: false
      //     })
      //   );
      console.log(this.state.data);
    }
  };

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  validate = data => {
    const errors = {};
    if (!data.age) {
      errors.age = "Age field is required";
    }
    if (!data.bloodPressure) {
      errors.bloodPressure = "Blood Pressure field is required";
    }
    if (!data.sugar) {
      errors.sugar = "Sugar field is required";
    }
    if (!data.hemoglobin) {
      errors.hemoglobin = "Hemoglobin field is required";
    }
    if (!data.dm) {
      errors.dm = "Diabetes Mellitus field is required";
    }
    if (!data.bloodUrea) {
      errors.bloodUrea = "Blood Urea field is required";
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
              <Form.Field error={!!errors.bloodPressure}>
                <label htmlFor="bloodPressure">
                  Blood Pressure <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="bloodPressure"
                  name="bloodPressure"
                  placeholder="Blood Pressure"
                  value={data.bloodPressure}
                  onChange={this.onChange}
                  label={{ content: "mm/Hg" }}
                  labelPosition="right"
                />
                {errors.bloodPressure && (
                  <InlineError text={errors.bloodPressure} />
                )}
              </Form.Field>
              <Form.Field>
                <label htmlFor="sugar">
                  Sugar <span>*</span>
                </label>
                <Dropdown
                  placeholder="Sugar value"
                  fluid
                  selection
                  value={data.sugar}
                  onChange={this.onSugarChange}
                  options={sugarOptions}
                  defaultValue={sugarOptions[0].value}
                />
              </Form.Field>
              <Form.Field error={!!errors.hemoglobin}>
                <label htmlFor="hemoglobin">
                  Hemoglobin <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="hemoglobin"
                  name="hemoglobin"
                  placeholder="Hemoglobin"
                  value={data.hemoglobin}
                  onChange={this.onChange}
                  label={{ content: "gms" }}
                  labelPosition="right"
                />
                {errors.hemoglobin && <InlineError text={errors.hemoglobin} />}
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
                <label htmlFor="albumin">
                  Albumin <span>*</span>
                </label>
                <Dropdown
                  placeholder="albumin value"
                  fluid
                  selection
                  value={data.albumin}
                  onChange={this.onAlbuminChange}
                  options={sugarOptions}
                  defaultValue={sugarOptions[0].value}
                />
              </Form.Field>
              <Form.Field error={!!errors.bloodUrea}>
                <label htmlFor="bloodUrea">
                  Blood Urea <span>*</span>
                </label>
                <Input
                  type="number"
                  min="0"
                  id="bloodUrea"
                  name="bloodUrea"
                  placeholder="Blood Urea"
                  value={data.bloodUrea}
                  onChange={this.onChange}
                  label={{ content: "mgs/dl" }}
                  labelPosition="right"
                />
                {errors.bloodUrea && <InlineError text={errors.bloodUrea} />}
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
          <Modal.Header>Your Score is 24.123</Modal.Header>
          <Modal.Content style={{ textAlign: "center" }}>
            <Icon
              circular
              inverted
              color="yellow"
              size="huge"
              name="warning sign"
            />
            <br />
            <h4>Your diabetes is not under control</h4>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default withRouter(MellitusKidney);
