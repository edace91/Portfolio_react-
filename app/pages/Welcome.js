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
          <Card 
              style={{ 
                backgroundColor: "#546E7A",
                padding: "50px",
                border:"30px",
                borderColor:"#546E7A",
                width:"100%",
                left:"0"
              }}
              containerStyle= {{border:"30px"}}>
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
                  style={{ Color: "#00BCD4"}}
                />
              </Link>
              <Link to={'Gallery'}>
                <RaisedButton
                  label="Gallery"
                  style={{ Color: "#00BCD4"}}
                />
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}