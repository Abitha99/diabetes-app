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
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="Diabetes Application"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: "0.5em",
              marginTop: "1.2em"
            }}
          />
          {/* <Header
              as='h2'
              content='Do whatever you want when you want to.'
              inverted
              style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
              }}
            /> */}
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
                  New to us? <a href="#">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </Segment>
    );
  }
}
