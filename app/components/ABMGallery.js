import React from 'react';
import Lightbox from 'react-images';
import FlatButton from 'material-ui/FlatButton';

export default class ABMGallery extends React.Component {

  constructor() {
    super()
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      images: [

        { src: '../../images/AustinBandMap_Web.png' },
        { src: '../../images/HITW_web.png' }, 
        { src: '../../images/Mohawk_web.png' }, 
        { src: '../../images/Red7_web.png'},
        { src: '../../images/Frank_Erwin_Center_web.png' },
        { src: '../../images/parish_Web.png' },  
        { src: '../../images/Backyard_web.png'},
        { src: '../../images/lamberts_web.png'}, 
        { src: '../../images/emos_web.png'}, 
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