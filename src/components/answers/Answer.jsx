import React from 'react';
import './Answers.css';
import Button from '@material-ui/core/Button';

const Answer = (props) => {
  return (
    <Button className={'buton'} onClick={props.onClick}>
      <img src={props.img} alt='answer' />
    </Button>
  );
};

export default Answer;
