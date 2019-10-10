import React from 'react';
import { Button } from 'antd';
import './index.scss';

export default class Page404 extends React.Component {
  constructor(props) {
    super(props);
    this.initErrorPage();
  }

  initErrorPage = () => {
    this.props.toggleShowCommon(false);
  }

  componentWillUnmount() {
    this.props.toggleShowCommon(true);
  }

  backHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='page-404'>
        <h1>page 404</h1>
        <Button onClick={this.backHome}>返回首页</Button>
      </div>
    )
  }
}