import React from 'react'
import { Row, Col } from 'react-grid-system'
//import photography Gallery component
import GardenGallery from '../../components/GardenGallery'
import CoupleGallery from '../../components/CoupleGallery'
import HauntedGallery from '../../components/HauntedGallery'
import QuidditchGallery from '../../components/QuidditchGallery'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Photography extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Garden"
                subtitle="Digital color DSLR"
              />
              <CardText>
                Series depicting the backyard of my parents, through composition and thoughful symbolism a story is revealed. One just as ephemeral as a spring day.
              </CardText>
              <CardActions>
                <FlatButton label="More" />
              </CardActions>
              <CardMedia>
                <GardenGallery/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Couples"
                subtitle="4x5 large Format B&W"
              />
              <CardText>
                Series depicting couples at different points of their relationship.
              </CardText>
              <CardActions>
                <FlatButton label="More" />
              </CardActions>
              <CardMedia>
                <CoupleGallery/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Black Swan Inn"
                subtitle="Medium Format B&W"
              />
              <CardText>
                Architectural and Interior photo series of the haunted Black Swan in in San Antonio, TX.
              </CardText>
              <CardActions>
                <FlatButton label="More" />
              </CardActions>
              <CardMedia>
                <HauntedGallery/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Quidditch Players"
                subtitle="Medium Format and Large Format B&W"
              />
              <CardText>
                Series of portraits depicting National Champions, The University of Texas Quidditch Team.
              </CardText>
              <CardActions>
                <FlatButton label="More" />
              </CardActions>
              <CardMedia>
                <QuidditchGallery/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}