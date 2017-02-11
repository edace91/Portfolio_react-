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
            <CardText style= {{lineHeight:"150%", textIndent:"40px"}}>
              I’m a designer proficient in both print and web design. I Live and work in Austin, Texas. Once completing my undergrad at the University of Texas at Austin in 2014 and working for its print shop soon after, I took part in a full stack coding bootcamp within the university. The intensive six month certification program expanded my traditional studio art skill set into web design. 
              Though I am used to working individually, I enjoy and excel working within a team environment.Usually taking the leading role in the conceptualizing process and practicing good communication throughout production with all team members. 
              My ideal work environment is a challenging and creative atmosphere that allows me to grow as a designer all while creating new and innovative projects. Through hard work and determination I hope the  projects I work on, as cheesy as it sounds, will ultimately make the world a better place.
            </CardText>
            <CardText style= {{lineHeight:"150%", textIndent:"40px"}}>
              Aside from working or practicing my coding skills, I spend part of my free time at the University Gym. Ever since high school, weight training has been a way to maintain a healthy lifestyle and also has taught me the power of discipline and practice in order to build strength and see progress. In congruence with exercise Another aspect of the healthy lifestyle I try to lead is another also one of my hobbies, cooking. Spending time in the kitchen trying out different recipes that use local produce is challenging at times but is mainly rewarding and delicious. To unwind film is a passion of mine, from the high brow cinema of the Art house films, to contemporary animation and even social documentaries, film fascinates and inspires me more than any other medium. Aside from those interests, I hope to have more free time and opportunities to design for non profits or charities as have had in the past. 
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}
