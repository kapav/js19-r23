import React from 'react';

import './index.css';

class Pitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: ['', 'Гость', 'Модератор', 'Администратор']
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>pitch works!</p>
      </React.Fragment>
    );
  }
}

export default Pitch;
