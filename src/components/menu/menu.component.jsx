import React, { Component } from 'react';
import { dataMenus } from '../../Data/data.menus';
import MenuButton from '../menubutton/menuButton.component';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './menu.styles.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { menus: [] };
  }

  componentDidMount() {
    this.setState({ menus: dataMenus });
  }

  render() {
    return (
      <Grid container className='container'>
        <Grid item xs={12} md={12} lg={12} className={'itemGrid'}>
          <ButtonGroup orientation='vertical' className={'buttonGroup'}>
            {this.state.menus.map((menu, index) => {
              return (
                <MenuButton
                  key={index}
                  idtest={menu.idtest}
                  codclasa={menu.codclasa}
                  codmaterie={menu.codmaterie}
                  denumireserie={menu.denumireserie}
                />
              );
            })}
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
}

export default Menu;
