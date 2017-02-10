import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions, CardMedia } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import PhotographyGallery from '../components/PhotographyGallery'

export default class Welcome extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Card>
              <CardMedia>
                <PhotographyGallery/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card 
                style={{ 
                  backgroundColor: "#52616B",
                  padding: "10px",
                  width:"100%",
                 
                }}
                containerStyle= {{border:"20px"}}>
              <CardTitle
                title="Eduardo Aceves"
                subtitle="Graphic Designer and Web Developer"
              />
              <CardText>
                 
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
      </div>
    );
  }
}