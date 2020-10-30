import React, { Component } from "react";
// import slugify from "slugify";
import FEATURES from "./data";
import FeatureOption from "./featureOption";
// import USCurrencyFormat from './currency'

// const USCurrencyFormat = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

class Feature extends Component {
  render() {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      // const options = FEATURES[feature].map((item) => {
      //   const itemHash = slugify(JSON.stringify(item));
      //   return (
      //     <div key={itemHash} className="feature__item">
      //       <input
      //         type="radio"
      //         id={itemHash}
      //         className="feature__option"
      //         name={slugify(feature)}
      //         checked={item.name === this.props.selected[feature].name}
      //         onChange={(e) => this.props.updateFeature(feature, item)}
      //       />
      //       <label htmlFor={itemHash} className="feature__label">
      //         {item.name} ({USCurrencyFormat.format(item.cost)})
      //       </label>
      //     </div>
      //   );
      // });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeatureOption
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        </fieldset>
      );
    });
    return <>{features}</>;
  }
}

export default Feature;
