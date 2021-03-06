import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Graphic Design Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Sample from '../../components/Sample'
import ABMGallery from '../../components/ABMGallery'
import GraphicGallery from '../../components/GraphicGallery'
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
            <Card style={{ 
              backgroundColor: "#52616B",
          }}>
              <CardTitle>
                <img style={{ width:"450px"}} src="../../images/knockout_university_formal_horizontal.png"/>
              </CardTitle>
              <CardText style={{lineHeight:"200%"}}>
              Several Marketing Campaigns and materials used to promote the various services that the Document Solutions department offers to the University. Through direct mail, inserts, and email blasts. 
              </CardText>
              <CardMedia> 
                <GraphicGallery/>
              </CardMedia>
              <Sample/>  
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle>
                <img style={{ width:"120px"}} src="../../images/Austin-Band-Map-Logo(for-black-backgrounds).png"/>
              </CardTitle>
              <CardText style={{lineHeight:"200%"}}>
                An interactive illustrative map of Austin music venues. 
              </CardText>
              <CardActions>
                <FlatButton label="More" href="https://www.facebook.com/AustinBandMap/"/>
              </CardActions>
              <CardMedia> 
                <ABMSection/>
              </CardMedia> 
              <ABMGallery/>
            </Card>
          </Col>
        </Row>
      <br></br>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Logos"
                subtitle="Collection of brand designs"
              />
              <CardText style={{lineHeight:"200%"}}>
                From Apps, charity foundations, to local buisnesses, logos crafted for a purpose.
              </CardText>
              <CardMedia> 
                <LogoSection/>
              </CardMedia>  
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Airman Heritage Museum"
                subtitle="Philantropy Booklett"
              />
              <CardText style={{lineHeight:"200%"}}>
                Marketing packet for the promotion and collection of funds for the creation of a Airforce museum in San Antonio, Texas. 
              </CardText>
              <CardActions>
                <FlatButton label="Take a look" href="http://www.eduardoaceves.com/gallery/wp-content/uploads/2014/11/MKTG-AHF-online.pdf"/>
              </CardActions>
              <CardMedia> 
                <img src="../../images/Airforce.jpg"/>
              </CardMedia>
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
    );
  }
}