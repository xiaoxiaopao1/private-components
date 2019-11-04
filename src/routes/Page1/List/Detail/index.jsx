import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import './index.scss';

export default class Detail extends React.Component {
  componentDidMount() {
    // console.log(this.props);
  }
  render() {
    return (
      <div>
        <Breadcrumb />
        <p>detail</p>
      </div>
    )
  }
}