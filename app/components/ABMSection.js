import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'none',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',

  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
};

const tilesData = [
  {
    img: '../../images/lamberts_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/HITW_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Mohawk_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Moody_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/parish_Web .png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Red7_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Frank_Erwin_Center_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/emos_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Backyard_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Austin_360_web.png',
    author: 'Eduardo Aceves',
  },
];


export default class ABMSection extends React.Component {
      
  render(){

    return(

      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>  
    );
  } 
}