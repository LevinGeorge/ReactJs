import React from 'react';

const HoroscopeHeader = React.createClass({

  render() {
    return (
      <div className="horoscope-header">
        <div className="header-text">
          <h1><bold>Weekly Horoscope!</bold></h1>
          <p><bold>Read your fortune here today</bold>!</p>
        </div>
      </div>
    );
  }
});

export default HoroscopeHeader;
