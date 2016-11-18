import React from 'react';

import HoroscopeTemplate from './HoroscopeTemplate';

const HoroscopePanel = React.createClass({

  propTypes: {
    starSigns: React.PropTypes.array.isRequired
  },


  renderStarSignTemplates() {
    const { starSigns } = this.props; //this.props.starSigns

    return starSigns.map((starSign) => //Loop through 12 starSigns and map each of them
      <div key={starSign.name}>
        <HoroscopeTemplate
          starSign={starSign}
        />
    </div>
    );
  },

  render() {
    const starSignTemplates = this.renderStarSignTemplates();

    return (
      <div className="horoscope-panel">
        {starSignTemplates}
      </div>
    );
  }
});

export default HoroscopePanel;
