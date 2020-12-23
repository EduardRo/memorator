import React, { Component } from 'react';
import { dataMenus } from '../../Data/data.menus';
import MenuButton from '../menubutton/menuButton.component';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './menu.styles.scss';
import { withRouter } from 'react-router';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { menus: [] };
    this.startTest = this.startTest.bind(this);
  }

  componentDidMount() {
    this.setState({ menus: dataMenus });
  }

  startTest(codserie) {
    //alert('sunt aici');
    this.props.history.push(`/tests/test/${codserie}`);
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
                  codserie={menu.codserie}
                  denumireserie={menu.denumireserie}
                  onClick={(e) => this.startTest(e)}
                />
              );
            })}
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Menu);
