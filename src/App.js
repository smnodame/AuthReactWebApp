import React, { Component } from 'react';
import { Navbar, Button, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
        <MuiThemeProvider>
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <Grid>
           <Row className="show-grid">
             <Col md={3}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
             <Col md={3}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
             <Col md={3}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
             <Col md={3}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
           </Row>
           <Row className="show-grid">
             <Col md={12}>
                <Card>
                 <CardHeader
                   title="URL Avatar"
                   subtitle="Subtitle"
                   avatar="images/jsa-128.jpg"
                 />
                 <CardMedia
                   overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                 >
                   <img src="http://wallpapercave.com/wp/pSwM6F3.jpg" alt="" />
                 </CardMedia>
                 <CardTitle title="Card title" subtitle="Card subtitle" />
                 <CardText>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                   Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                   Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                 </CardText>
                 <CardActions>
                   <FlatButton label="Action1" />
                   <FlatButton label="Action2" />
                 </CardActions>
                </Card>
             </Col>
           </Row>
         </Grid>
         <Paper zDepth={1} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
