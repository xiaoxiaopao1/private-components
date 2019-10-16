import React from 'react';
import './index.scss';
import Test from './Test';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.refContainer = React.createRef();
  }

  componentDidMount() {
    const test = new Test();
    console.log(test);
  }

  render() {
    return (
      <div className='page-home'>
        
      </div>
    )
  }
}