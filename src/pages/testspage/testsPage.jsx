import React, { Component } from 'react';
import HeaderPage from '../../components/headermenu/header.menu.component';
import Menu from '../../components/menu/menu.component';

export class TestsPage extends Component {
  render() {
    return (
      <div>
        {' '}
        <HeaderPage />
        <Menu />
      </div>
    );
  }
}

export default TestsPage;
