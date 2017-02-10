import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardMedia, } from 'material-ui/Card'



export default class About extends React.Component {

  render() {
    return (
      <Row>
        
        <Col Col md={6}>
            <Card style={{
            backgroundColor: "#52616B",
            padding: "10px",
            border:"20px",
            borderColor:"#52616B",
            width:"100%",
            left:"0"
          }}>
            <CardMedia>
                <img src="../../images/self.jpg" />
            </CardMedia>
          </Card>
        </Col>
        <Col Col md={6}>
          <Card style={{
            backgroundColor: "#52616B",
            padding: "50px",
            border:"30px",
            borderColor:"#52616B",
            width:"100%",
            left:"0"
          }}>
            <CardTitle
              title="About me"
              subtitle="Eduardo Aceves"
            />
            <CardText style= {{ fontStyle:"oblique", "line-height":"200%"}}>
               I am a graphic artist that has the ability to translate any visual idea into a reality, through an extensive knowledge in digital art tools as well as an ability to collaborate with clients to reach desired goal. While other graphic design sources can become impersonal and generic, my designs draw from traditional fine art practices like drawing, painting, and photography to produce unique, creative and aesthetically pleasing digital art. In this way I give employers and customers the skills and creative talent to make any project, whether it be marketing materials, web illustrations, or concept creation, a true work of art. The work I am most interested in delving into is interactive art, particularly in entertainment.
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}
