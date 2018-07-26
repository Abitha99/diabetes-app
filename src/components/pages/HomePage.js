import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Form,
  Message,
  Segment
} from "semantic-ui-react";
import "../../assests/css/baymax.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push(`/home`);
  }
  render() {
    return (
      <Segment
        className="landpage-image"
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="Baymax"
            icon="heartbeat"
            color="red"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginTop: "0.7em",
              paddingLeft: "2.5em"
            }}
          />
          <Header
            as="h2"
            content="AI powered personal healthcare companion"
            inverted
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginBottom: "1.4em"
            }}
          />
          <div className="login-form">
            <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
            <Grid
              textAlign="center"
              style={{ height: "100%" }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  Log-in to your account
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />

                    <Button
                      color="teal"
                      fluid
                      size="large"
                      onClick={() => this.handleClick()}
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to our application? <a href="#">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </Segment>
    );
  }
}
