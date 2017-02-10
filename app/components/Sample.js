import React from 'react';
import Lightbox from 'react-images';
import FlatButton from 'material-ui/FlatButton';

export default class Sample extends React.Component {

  constructor() {
    super()
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      images: [

        { src: '../../images/PROMO_NEW_poster_FLATTENED.png' },
        { src: '../../images/envelopes_insert_v7_4x9_Page_1.png' }, 
        { src: '../../images/CoursePacket.jpg' }, 
        { src: '../../images/UT Line_Gift Holiday insert_V.3_Page_1.png' },
        { src: '../../images/UT Line_Vday insert_v.2017_Page_1.png' },
        { src: '../../images/WF_Insert_3_price_change_Page_1.png' },  
        { src: '../../images/Final Invite.png'} 
      ]
    }
    this.onOpen = this.onOpen.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onClickPrev = this.onClickPrev.bind(this)
    this.onClickNext = this.onClickNext.bind(this)
  }

  render() {
    const { currentImage, images, lightboxIsOpen } = this.state
    return (
      <div>
        <FlatButton style= {{margin:"10px", border: "10px"}} onClick={this.onOpen}>Gallery</FlatButton>
        <Lightbox
          currentImage= {currentImage}
          images={images}
          isOpen={lightboxIsOpen}
          onClickPrev={this.onClickPrev}
          onClickNext={this.onClickNext}
          onClose={this.onClose}
        />
      </div>
    );
  }

  onOpen() {
    this.setState({ lightboxIsOpen: true })

  }

  onClose() {
    this.setState({ lightboxIsOpen: false })
  }

  onClickPrev() {
    this.setState({ currentImage: Math.max(0, this.state.currentImage - 1) })
  }

  onClickNext() {
    this.setState({
      currentImage: Math.min(this.state.images.length - 1, this.state.currentImage + 1)
    })
  }

}
