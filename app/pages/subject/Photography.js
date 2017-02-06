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
            <Card style={{ backgroundColor: "#F5F5F5"}}>
              <CardTitle
                style={{ color: "#212121"}}
                title="Garden"
                subtitle="Digital color DSLR"
              />
              <CardText style={{ color: "#212121"}}>
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
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#F5F5F5"}}>
              <CardTitle
                title="Couples"
                subtitle="4x5 large Format B&W"
              />
              <CardText style={{ color: "#212121"}}>
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
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#F5F5F5"}}>
              <CardTitle
                title="Black Swan Inn"
                subtitle="Medium Format B&W"
              />
              <CardText style={{ color: "#212121"}}>
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
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#F5F5F5"}}>
              <CardTitle
                title="Quidditch Players"
                subtitle="Medium Format and Large Format B&W"
              />
              <CardText style={{ color: "#212121"}}>
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
      </div>
      //add Button list linking to other page subjects.
    );
  }
}