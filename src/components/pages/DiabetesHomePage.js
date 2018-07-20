import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import { Container, Menu, Dropdown, Icon } from "semantic-ui-react";
import DiabetesType from "../pages/DiabetesType";
import InsipidusDiabetesType from "../pages/InsipidusDiabetesType";
import MellitusDiabetesType from "../pages/MellitusDiabetesType";
import MellitusEye from "../pages/MellitusEye";
import MellitusCardiac from "../pages/MellitusCardiac";
import MellitusKidney from "../pages/MellitusKidney";

const routes = [
  {
    path: "/home",
    main: () => (
      <div>
        <DiabetesType />
      </div>
    )
  },
  {
    path: "/insipidus",
    main: () => (
      <div>
        <InsipidusDiabetesType />
      </div>
    )
  },
  {
    path: "/mellitus",
    main: () => (
      <div>
        <MellitusDiabetesType />
      </div>
    )
  },
  {
    path: "/mellitus/eye",
    main: () => (
      <div>
        <MellitusEye />
      </div>
    )
  },
  {
    path: "/mellitus/cardiac",
    main: () => (
      <div>
        <MellitusCardiac />
      </div>
    )
  },
  {
    path: "/mellitus/kidney",
    main: () => (
      <div>
        <MellitusKidney />
      </div>
    )
  }
];

class DiabetesHomePage extends React.Component {
  state = {};
  handleClick() {
    this.props.history.push(`/`);
  }
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Menu
              fixed="top"
              inverted
              size="large"
              style={{
                paddingRight: "7em",
                paddingLeft: "4em"
              }}
              borderless
            >
              <Menu.Item header style={{ fontSize: "20px" }}>
                <Link to="/home"> Diabetes App </Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Dropdown
                  pointing
                  style={{ color: "white", paddingTop: "1em" }}
                  trigger={
                    <Icon inverted name="user circle outline" size="big" />
                  }
                >
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.handleClick()}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu>
          </Container>
          <Container>
            <div>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

DiabetesHomePage.propTypes = {
  getUserDetails: PropTypes.func.isRequired
};

export default withRouter(DiabetesHomePage);
