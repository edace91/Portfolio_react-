import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


export default class Welcome extends React.Component {

  render() {
    return (
      <Row>
        <Col md={12}>
          <Card>
            <CardTitle
              title="Welcome"
              subtitle="to my portfolio"
            />
            <CardText>
              I hope this serves as a good starting point for everyone! This example should serve as a good example of how to layout your React applications. It also incorporates npm packages for a grid system and a front-end componenet library built for React.This is cooooool
            </CardText>
            <CardActions>
              <Link to={'secondpage'}>
                <RaisedButton
                  label="Go to Second Page"
                  primary={true}
                />
              </Link>
              <Link to={'thirdpage'}>
                <RaisedButton
                  label="Go to third Page"
                  secondary={true}
                />
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}