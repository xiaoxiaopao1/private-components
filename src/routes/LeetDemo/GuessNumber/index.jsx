import React from 'react';
import { Input } from 'antd';
import './index.scss';


export default class GuessNumber extends React.Component {
  componentDidMount() {

  }

  render() {
    return(
      <div>
        <Input className='ant-input-disabled' value='123' />
      </div>
    )
  }
}



