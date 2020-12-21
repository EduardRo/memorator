import React from 'react';
import './menuButton.styles.scss';
import Button from '@material-ui/core/Button';

const MenuButton = (props) => {
  return (
    <Button className={'buton'} onClick={props.onClick}>
      {props.denumireserie}
    </Button>
  );
};

export default MenuButton;
