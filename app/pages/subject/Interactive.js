import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Interactive Gallery component
import InteractiveGallery from '../../components/InteractiveGallery'
import ConceptArtGallery from '../../components/ConceptArtGallery'
import ConceptArtLightbox from '../../components/ConceptArtLightbox'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Interactive extends React.Component {

  render() {
    return (
      //place the Interactive component between the First Row
      <div>
      	<Row>
          <Col md={5}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Crucible"
                subtitle="AKA The Runners"
              />
              <CardText style={{"line-height":"200%"}}>
                Crucible is a mobile 2.5 D metroidvania game with platforming and stealth elements, set in a dystopic science fiction world.
                3D modeled the environment using Maya and Created Concept art for the Runners Video Game. 
              </CardText>
              <CardActions>
                <FlatButton label="More" href="https://www.facebook.com/cruciblevideogame/"/>
              </CardActions>
              <CardMedia
                overlay={<CardTitle title="Mobile Game" subtitle="The Game was designed using Unity game engine for mobile" />}
              >
                <img src="../../images/stock-playphone.jpg" />
              </CardMedia>  
            </Card>
          </Col>
          <Col md={7}>
            <InteractiveGallery/>
          </Col>
      	</Row>
        <br></br>
        <Row>
          <Col md={12}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Concept Art"
                subtitle="Environments and Storyboards"
              />
              <CardText>
                A progreassion of the concept art process, including renderings of level design.
              </CardText>
              <CardMedia>
                <ConceptArtGallery/>
              </CardMedia> 
              <ConceptArtLightbox/> 
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}