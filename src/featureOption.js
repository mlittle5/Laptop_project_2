import React, { Component } from 'react';
import FEATURES from './data'
import slugify from "slugify";
import USCurrencyFormat from './currency';

class FeatureOption extends Component {
    render() { 
        const options = this.props.FEATURES[this.props.feature].map((item) => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(this.props.feature)}
                  checked={item.name === this.props.selected[this.props.feature].name}
                  onChange={(e) => this.props.updateFeature(this.props.feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
          });
        return ( 
            <>{options}</>
         );
    }
}
 
export default FeatureOption;