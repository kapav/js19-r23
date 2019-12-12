import React from 'react';

import './index.css';

class Staircase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: ['', 'Гость', 'Модератор', 'Администратор']
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>staircase works!</p>
      </React.Fragment>
    );
  }
}

export default Staircase;
