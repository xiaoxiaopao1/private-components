import React from 'react';
import './index.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.refContainer = React.createRef();
  }

  componentDidMount() {
    console.log(this.refContainer.current.offsetWidth);
    console.log(this.refContainer.current.scrollWidth);
    console.log(this.refContainer.current.offsetWidth < this.refContainer.current.scrollWidth);
  }

  render() {
    return (
      <div className='page-home'>
        <div style={{width: '100px'}}>
          <popover>
            <p ref={this.refContainer}>111111111111111111111111111111111111111111111111</p>
          </popover>
          
        </div>
      </div>
    )
  }
}