import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: 500,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../../images/PROMO_NEW_poster_FLATTENED.png',
    author: 'Eduardo Aceves',
    featured: true,
  },
  
  {
    img: '../../images/envelopes_insert_v7_4x9_Page_1.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/WF_Insert_3_price_change_Page_1.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/CoursePacket.jpg',
    author: 'Eduardo Aceves',
    featured: true,
  },
  {
    img: '../../images/UT Line_Gift Holiday insert_V.3_Page_1.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/UT Line_Vday insert_v.2017_Page_1.png',
    author: 'Eduardo Aceves',

  },
  {
    img: '../../images/Final Invite.png',
    author: 'Eduardo Aceves',
    featured: true,
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */

export default class GraphicGallery extends React.Component {
  
  render(){

    return(

      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={180}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
