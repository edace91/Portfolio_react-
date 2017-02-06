import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Graphic Design Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import DSSection from '../../components/DSSection'
import ABMSection from '../../components/ABMSection'
import LogoSection from '../../components/LogoSection'
import FlatButton from 'material-ui/FlatButton';

export default class GraphicDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#D84315"}}>
              <CardTitle>
                <img style={{ width:"450px"}} src="../../images/knockout_university_formal_horizontal.png"/>
              </CardTitle>
              <CardText>
              Several Marketing Campaigns and materials used to promote the various services that the Document Solutions department offers to the University. Through direct mail, inserts, and email blasts. 
              </CardText>
              <CardMedia> 
                <DSSection/>
              </CardMedia>  
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ backgroundColor: "black"}}>
              <CardMedia> 
                <img src="../../images/ABM_Screenshot.png" />
              </CardMedia> 
              <CardText>
                An interactive illustrative map of Austin music venues. 
              </CardText>
              <CardActions>
                <FlatButton label="More" href="https://www.facebook.com/AustinBandMap/"/>
              </CardActions>
              <CardMedia> 
                <ABMSection/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
      
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#607D8B"}}>
              <CardTitle
                title="Logos"
                subtitle="Collection of brand designs"
              />
              <CardText style={{ color: "#212121"}}>
                From Apps, charity foundations, to local buisnesses, logos crafted for a purpose.
              </CardText>
              <CardMedia> 
                <LogoSection/>
              </CardMedia>  
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ backgroundColor: "#1A237E"}}>
              <CardTitle
                title="Airman Heritage Museum"
                subtitle="Philantropy Booklett"
              />
              <CardText>
                Marketing packet for the promotion and collection of funds for the creation of a Airforce museum in San Antonio, Texas. 
              </CardText>
              <CardActions>
                <FlatButton label="Take a look" href="http://www.eduardoaceves.com/gallery/wp-content/uploads/2014/11/MKTG-AHF-online.pdf"/>
              </CardActions>
              <CardMedia> 
                <img src="../../images/Airforce.jpg" />
              </CardMedia>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}