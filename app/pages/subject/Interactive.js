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
                A progression of the concept art process, including renderings of level design.
              </CardText>
              <CardMedia>
                <ConceptArtGallery/>
              </CardMedia> 
              <ConceptArtLightbox/> 
              <CardHeader
                title="Contribution: Environment Artist and Concept Art."
                subtitle="see more"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true} style={{"line-height":"200%", textIndent:"40px"}}>
                I graduated from UT Austin with a BA in Studio Art focusing in Digital art and Media. During my college career I mainly delved into the fine arts, covering art and design history while also training my eye in concepts such as composition and color theory. Mastering these concepts through classes that interested me the most, particularly high level black and white analog and digital photography classes. Once senior year began, broadening my curriculum into other departments outside of the fine arts became a possibility by enrolling in the bridging disciplines program. 
                <br></br>The program allowed me to enroll in visual effects classes under the film and television school; it also required me to take computer science courses. All this exposure to different areas of study culminated into the Capstone program. The capstone program is a video game development program UT offers, it brings together students from the arts, computer sciences, engineering, film and television to create a working 3D video game. I was accepted into this special course and became the lead concept artist for the video game our team developed. This experience was the most eye opening class in my undergrad. It consequentially made me change the way I created art by forcing me to work in a team in which each member had their unique specialization. I got the opportunity to learn how to 3d model environments and work collaboratively in github, and finally present my game to video game industry professionals from several video game companies and have them play test it. Each experience and lesson in my undergrad culminated in realizing that I wanted to continue on to working in the digital realm, applying my artistic skills to something within the tech industry.
              </CardText>
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
      
    );
  }
}