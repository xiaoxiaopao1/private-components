import React from 'react';
import './index.scss';



import { routeJson } from '@/constants/routeConf';
import BreadCrumb from '@/components/Breadcrumb';

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-page1'>
        <BreadCrumb />
      </div>
    )
  }
}