import React from 'react';

import './Questions.css';

const Question = (props) => {
  return (
    <div className={'questionButton'}>
      <img src={props.img} alt='question' />
    </div>
  );
};
export default Question;
