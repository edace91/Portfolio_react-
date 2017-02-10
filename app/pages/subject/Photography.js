import React from 'react'
import { Row, Col } from 'react-grid-system'
//import photography Gallery component
import GardenGallery from '../../components/GardenGallery'
import GardenLightbox from '../../components/GardenLightbox'
import CoupleGallery from '../../components/CoupleGallery'
import CoupleLightbox from '../../components/CoupleLightbox'
import HauntedGallery from '../../components/HauntedGallery'
import HauntedLightbox from '../../components/HauntedLightbox'
import QuidditchGallery from '../../components/QuidditchGallery'
import QuidditchLightbox from '../../components/QuidditchLightbox'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Photography extends React.Component {

  render() {
    return (
      
      <div>
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Garden"
                subtitle="Digital color DSLR"
              />
              <CardText style={{ lineHeight:"200%"}}>
                Series depicting my parent's backyard, through composition and thoughful symbolism a story is revealed. One just as ephemeral as a spring day.
              </CardText>
              <CardMedia>
                <GardenGallery/>
              </CardMedia> 
              <GardenLightbox/>
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
              <CardText style={{lineHeight:"200%"}}>
                Series depicting couples at different points of their relationship.
                For these projects, I decided to investigate the social perception of relationships in current society. I drew inspiration for the construction of my images by considering Jan Van Eyck’s Arnolfini Portrait and its use of symbols to portray the state of the relationship. From the deconstruction of a suburban backyard to a portrait of a couple, the images I take aim to elicit the attention of our universal need to connect.
                As time has progressed, what is considered the ideal image of a relationship has evolved. Cultural values are resurrected, adopted, maintained and left behind. Defying and even surpassing these changes, is our need to connect with one another. This need remains a constant part of the human condition, transcending even the social norms of sexuality and ethnicity. By juxtaposing symbols within the scene a personal dialogue emerges, revealing an autobiographical theme to the images. In documenting these relationships and the exploration of their environments in my images I shed light on the fact that love does not discriminate.
              </CardText>
              <CardMedia>
                <CoupleGallery/>
              </CardMedia>
              <CoupleLightbox/>  
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
              <CardMedia>
                <HauntedGallery/>
              </CardMedia>
              <HauntedLightbox/>  
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
              <CardText style={{lineHeight:"200%"}}>
                In this series I chose to focus on portraits, I used medium format and 4 by 5 cameras. I came across the idea of photographing the University of Texas Quidditch players. Quidditch, adapted from the popular Harry Potter series by JK Rowling in 2005 at Middlebury College in Vermont is now played at over 300 universities and high schools throughout North America, Australia, and Europe. The University of Texas at Austin holds the world championship in 2013 and though the sport is a chance for these students to be social and unwind, there is a great spirit of competition they share to be the champions. In photographing these athletes I try to capture them after a long practice or match where they are exhausted and fresh off the field; to catch a glimpse of what drives them in their vulnerability.
              </CardText>
              <CardMedia>
                <QuidditchGallery/>
              </CardMedia> 
              <QuidditchLightbox/> 
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}