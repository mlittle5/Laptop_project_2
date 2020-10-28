import React, { Component } from 'react';
// import USCurrencyFormat from './currency';
import Options from './options';


class Summary extends Component {
    
    render() { 
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return <Options 
              key={idx}
              feature={feature}
              idx={idx}
              selected={this.props.selected}
            />
          });
      
          // const total = Object.keys(this.props.selected).reduce(
          //   (acc, curr) => acc + this.props.selected[curr].cost,
          //   0
          // );
        return ( 
            <>{summary}</>
         );
    }
}
 
export default Summary;