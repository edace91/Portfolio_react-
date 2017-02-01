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
              Welcome to my portfolio! Hope you like what you see and contact me, thank you! 
            </CardText>
            <CardActions>
              <Link to={'About'}>
                <RaisedButton
                  label="about me"
                  primary={true}
                />
              </Link>
              <Link to={'Gallery'}>
                <RaisedButton
                  label="Gallery"
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